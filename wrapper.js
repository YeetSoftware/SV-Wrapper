const https = require('https')

class User {
  /**
   * @param {String} userid SpookVooper UUID
   * @param {String} groupid SpookVooper Group Name
  */
  constructor (userid, groupid) {
    this.userid = userid
    this.group = groupid
  }

  /**
   * @param {String} role Role to check for
   * @returns {Promise<Boolean>}
  */
  hasDiscordRole (role) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Group/HasDiscordRole?userid=${this.userid}&role=${role}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }
}

class GroupMember extends User {
  /**
   * @param {String} permission Permission to check
   * @returns {Promise<Boolean>}
  */
  hasGroupPermission (permission) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Group/HasGroupPermission?groupid=${encodeURI(this.group)}&userid=${this.userid}&permission=${encodeURI(permission)}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {String} role Role to check for
   * @returns {Promise<Boolean>}
  */
  hasDiscordRole (role) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Group/HasDiscordRole?userid=${this.userid}&role=${role}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }
}

class Stock {
  /**
   * @param {String} ticker SpookVooper Ticker Symbol
   * @param {String} apikey SpookVooper Api Key
  */
  constructor (ticker, apiKey) {
    this.ticker = ticker
    this.apiKey = apiKey
  }

  /**
   * @returns {Promise<String>} Current price of the stock
  */
  getCurrentData () {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Exchange/GetCurrentData?id=${this.ticker}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @returns {Promise<String>} Current price of the stock
  */
  getAvailable () {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Exchange/Available?id=${this.ticker}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {Number|String} minutes Interval (1, 15, 30, 60, 1440 or 43200)
   * @returns {Promise<String>} Pipe seperated price history
  */
  getMinuteData (minutes = 15) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Exchange/GetMinuteData?id=${this.ticker}&minutes=${minutes}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {Number|String} amount Amount of stock to calculate
   * @returns {Promise<String>} Cost to buy stock (before tax)
  */
  calculateBuy (amount) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Exchange/CalculateBuy?ticker=${this.ticker}&amount=${amount}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {Number|String} amount Amount of stock to calculate
   * @returns {Promise<String>} Price to sell stock (before tax)
  */
  calculateSell (amount) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Exchange/CalculateSell?ticker=${this.ticker}&amount=${amount}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {Number|String} amount Amount of stock to buy
   * @returns {Promise<String>} Success or error message
  */
  buyStock (amount) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Exchange/BuyStockWithKey?ticker=${this.ticker}&amount=${amount}&key=${this.apiKey}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {Number|String} amount Amount of stock to buy
   * @returns {Promise<String>} Success or error message
  */
  sellStock (amount) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Exchange/SellStockWithKey?ticker=${this.ticker}&amount=${amount}&key=${this.apiKey}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }
}

class Group {
  /**
   * @param {String} groupid SpookVooper Group Name
  */
  constructor (groupid) {
    this.groupid = groupid
  }

  /**
   * @param {String} userid SpookVooper UUID
   * @returns {User} User Object
  */
  user (userid) {
    return new GroupMember(userid, this.groupid)
  }

  /**
   * @returns {Promise<Array>} Array of group members
  */
  members () {
    const gid = this.groupid
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Group/GetGroupMembers?groupid=${encodeURI(this.groupid)}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString.split('|').filter(Boolean).map(member => new User(member, gid)))
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @returns {Promise<String>} Group balance
  */
  balance () {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Group/GetGroupBalance?groupid=${encodeURI(this.groupid)}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }
}

class SpookVooperAPI {
  /**
   * @param {String} key Your Spook Vooper {@link https://spookvooper.com/Account/ViewAPIKey|API key}
  */
  constructor (key) {
    this.apiKey = key
  }

  /**
   * @param {String} ticker Stock ticker
   * @returns {Stock} Stock Object
   * @example
   * client.exchange('VG').getCurrentData()
      .then(console.log)
      .catch(console.error)
  */
  exchange (ticker) {
    return new Stock(ticker, this.apiKey)
  }

  /**
   * @param {String} groupid Group Name
   * @returns {Group} Group Object
   * @example
   * client.group('Vooperia').members()
      .then(console.log)
      .catch(console.error)
  */
  group (groupid) {
    return new Group(groupid)
  }

  /**
   * @param {String} userid SpookVooper UUID
   * @returns {User} User Object
   * @example
   * client.user('d97d3813-f1db-49e6-9b3d-826ab414683e').hasDiscordRole('Senator')
      .then(console.log)
      .catch(console.error)
  */
  user (userid) {
    return new User(userid)
  }

  /**
   * @param {String} username User's SpookVooper username
   * @returns {Promise<String>} UUID
   * @example
   * client.getUserIDFromUsername('SpikeViper')
      .then(console.log)
      .catch(console.error)
  */
  getUserIDFromUsername (username) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/User/GetUserIDFromUsername?username=${username}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {String} discordid User's discord account ID
   * @returns {Promise<String>} SpookVooper username
  */
  getUsernameFromDiscord (discordid) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/User/GetUsernameFromDiscord?discordid=${discordid}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {String} discordid User's discord account ID
   * @returns {Promise<String>} UUID
  */
  getUserIDFromDiscord (discordid) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/User/GetUserIDFromDiscord?discordid=${discordid}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {String} minecraftid User's minecraft UUID
   * @returns {Promise<String>} SpookVooper username
  */
  getUsernameFromMinecraft (minecraftid) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/User/GetUsernameFromMinecraft?minecraftid=${minecraftid}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {String} minecraftid User's minecraft UUID
   * @returns {Promise<String>} UUID
  */
  getUserIDFromMinecraft (minecraftid) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/User/GetUserIDFromMinecraft?minecraftid=${minecraftid}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }

  /**
   * @param {String} groupid SpookVooper Group Name
   * @returns {Promise<Boolean>}
  */
  doesGroupExist (groupid) {
    return new Promise(
      (resolve, reject) => {
        https.get({ hostname: 'spookvooper.com', port: 443, path: `/Group/DoesGroupExist?groupid=${groupid}`, method: 'GET' }, function (res) {
          let resultString = ''
          res.on('data', function (c) {
            resultString += c
          })
          res.on('end', function () {
            resolve(resultString)
          })
        }).on('error', function (e) {
          reject(e)
        })
      }
    )
  }
}

module.exports = SpookVooperAPI
