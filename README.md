Multi-Party Video + Text Chat with [Opentok Accelerator Core](https://github.com/opentok/accelerator-core-js)
-----------------------------------------------------------

Add `./credentials.js`:
```
const credentials = {
  apiKey: 'opentok_api_key',
  sessionId: 'opentok_session_id',
  token: 'opentok_session_token',
};

module.exports = credentials;
```

Build:
```bash
$ npm i
$ npm run build
```

Run:
```bash
$ node server.js
```