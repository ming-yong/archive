---
title: A Twitter Bot for code questions
description: A bot aggregates tech-related questions.
categories: [Blog] 
tags: [I built something]
---

## Result

![twitter Bot]({{site.baseurl}}/assets/images/twitterBot.PNG)

You can view the [source code](https://github.com/ming-yong/100FreeQuestions) here.

update on 29 Dec 2019: It's back! Here's the [live demo](https://twitter.com/100FreeCodeQ).

~~The Twitter Bot account is currently locked because I try to give it a birthday(which is today! 22 December 2019), totally forgot that Twitter users have to be over 13 years old. And... our newborn got locked. A little sad and funny but it's okay, I promise to update it here once it's back.~~

## Easier than I thought

I have the [Twitter Bot tutorial playlist by The Coding Train](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV) sitting in my playlist for quite a while, thinking it will be something too difficult for me to build.

Surprisingly, it turned out to be a 1-day project.

After the initial set up of a Node project and Twitter App(explained in [this video](https://www.youtube.com/watch?v=GQC2lJIAyzM&list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV&index=3)), building a bot with [Twit API](https://github.com/ttezel/twit) can be boiled down into three steps.

### Step 1: set up a Twit object

From the video I mentioned above, we will first create an Twit object.

```js
//in my config.js file:
module.exports = {
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:   process.env.ACCESS_TOKEN_SECRET
}

//in my bot.js file
console.log("The bot is running");
var Twit = require('twit');
var config = require("./config");//config is used here
var T = new Twit(config);
```

### Step 2: Retweet #100FreeQuestions

My initial goal is to be able to retweet, like and follow but it seems like Twitter has moved that into something called ["Account Activity API"](https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/overview) which I haven't look into.

For the sake of simplicity, I decided to have it retweet posts with #100FreeQuestions first and worry about the rest later.

```js
//in my bot.js file
var stream = T.stream('statuses/filter', { track: '#100FreeQuestions'});

stream.on('tweet', function (tweet) {
  T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
    if(err){
      console.err(err);
    }else{
      console.log("retweet is working!");
    }
  })
})
```

### Step 3: Deploy on Heroku

I already have a Heroku account, so all I have to do is:

- Create an App(Click the "New" and "Create new app").
- Push code to my GitHub repo(variables are hidden in a .env file and is being gitignore).
- Connect my GitHub repository to Heroku.
- Click "Deploy"
- In the "Settings" tab, set up "config vars"(all the variables I hid).

And just like that, a retweet Twitter Bot was born.
