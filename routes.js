const routes = require('next-routes')()

// :wildcard
//NOTE you must restart node server after adding new routes, hot reload won't pick up
routes
	.add('/fonds', '/fonds')
	.add('/', '/')
	.add(
	'/fonds-details/:id', '/fonds-details'
	)
	.add(
	'/series-details/:id/:fondid', '/series-details'
	)
	.add(
	'/results/series-results/:fondid', '/results/series-results'
	)

module.exports = routes