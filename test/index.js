'use strict'

var tap = require('tap')
var asset = require('../assetserv.js')
var myasset= {'id': '123', 'status': true, 'name': 'router', 'location': '1 floor'}
tap.similar(asset.get(1), myasset);
tap.equal(asset.save(myasset), true);
tap.equal(asset.update(myasset), true);
