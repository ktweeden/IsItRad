function isItRad (tweet, radness) {
  var Twitter = require('twitter');

  var client = new Twitter({
    consumer_key: "BklA9oEjW2gKS3c3SQVu3SFWR",
    consumer_secret: "bB7648m2T6QX1ykRVfHLF2hDulfQ1apRbw7orcpUBZYsHUFcx9",
    access_token_key: "1222446403-T9bnS3vInHkProcc2JYEIRCBpKRazxvP9lTkXox",
    access_token_secret: "UFfuN9lQNulbLZVVumo1KFAGu2oRt5R3BoIdEEY874rWy",
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
