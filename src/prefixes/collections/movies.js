const {
  query,
  nullToUndefined
} = require('@simpleview/sv-graphql-client')

class Movies {

  constructor ({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl 
    this._graphServer = graphServer 
  }

  async find ({ fields, headers, context, filter }) {
    const results = await query({
      url: this._graphUrl,
      query: `query FindMovies($filter: training_movies_find_input) {
        training {
          training_movies_find(filter: $filter) {
            ${fields}
          }
        }
      }`,
      headers,
      variables: { filter } 
    })

    nullToUndefined(results) // mutates results in-place

    return results
  }

  async insert ({ fields, headers, context, input }) {
    const results = await query({
      url: this._graphUrl,
      query: `mutation InsertMovies($input: [training_movies_insert_input!]!) {
        training {
          training_movies_insert(input: $input) {
            ${fields}
          }
        }
      }`,
      headers,
      variables: { input } 
    })

    nullToUndefined(results) // mutates results in-place

    return results
  }

  async remove ({ fields, headers, context, filter }) {
    const results = await query({
      url: this._graphUrl,
      query: `mutation RemoveMovies($filter: training_movies_remove_input) {
        training {
          training_movies_remove(filter: $filter) {
            ${fields}
          }
        }
      }`,
      headers,
      variables: { filter } 
    })

    nullToUndefined(results) // mutates results in-place

    return results
  }
}

module.exports = { Movies }
