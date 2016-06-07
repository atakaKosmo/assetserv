'use strict'


get = function(err, id){


	if (err) return false
		
	var myasset= [{'id': '123', 'status': true, 'name': 'router', 'location': '1 floor'}]

	if (id)
		return myasset
	else
		return false
}
save = function(err, myasset){

	if (err) return false
	
	if (myasset)
		return true
	else
		return false


}


update = function(err, myasset){


	if (err) return false
	
	if (myasset.id)
		return true
	else
		return false	
}


