var BeepBot = require('./beepbot')
var StartupGuy = new BeepBot()

StartupGuy.params.username = 'Startup Guy'
StartupGuy.params.icon_emoji = ':startupbot:'

StartupGuy.trigger = function(data) {
	//  ... .startup ....
	if (data.text && data.text.match(/.startup?\??\s/i)) {
		request = require('request'),
		util 	= require('util');
		request('http://itsthisforthat.com/api.php?json', function (err, response, body) {
			if (!err && response.statusCode === 200) {
				body = JSON.parse(body);
			}
		});
    return this.quip = 'So, basically, it\'s like a ' + body.this + ' for ' + body.that
  }  
}

module.exports = StartupGuy
