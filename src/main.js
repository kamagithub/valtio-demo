import { proxy, subscribe } from 'valtio/vanilla'

const btnDecrement = document.getElementById('btn-decrement')
const btnIncrement = document.getElementById('btn-increment')
const divCounter = document.getElementById('div-counter')

const store = proxy({
  counter: 0,
  inc() {
    store.counter += 1;
  },
  dec() {
    store.counter -= 1;
  },
})

subscribe(store, () => {
  divCounter.innerHTML = store.counter
})

window.addEventListener('load', async () => {
  divCounter.innerHTML = store.counter

  btnDecrement.addEventListener('click', () => {
    store.dec()
  })

  btnIncrement.addEventListener('click', () => {
    store.inc()
  })
})