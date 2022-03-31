const fs = require('fs')
const moment = require('moment')
const Glob = require('glob').Glob
const _ = require('lodash')


// Replace the cache name
const indexFilePath = __dirname + '/../dist/sw.js'

if (!fs.existsSync(indexFilePath)) {
  return console.log('ERROR: Could not manipulate public index.html because the file does not exist. This script needs to run after doing a production build.')
}
const content = fs.readFileSync(indexFilePath).toString().replace('[CACHE_NAME]', 'finnair-cargo-' + moment().format('YYYY-MM-DD-HH-mm-ss'))
fs.writeFileSync(indexFilePath, content)



// Generate list of files to cache
const baseUrl = ''

console.log(`Generating list of files to cache...`)

const distPath = (__dirname + '/../dist/').replace(/\\/g, '/')

const assetGlobPatterns = [
  '**/*.*'
]

const run = () => {
  const lines = []
  assetGlobPatterns.forEach(globPattern => {
    globPattern = distPath + globPattern
    let matches = new Glob(globPattern, {mark: false, sync: true}).found
    matches = matches.filter((m) => {
      if(m.includes('.appcache')) {
        return false
      }

      return true
    })
    lines.push(matches.map(line => line.split('/dist/')[1]))
  })

  const rows = _.uniq(_.flattenDeep(lines))
    .join('\',\n\'')

  if (!fs.existsSync(indexFilePath)) {
    return console.log('ERROR: Could not manipulate public index.html because the file does not exist. This script needs to run after doing a production build.')
  }

  const content = fs.readFileSync(indexFilePath)
    .toString()
    .replace('[URLS_TO_CACHE]', rows)

  fs.writeFileSync(indexFilePath, content)

  console.log('Done.')
}

run()


console.log('SW data has been updated.')
