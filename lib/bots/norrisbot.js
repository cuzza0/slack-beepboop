var BeepBot = require('./beepbot.js')
var NorrisBot = new BeepBot()

NorrisBot.params.username = 'Chuck Norris'
NorrisBot.params.icon_emoji = ':norrisbot:'

NorrisBot.trigger = function(data) {
  //  ...chuck norris....
  if (data.text && data.text.match(/\chuck norris?\??\s/i)) {
    return this.quip = 'I love roundhouse kicks!'
  }  
}

module.exports = NorrisBot
