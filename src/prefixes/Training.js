const {
	Movies,
	People,
	Test
} = require('./collections')

class TrainingPrefix {

	constructor({ graphUrl, graphServer }) {
		this.name = 'training'
		this._graphUrl = graphUrl 
		this._graphServer = graphServer 

		this.people = new People({ graphUrl, graphServer })
		this.movies = new Movies({ graphUrl, graphServer })

		// expose the test collection only in development environments
		this.test = process.env.NODE_ENV !== 'production'
			? new Test({ graphUrl, graphServer })
			: null
	}

}

module.exports = { TrainingPrefix }
