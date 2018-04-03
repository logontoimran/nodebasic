const EventsClass = require('events'); //This is a class returned by events module
const eventObj =new EventsClass();	//Creating an object of Evenets class

eventObj.on('Creating Events',function(params){
	console.log('Events listner called by id = '+params.id+' and from url='+params.url);
});

module.exports.listener = eventObj;
