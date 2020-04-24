# SV-Wrapper

<p align="center">
    <a href="https://github.com/standard/standard"><img src="https://cdn.rawgit.com/standard/standard/master/badge.svg" alt="JavaScript Style Guide" /></a>
    <a href="https://nodei.co/npm/spookvooper/"><img src="https://nodei.co/npm/spookvooper.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>

> Ghetto SpookVooper API wrapper
---

## Example Code

#### Single Stonk Honk Boi
```js
const SV = require('./wrapper.js')
const client = new SV('API KEY')

const target = 'STOCK ONE'

setInterval(async () => {
  const available = await client.exchange(target).getAvailable()
  if (available > 0) {
    client.exchange(target).buyStock(available)
      .then(console.log)
      .catch(console.error)
  }
}, 5000)
```

#### Multi Stonk Honk Boi
```js
const SV = require('./wrapper.js')
const client = new SV('API KEY')

setInterval(() => {
  ['TICKER ONE', 'TICKER TWO'].forEach(async (target) => {
    const available = await client.exchange(target).getAvailable()
    if (available > 0) {
      client.exchange(target).buyStock(available)
        .then(console.log)
        .catch(console.error)
    }
  })
}, 5000)
```

If you think the code is bad don't complain

License: AGPL 3.0

Support/Bugs: DM me on Discord, fruitcake5#0336 but dont expect much

⚠️ it is expected that you are familiar with Node.js ⚠️
