
'use strict'
var assetserv = require('./assetserv')();
var myasset= {'id': '123', 'status': true, 'name': 'router', 'location': '1 floor'}

assetserv.saveData( myasset, function(err, result){
      console.log('Asset added');
      assetserv.dbClose();
});
