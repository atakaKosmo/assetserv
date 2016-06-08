'use strict'

var mongojs = require('mongojs')
var databaseUrl = "mongodb://localhost/myapp"
var db = mongojs(databaseUrl, ["assets"])

db.assets.find(function (err, docs) {
    console.log(docs);
})
