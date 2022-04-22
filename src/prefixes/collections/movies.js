class Movies {
  _graphUrl = null
  _graphServer = null

  constructor ({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl 
    this._graphServer = graphServer 
  }

  async find ({ fields, headers, context, filter }) {

  }

  async insert ({ fields, headers, context, input }) {

  }

  async remove ({ fields, headers, context, filter }) {

  }
}

module.exports = { Movies }
