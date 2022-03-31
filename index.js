const express = require('express')
const port = 3000

// Just for development use
express()
  .use('/', express.static('dist'))
  .listen(port, () => console.log(`App listening on port ${port}!`))
