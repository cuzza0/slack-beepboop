var bots = {
  characters: {
    StartupGuy: require('./bots/startupguy.js'),
    NorrisBot: require('./bots/norrisbot.js'),
    Eddard: require('./bots/eddard.js')
  }
}

function doYouHaveSomethingToSay (data) {
  var winner
  Object.keys(bots.characters).forEach(function(key) {
    var match = bots.characters[key].trigger(data)
    if (match) {
      return winner = bots.characters[key]
    }
  })
  return winner
}

bots.doYouHaveSomethingToSay = doYouHaveSomethingToSay

module.exports = bots
