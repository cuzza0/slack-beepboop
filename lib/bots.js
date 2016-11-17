var bots = {
  characters: {
    StartupGuy: require('./bots/startupguy'),
    NorrisBot: require('./bots/norrisbot'),
    Eddard: require('./bots/eddard')
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
