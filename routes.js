const routes = require('next-routes')()

// :wildcard
routes
	.add('/fonds', '/fonds')
	.add('/', '/')
	.add(
	'/fonds-details/:id', '/fonds-details'
	)

module.exports = routes