const { Movies, People } = require('./collections')

class Training {

  constructor({ graphUrl, graphServer }) {
    this.name = "training"
    this._graphUrl = graphUrl 
    this._graphServer = graphServer 

    this.people = new People({ graphUrl, graphServer })
    this.movies = new Movies({ graphUrl, graphServer })
  }
}

module.exports = { Training }
