import path from 'path'
import request from 'request'
import store from './store'

const INTERVAL = 5 * 60 * 1000 // 5 mins, yo

const config = require(path.resolve(__dirname, '../config.json'))

const makeRequest = () =>
  request.get(`https://developer-api.nest.com/devices/thermostats/${config.target_thermostat}`, {
    headers: {
      Authorization: `Bearer ${config.auth.access_token}`
    }
  }, (error, response, body) => {
    if (error) {
      return console.log(error)
    }

    store.dispatch({
      type: 'READING',
      state: JSON.parse(body)
    })
  })

setInterval(makeRequest, INTERVAL)
makeRequest()
