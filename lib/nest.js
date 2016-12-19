import path from 'path'
import store from './store'
import WS from 'ws'

const config = require(path.resolve(__dirname, '../config.json'))
const ws = new WS(`wss://developer-api.nest.com/devices/thermostats?auth=${config.auth.access_token}`, {
  headers: {
    Authorization: `Bearer ${config.auth.access_token}`,
    Accept: 'text/event-stream'
  }
})

ws.on('open', () => console.log('Websocket opened'))
ws.on('message', (data, flags) => console.log(data, flags))
