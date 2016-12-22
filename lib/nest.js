import Firebase from 'firebase'
import path from 'path'
import store from './store'

const config = require(path.resolve(__dirname, '../config.json'))

const fb = new Firebase(`wss://developer-api.nest.com/devices/thermostats/${config.target_thermostat}`)

fb.authWithCustomToken(config.auth.access_token)
fb.on('value', (snapshot) => store.dispatch({
    type: 'READING',
    state: snapshot.val()
  })
)
