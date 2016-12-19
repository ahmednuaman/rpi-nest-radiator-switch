import path from 'path'
import store from './store'
import WS from 'ws'

const config = require(path.resolve(__dirname, '../config.json'))
const ws = new WS('https://developer-api.nest.com', {
  headers: {
    Authorization: `Bearer ${config.auth.access_token}`
  }
})

ws.on('open', () => console.log('Websocket opened'))
ws.on('message', (data, flags) => store.dispatch({
  action: 'MESSAGE',
  state: data
}))
