'use strict'


var asset = module.exports = {}

asset.get = function(id){

	var myasset= {'id': '123', 'status': true, 'name': 'router', 'location': '1 floor'}

	if (id)
		return myasset
	else
		return false
}

asset.save = function(myasset){

	if (myasset)
		return true
	else
		return false

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
