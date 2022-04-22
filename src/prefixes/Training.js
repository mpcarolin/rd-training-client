class Training {
  name = "training"
  _graphUrl = null
  _graphServer = null

  constructor({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl 
    this._graphServer = graphServer 
  }
}

module.exports = { Training }
