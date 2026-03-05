import { log } from '../../common'
import Evexi from 'evexi'

// @ts-ignore
window.showPIP = async () => {
  const response = await Evexi.pip.show({
    x: 40,
    y: 20,
    width: '200px',
    height: '200px',
    type: 'HDMI',
    number: 1,
  })

  log.info(` ---- Showing PIP ----: ${JSON.stringify(response)} `)
}

// @ts-ignore
window.hidePIP = async () => {
  const response = await Evexi.pip.hide()
  log.info(` ---- Hid PIP ---- : ${JSON.stringify(response)} `)
}

Evexi.lifecycle.playing(() => {
  let toggled = false
  setInterval(() => {
    if (toggled) {
      // @ts-ignore
      window.hidePIP()
      toggled = false
    } else {
      // @ts-ignore
      window.showPIP()
      toggled = true
    }
  }, 4_000)
})
