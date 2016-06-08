'use strict'
var mongojs = require('mongojs')

module.exports = assetsDbService;


function assetsDbService () {

  var databaseUrl = "mongodb://localhost/myapp"
  var db = mongojs(databaseUrl, ["assets"])

	return {

    saveData: function(obj, callback, err){
				if (err) {
						callback(err, null)
				} else {
					db.assets.save(obj, function (err) {
						callback( null, obj )
					})
				}
		},
		
		dbClose: db.close.bind(db)


	}

}



















/*


dbClose: db.close.bind(db)

function assetsDbService(db, obj){

	return {
    saveData: _saveData
  }

}

function _saveData(db, obj, callback){

	if (err) {
		callback(err, null)
	} else {
		db.assets.insert(obj, function (err) {
			callback(err || null, value || null)
		})
	}

}

module.exports = assetsDbService;

/*


saveData: function(){
	return db.assets.save(myasset, function(err, data){
		if(err)
			return false
		else {
			db.close()
			return data
		}
	})

}


module.exports = {
  save: function(db, myasset) {
    return db.assets.save(myasset, function(err, data){
			if(err)
				return false
			else {
				db.close()
				return data
			}

		})
  },

  sayHelloInSpanish: function() {
    return "Hola";
  }
};

function save(){

}

/*
module.exports = function asset(db){
	return{
		save : function(db, myasset){
			db.assets.save(myasset, function(err, data){
				if(err)
					return false
				else {
					db.close()
					return data
				}

			})
		}
	}

}
*/
/*

var asset = module.exports = {}

asset.get = function(id, db){

	var myasset= {'id': '123', 'status': true, 'name': 'router', 'location': '1 floor'}

	if (id)
		return myasset
	else
		return false
}

asset.save = function(myasset, db){

 db.assets.save(myasset, function(err, data){
	 	if(err)
			return false;
		else {
			db.close()
			return data;
		}

 });


 return true;
}

asset.update = function(myasset){

	if (typeof myasset.id != "undefined")
		return true
	else
		return false

}
/*
var myasset= [{'id': '123', 'status': true, 'name': 'router', 'location': '1 floor'}]
asset.update(myasset);
*/
