# Misk

The following are also available;

#

### Info

Retrieving information about the players’ ID, version or the provider interface is achieved as follows:

````javascript
window.parent.postMessage(JSON.stringify({action: 'info'}), '*');
````

````javascript
{deviceId: '', version: '', provider: ''}
````

#

### Log

Evexi supports injecting logs to the Player logfile using the below method. 
Most args can be provided however the method only takes one param at a time. 
Failed download events are already supported and stored within logs via the API middleware.

NOTE: Use with caution in a production environment. 
Also this is likely to be removed in later versions, therefore remember to check if the function exists before using it.

````javascript
window.parent.postMessage(JSON.stringify({action: 'log', data: 'My log details'}), '*');
````
