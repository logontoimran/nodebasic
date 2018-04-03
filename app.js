
//Calling other modules
/*const  logger = require('./logger');
//console.log(logger);
console.log(logger.endpoint);
console.log(logger.log("My name is Imran"));*/

//OS Module
/*const os = require('os');
console.log(os.freemem());*/

// File System Module
/*const dhruv = require('fs');
dhruv.readdir('../',function(err,response){
	if(err){
		console.log("error occured");
	}
	else{
		console.log(response);
	}
});*/


//Events module

const abc = require('./eventTest');

var eventObj = abc.listener;

eventObj.emit('Creating Events',{
	id:'1',
	url:'http://yognfitness.com'
}); // Events trigger

eventObj.emit('Creating Events',{
	id:'2',
	url:'http://northernstar.in'
}); // Events trigger
