function isItRad (tweet, radness) {
  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: "",
    consumer_secret: "",
    access_token_key: "",
    access_token_secret: "",
  });

  var tag;

  if (radness === "rad") {
    tag = "#thatsRad";
  }
  else if (radness === "notRad") {
    tag = "#thatsNotRad";
  }
  else {
    return console.log("you have not entered a radness level.");
  }

  if (tweet.length > 140) {
    return console.log("your tweet is too long at " + tweet.length + " characters");
  }

  else if ((tweet.length + tag.length)>140) {
    client.post("statuses/update", {status: tweet}, function(error, tweet) {
      if (!!error) {
        console.log(error);
      }
      else {
        console.log("your tweet has been published, but without radness because it was too long");
      }
    });
  }

  else {
    client.post("statuses/update", {status: tweet + " " + tag}, function(error, tweet) {
      if (!!error) {
        console.log(error);
      }
      else {
        console.log("your tweet has been published!");
      }
    });
  }

}

console.log(process.argv);

var tweet = process.argv[2];
var radness = process.argv[3];


isItRad(tweet, radness);
