const api = require('lambda-api')()

api.get('/status', async (req,res) => {
  return { status: 'ok' }
})

exports.handler = async (event, context) => {
  return await api.run(event, context)
}
