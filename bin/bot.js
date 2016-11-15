#!/usr/bin/env node

'use strict';

var BeepBoop = require('../lib/beepboop');

var token = process.env.BOT_API_KEY || require('../token');
var dbPath = process.env.BOT_DB_PATH;
var name = process.env.BOT_NAME;

var beepboop = new BeepBoop({
    token: token,
    dbPath: dbPath,
    name: name
});

beepboop.run();