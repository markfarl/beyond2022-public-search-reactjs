const next = require('next')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)

const { createServer } = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000),
    err => {
      if (err) throw err
      console.log('Ready on localhost:3000')
    }
})