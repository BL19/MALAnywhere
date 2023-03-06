import axios from 'axios'

export const handler = async (event, context) => {
  let url = "http://api.myanimelist.net/v2" + event.queryStringParameters.url;
  try {
    // Filter out headers
    let filterOut = ["host", "x-forwarded-for", "client-ip"]
    let headers = Object.keys(event.headers)
      .filter(key => !filterOut.includes(key))
      .reduce((obj, key) => {
        obj[key] = event.headers[key]
        return obj
      }, {})
    const response = await axios.get(url, {
      headers: headers,
    })
    // Get text response
    const data = await response.data
    return {
      statusCode: response.status,
      body: JSON.stringify(data)
    }
  } catch (error) {
    // Get text response
    const data = await error.data
    return {
      statusCode: error.status,
      body: JSON.stringify(data)
    }
  }
}