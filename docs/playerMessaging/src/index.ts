import Evexi from "evexi";
import { log } from '../../common'

const textArea = document.getElementById('message') as HTMLTextAreaElement

Evexi.lifecycle.playing((item) => {
  log.info('playing item ...' + JSON.stringify(item))
})

// @ts-ignore
window.sendMessage = async () => {
  const content = textArea.value
  const res = await Evexi.playerMessaging.send(content || 'Hello World')

  log.info('Message sent, response: ' + JSON.stringify(res))
}

Evexi.playerMessaging.onMessage(msg => {
  log.info('Received message: ' + JSON.stringify(msg))
})
