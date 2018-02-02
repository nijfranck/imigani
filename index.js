var twitter = require('twitter');
var fs = require('fs');
var config = require('./config.js');
var imigani = require('./imigani.js');

var t = new twitter(config);




var d = new Date();
var day = d.getDate() - 2;

var umuganiDaily = imigani.imigani[day];

console.log(umuganiDaily); 

var tweetOut = umuganiDaily + " #imigani #kirundi #burundi";

var paramsTweet = {
	status: tweetOut,	
}

t.post('statuses/update', paramsTweet, function(err, data, response) {
	if (!err){
		console.log(data);
	} else {
		console.log(err);
	}
});



// T.get('search/tweets', params, function(err, data, response) {
// 	if (!err){
// 		console.log(data.statuses[0]);
// 	} else {
// 		console.log(err);
// 	}
// });

