import Marzipano from 'marzipano'
import MarzipanoData from './MarzipanoData'
import MarzipanoHotspotContainer from './MarzipanoHotspotContainer'


// Load all the tiles for all the areas
const importAll = (r) => {
  return r.keys().map(r)
}
importAll(require.context('../../img/areas/', true, /\.(png|jpe?g|svg)$/))
importAll(require.context('../../video/', true, /\.(mp4)$/))

export default function(store, dispatch, history) {
  let scenes = []
  let currentSceneData = null
  let currentSpots = null
  let currentDirection = null
  let viewer = null
  let idleTimer = null
  let userControlling = false
  let currentHighlightedSpot = null
  let animationOngoing = false

  const init = () => {
    viewer = new Marzipano.Viewer(document.getElementById('marzipano'), {
      controls: {
        scrollZoom: false,
        pinchZoom: false
      }
    })

    scenes = MarzipanoData.scenes.map((data) => {
      const preview =  require(`../../img/areas/tiles/${data.id}/preview.jpg`)
      let geometry = new Marzipano.CubeGeometry(data.levels)
      let source = Marzipano.ImageUrlSource.fromString(`images/src/img/areas/tiles/${data.id}/{z}/{f}/{y}/{x}.jpg`, {
        cubeMapPreviewUrl: preview
      })

      if(window.electron) {
        geometry = new Marzipano.EquirectGeometry([{ width: 6000 }])
        source = Marzipano.ImageUrlSource.fromString(`images/src/img/areas/${data.id}_equirect.jpg`)
      }

      const initialView = {
        pitch: data.initialViewParameters.pitch,
        yaw: data.initialViewParameters.yaw,
        fov: data.initialViewParameters.fov
      }

      const startView = Object.assign({}, initialView)
      startView.fov -= 0.3

      const view = new Marzipano.RectilinearView(startView)
      const scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view
      })

      return {
        data,
        scene,
        view,
        initialView,
      }
    })

    viewer.controls().addEventListener('active', active)
    viewer.controls().addEventListener('inactive', inactive)
    viewer.addEventListener('viewChange', viewChangeEvent)
  }

  const isPositionInView = (position) => {
    const spotYaw = Math.abs(position.yaw) > 180 ? position.yaw - 180 : position.yaw

    // we want the position to be (+180) – (-180), not 0-360
    const spotPos = toDegrees(spotYaw) > 180 ? toDegrees(spotYaw) - 360 : toDegrees(spotYaw)
    let diff = Math.round(Math.abs(currentDirection - spotPos))

    // Diff can never be over 180 since -180 and 180 is basically the same direction :´)
    if(diff > 180) {
      diff = Math.abs(diff - 360)
    }

    return diff < 30
  }

  const toDegrees = (radians) => {
    return radians * 180 / Math.PI
  }

  const viewChangeEvent = () => {
    // Don't highlight stuff while animating
    if(animationOngoing === true) {
      return
    }

    currentDirection = toDegrees(viewer.view()._yaw)
    if(!currentSpots) { return }

    const heroPos = Object.assign({}, currentSceneData.initialView)
    if(isPositionInView(heroPos) && store.getState().ui.heroMinimized === true) {
      dispatch({
        type: 'EXPAND_HERO'
      })
    } else if(!isPositionInView(heroPos) && store.getState().ui.heroMinimized === false) {
      dispatch({
        type: 'MINIMIZE_HERO'
      })
    }

    currentSpots.getHotspots()
      .filter((spot) => spot.target)
      .map((spot) => {
        const hotspot = spot.target.querySelector('.Hotspot')

        if(hotspot) {
          if(isPositionInView(spot.position)) {
            if(hotspot.classList.contains('InView')) { return  }
            hotspot.classList.add('InView')
          } else {
            if(!hotspot.classList.contains('InView')) { return  }
            hotspot.classList.remove('InView')
          }
        }
      })
  }

  const active = () => {
    if(userControlling === true) {
      return
    }

    userControlling = true
    pauseIdleMovement()
  }

  const inactive = () => {
    userControlling = false
    idleTimer = setTimeout(startIdleMovement, 10000)
  }

  const removeSpots = () => {
    currentSpots.remove()
    currentSpots = null
  }

  const addSpots = (spots) => {
    if(!currentSceneData) { return }

    if(!currentSpots) {
      currentSpots = new MarzipanoHotspotContainer(currentSceneData.scene, spots, (id) => {
        history.push(`/${currentSceneData.data.id}/${id}`)
      })
    }
  }

  const fromWhite = () => {
    return function(val, newScene) {
      //newScene.layer().setEffects({ opacity: val })
      newScene.layer().setEffects({ colorOffset: [ 1-val, 1-val, 1-val, 0 ] })

      newScene.layer().setEffects({
        /*opacity: val,*/
        colorOffset: [ 1-val, 1-val, 1-val, 0 ]
      })
    }
  }

  const switchTo = (id, spots) => {
    if(currentSpots) {
      removeSpots()
    }

    currentSceneData = scenes.find((item) => item.data.id === id)
    currentSceneData.scene.switchTo({
      transitionDuration: 600,
      transitionUpdate: fromWhite()
    })
    currentSceneData.scene.lookTo(currentSceneData.initialView, {
      transitionDuration: 0
    })

    addSpots(spots)
  }

  const showHotspots = () => {
    if(!currentSpots) {
      return
    }
    currentSpots.show()
  }

  const hideHotspots = () => {
    if(!currentSpots) {
      return
    }
    currentSpots.hide()
  }

  const highlightHotspot = (id) => {
    if(!currentSpots || (id === currentHighlightedSpot)) {
      return
    }

    //console.log('  Highlight Hotspot', id)
    animationOngoing = true
    currentHighlightedSpot = id
    clearOldIdleTimer()
    disableControls()

    currentSpots.highlight(id)

    setTimeout(() => {
      animationOngoing = false
    }, currentSpots.animSpeed)
  }

  const unHighlightHotspot = () => {
    currentHighlightedSpot = null
    zoomOut()
  }

  const endHero = () => {
    zoomOut()
  }

  const startHero = () => {
    pauseIdleMovement()
    const heroPos = Object.assign({}, currentSceneData.initialView)
    heroPos.fov -= 0.4
    currentSceneData.scene.lookTo(heroPos, {
      transitionDuration: 1000
    })
  }

  const zoomOut = () => {
    if(!currentSceneData) {
      return
    }

    // If already zoomed out
    if(viewer.view()._fov === currentSceneData.initialView.fov) {
      return
    }

    animationOngoing = true
    const pos = {
      pitch: viewer.view()._pitch,
      yaw: viewer.view()._yaw,
      fov: currentSceneData.initialView.fov
    }

    const animSpeed = 1000
    currentSceneData.scene.lookTo(pos, {transitionDuration: animSpeed})
    inactive()
    setTimeout(() => {
      enableControls()
      animationOngoing = false
    }, animSpeed)
  }

  const enableControls = () => {
    viewer.controls().enable()
  }

  const disableControls = () => {
    viewer.controls().disable()
  }

  const pauseIdleMovement = () => {
    clearOldIdleTimer()
    currentSceneData.scene.stopMovement()
  }

  const startIdleMovement = () => {
    clearOldIdleTimer()
    currentSceneData.scene.startMovement(Marzipano.autorotate({
      yawSpeed: 0.007,
      targetPitch: currentSceneData.initialView.pitch,
    }))
  }

  const clearOldIdleTimer = () => {
    if (idleTimer) {
      clearTimeout(idleTimer)
      idleTimer = null
    }
  }

  const updateHotspots = (newSpots) => {
    if(currentSpots) {
      currentSpots.update(newSpots)
    }
  }

  const recreateHotspots = (newSpots) => {
    // Wait for react to render markup of new hotspots
    // before trying to attach them to marzipano
    setTimeout(() => {
      removeSpots()
      addSpots(newSpots)
      showHotspots()
    }, 500)
  }

  init()

  return {
    userActive: active,
    addSpots,
    switchTo,
    showHotspots,
    hideHotspots,
    highlightHotspot,
    startHero,
    endHero,
    zoomOut,
    pauseIdleMovement,
    startIdleMovement,
    updateHotspots,
    recreateHotspots,
    unHighlightHotspot
  }
}
