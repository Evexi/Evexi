# Interactive Scan

Interactive scan package is designed to be installed as part of scanURL specified within [interactive content](./../content/index.md) 'interact.create' call. The package handles connecting to the interactive server, keeping the session alive and formatting for developers.

You can see a example [here](./index.ts)

#

### Install
You should install the package via CDN and include as part of the scanURL page. Its recommend that you version lock against majors only. Patch and minor releases will address bugs and add features that dont break compatibility within the major version only.

````javascript
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@mrx-technology/interactive@1"></script>
````

#

### Get the session
When scanning the QR code for the session we will automatally append a URL param called 'session' which is a session id string to be used in the Scan setup. We have included a helper method in this package to pull this string out of the URL.

````javascript
// get the session id from the url param
var sessionId = Scan.urlParam(); // string
````

#

### Setup the session
Using the sessionId you can then setup a session and listen for messages. The second argument to the constructor is the enviroment, by default this is pointing to the production instance but can be overridden if necessary.

````javascript
var scan = new Scan(sessionId)
  .onMessage(function(message) {
    // message = string (message sent from the content)
    console.log('Message: ', message)
  })
  .onOpen(function() {
    // Session has been opened and ready to use. You can then send any messages to the content like so:
    // this.send('message from scanURL to content') // the message can be a string or an object that you will listen for / use on the content side
  })
  .onClose(function(code) {
    // Will run if the session has been closed, if the user has been kicked by the content or if the interactive session does not exist.
    // code = number (close code)
    console.log('Closed: ', code)
  });
````

#

Once setup and opened you can use the instance to send messages to the content like so

````javascript
scan.send({foo: 'bar'})
````

#

### Destroy

The instance is automatically destroyed when 'onClose' method is ran but you can manually destroy the instance like so.

````javascript
scan.destroy()
````
