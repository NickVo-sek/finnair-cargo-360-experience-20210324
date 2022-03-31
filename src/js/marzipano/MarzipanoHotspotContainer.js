export default function(scene, hotspots, clickHandler) {

  const spots = hotspots.map(item => item)
  const container = scene.hotspotContainer()

  const animSpeed = 1000
  const baseFov = 1.5707963267948966 // TODO take this from initialView
  const zoomEffectAmount = 0.65
  let initialized = false

  const init = () => {
    if(initialized === true) {
      return
    }
    //console.log('  Create', spots.length, 'hotspots')

    initialized = true
    spots.forEach((spot) => {
      const markup = document.getElementById(spot.id)
      if(!markup) {
        console.warn(`Could not get markup for hotspot ${spot.id}`)
      } else {
        // This breaks animations.
        // Removing it breaks admin's "add hotspot" -feature

        // ADMIN MODE
        //const clone = markup.cloneNode(true)
        //spot.target = clone

        // ANIMATION MODE
        spot.target = markup
        spot.target.addEventListener('click', onClick)
        spot.hotspot = container.createHotspot(spot.target, spot.position, spot.settings)
      }
    })
  }

  const remove = () => {
    //console.log('  Remove', container.listHotspots().length, 'hotspot event listeners')
    for (var i = 0; i < spots.length; i++) {
      if(spots[i].target) {
        spots[i].target.removeEventListener('click', onClick)
      }
    }

    container.listHotspots()
      .map((hotspot) => {
        container.destroyHotspot(hotspot)
      })
  }

  const onClick = (e) => {
    const id = e.currentTarget.dataset.spotid
    clickHandler(id)
  }

  const highlight = (id) => {
    const hotspot = spots.find(spot => spot.id === id)
    if(!hotspot) {
      console.warn('  could not highlight hotspot ' + id)
      return
    }

    const pos = {
      pitch: hotspot.position.pitch,
      yaw: hotspot.position.yaw,
      fov: baseFov - zoomEffectAmount
    }

    scene.lookTo(pos, {
      transitionDuration: animSpeed
    })
  }

  const show = () => {
    var hotspotCollection = document.getElementsByClassName('Hotspot')
    for(var i = 0; i < hotspotCollection.length; i++){
      hotspotCollection[i].classList.remove('hidden')
    }
    if(initialized === false) {
      init()
    }
    container.show()
  }

  const hide = () => {
    var hotspotCollection = document.getElementsByClassName('Hotspot')
    for(var i = 0; i < hotspotCollection.length; i++){
      hotspotCollection[i].classList.add('hidden')
    }
    container.hide()
  }

  const getHotspots = () => {
    return spots
  }

  const update = (newSpots) => {
    spots.map((spot) => {
      const newSpot = newSpots.filter((s) => s.id === spot.id)[0]
      if(spot.hotspot && newSpot) {
        spot.hotspot.setPosition(newSpot.position)
      }
    })
  }

  return {
    remove,
    highlight,
    show,
    hide,
    getHotspots,
    update,
    animSpeed
  }
}
