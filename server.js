const
  express = require('express'),
  history = require('connect-history-api-fallback'),
  path = require('path'),
  serveStatic = require('serve-static')

const port = process.env.PORT || 5000

const app = express()

app.use(history())
app.use(serveStatic(path.join(__dirname, '/dist/spa')))
app.listen(port, () => console.log(`Listening on port ${port}`))
