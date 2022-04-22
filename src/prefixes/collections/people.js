const {
  query,
  nullToUndefined
} = require('@simpleview/sv-graphql-client')

class People {

  constructor ({ graphUrl, graphServer }) {
    this._graphUrl = graphUrl 
    this._graphServer = graphServer 
  }

  async find ({ fields, headers, context, filter }) {
    const results = await query({
      url: this._graphUrl,
      query: `query FindPeople($filter: training_people_find_input) {
        training {
          training_people_find(filter: $filter) {
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
      query: `mutation InsertPeople($input: [training_people_insert_input!]!) {
        training {
          training_people_insert(input: $input) {
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
      query: `mutation RemovePeople($filter: training_people_remove_input) {
        training {
          training_people_remove(filter: $filter) {
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


module.exports = { People }
