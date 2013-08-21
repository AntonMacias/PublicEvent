# PublicEvent
Public event is a very small (just over 1k minified, around 500 bytes minified and compressed) event emitter with subscribe/unsubscribe capabilities that has no dependencies and is quite easy to set-up and use as it requires no configuration.

Public Event is released under the MIT License so you can modify it in any way you want or include it inside your own code.

## Installation

You can use Public Event with or without require.js.

### RequireJS
Include PublicEvent.js in your scripts folder and add its path to your require configuration. Later you can use it simply asking for it to require: 
```
   require(['yourAliasToPublicEvent'], function (PublicEvent) {

	});
```

### Without RequireJS
If you don't use RequireJS you can still include PublicEvent in your applications, you would need to include the script file in a ```<script>``` tag and it will be accesible from the global namespace as PublicEvent

## API

PublicEvent has three methods:

### addListener
Adds a function to the list of listeners that will be called when the event is triggered.

### removeListener
Removes a function from the list of listeners.

### callListeners
Calls the listeners of the event and passes them the list of arguments supplied to callListeners

### PublicEvent()
Initializes a public event object

## Testing

From the repo root:

```
npm install
npm test
```
