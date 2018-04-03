console.log(__filename);
console.log(__dirname);

var url="http://northernstar.in";

function log(message){
  console.log(message);
}

module.exports.log = log;
module.exports.endpoint = url;
