var Bot = require('slackbots');

var StartupGuy = {
/**	
	_onMessage: function (message) {
	    if (this._isChatMessage(message) &&
		this._isChannelConversation(message) &&
		!this._isFromBeepBoop(message) &&
		this._isInvokingStartup(message)
		) {
		    this._replyWithStartup(message);
			}
		
	},
*/
	/**
	 * Replies to a .startup request with a fake startup
	 * @param {object} originalMessage
	 * @private
	 */

	_replyWithStartup: function (originalMessage) {
	    var self = this,
			request = require('request'),
			util 	= require('util');

		request('http://itsthisforthat.com/api.php?json', function (err, response, body) {
			var info = [];

			if (!err && response.statusCode === 200) {
				body = JSON.parse(body);
				info.push('So, basically, it\'s like a ' + body.this + ' for ' + body.that);
			}
			else {
				info = ['Why do I always have to come up with all the bright ideas?'];
			}
			var channel = Bot._getChannelById(originalMessage.channel);
		Bot.postMessageToChannel(channel.name, info[0], { 'slackbot': true, username: 'Startup Guy', icon_emoji: ':startupbot:' });
	    });
	},

	/**
	 * Util function to check if a given real time message is requesting a .startup
	 * @param {object} message
	 * @returns {boolean}
	 * @private
	 */
	_isInvokingStartup: function (message) {
	    return message.text.toLowerCase().indexOf('.startup') > -1;
	}
}
module.exports = StartupGuy;
