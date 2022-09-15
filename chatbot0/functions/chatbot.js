const functions =require('firebase-functions');
const admin=require('firebase-admin');
const axios=require('axios');
const {WebhookClient, Payload}=require('dialogflow-fulfillment');
const db =admin.firestore();

exports.chatbot=functions
    .region('asia-east1')
    .https.onRequest((request,response) => {
    const agent =new WebhookClient({ request, response });

    const lineUid=request.body.originaDetectIntentRequest.payload.data.source.userId;

    async function question1(agent){
        await agent.add('Received!');
    }

    let intentMap =new Map();

    intentMap.set('Question 1', question1);
    agent.handleRequest(intentMap);
});