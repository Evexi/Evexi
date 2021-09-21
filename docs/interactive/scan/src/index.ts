import '../../../../package/index.js'

// get the session id from the url param
const sessionId = window.Scan.urlParam();

// listen and send messages to the WS API (the second optional argument is the environment Prod, Dev or Edge. DEFAULT: Prod)
const scan = new window.Scan(sessionId, 'Edge')
  .onMessage((message) => {
    console.log('Message: ', message)
  })
  .onOpen(() =>{
    console.log('Opened')
    scan.send('message from scanURL to content')
  })
  .onClose((code) => {
    console.log('Closed: ', code)
  })

// send message type into the input box on the page
// @ts-ignore
window.send = () => {
  const msg = (document.getElementById("message") as HTMLInputElement).value
  scan.send(msg)
}