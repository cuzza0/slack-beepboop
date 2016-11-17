var BeepBot = require('./beepbot')
var Eddard = new BeepBot()

Eddard.params.username = 'Eddard Stark'
Eddard.params.icon_emoji = ':eddardbot:'

Eddard.trigger = function(data) {
  //  ... coming ....
  if (data.text && data.text.match(/\scoming\s/)) {
    return this.quip = 'Winter.  Winter is coming.'
  }  
}

module.exports = Eddard
