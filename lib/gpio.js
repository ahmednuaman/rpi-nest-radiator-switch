import rpio from 'rpio'
import store from './store'

const PIN = 12

rpio.open(PIN, rpio.OUTPUT, rpio.LOW)

store.subscribe(() => {
  const state = store.getState()
  const output = state.hvac_state === 'heating' ? rpio.HIGH : rpio.LOW

  console.log(state, output)

  rpio.write(PIN, output)
})
