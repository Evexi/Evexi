import { log } from '../../common'
import Evexi from 'evexi'

// @ts-ignore
window.showPIP = async () => {
  const response = await Evexi.pip.show({
    x: 40,
    y: 20,
    width: '100%',
    height: '80px'
  })

  console.log(response)
  log.info(` ---- Showing PIP ---- `)
}

// @ts-ignore
window.hidePIP = async () => {
  const response = await Evexi.pip.hide()
  log.info(` ---- Hid PIP ---- `)
}
