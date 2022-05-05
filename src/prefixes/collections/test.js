const { query } = require('@simpleview/sv-graphql-client')

const defaultFields = `
	success
	message
`

class Test {

	constructor ({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl 
		this._graphServer = graphServer 
	}

	async clearDB({ fields = defaultFields, headers, context, input } = {}) {
		return await query({
			url: this._graphUrl,
			query: `mutation training_test_clear_db {
				training {
					training_test_clear_db {
						${fields}
					}
				}
			}`,
			headers,
			clean: true,
			key: 'training.training_test_clear_db'
		})
	}

	async setup({ fields = defaultFields, headers, context, input } = {}) {
		return await query({
			url: this._graphUrl,
			query: `mutation training_test_setup {
				training {
					training_test_setup {
						${fields}
					}
				}
			}`,
			headers,
			clean: true,
			key: 'training.training_test_setup'
		})
	}
}

module.exports = { Test }
