import rpio from 'rpio'
import store from './store'

const PIN = 12

rpio.open(PIN, rpio.OUTPUT, rpio.LOW)

store.subscribe(() => {
  const state = store.getState()
  const output = state.target_temperature_c > state.ambient_temperature_c ? rpio.HIGH : rpio.LOW

  console.log(state, output)

  rpio.write(PIN, output)
})
