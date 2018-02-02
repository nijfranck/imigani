var twitter = require('twitter');
var fs = require('fs');

var imigani = require('./imigani.js');



var config = {
	consumer_key: process.env.CKEY,
	consumer_secret: process.env.CSECRET,
	access_token_key: process.env.TKEY,
	access_token_secret: process.env.TSECRET,
}

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

