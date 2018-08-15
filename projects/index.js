'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  let category = request.body.queryResult.parameters["category"];
  let quotes = {
    "sad": ["The good times of today, are the sad thoughts of tomorrow - Bob Marley","Tears come from the heart, and not the brain - Leonardo da Vinci","Don't grieve. Anything you lose comes round in another form - Rumi"],
    "love" : ["There is only one happiness in this life, to love and be loved - George Sand","The most important thing in the world is family and love - John Wooden","Friends show their love in times of trouble, not in happiness - Euripides"],
    "anger" : ["You will not be punished for your anger, you will be punished by your anger - Buddha","For every minute you remain angry, you give up 60 seconds of peace of mind - Ralph Waldo Emerson","Speak when you are angry - and you will make the best speech you'll ever regret - Laurence J. Peter"]
  };
  
 
  function myQuoteIntentHandler(agent) {
      agent.add('Here is a famous ' + category + ' quote:');
      agent.add(quotes[category][Math.floor(Math.random()*quotes[category].length)]);
  }
      // Run the proper function handler based on the matched Dialogflow intent name
      let intentMap = new Map();
      intentMap.set('Famous Quote Intent', myQuoteIntentHandler);
      agent.handleRequest(intentMap);
}
);
