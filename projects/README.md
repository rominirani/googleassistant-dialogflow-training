This folder contains several Dialogflow projects that you can import into Dialogflow. 

Project Details:

 - `FamousQuotesAgent` : Simple Dialogflow Agent that demonstrates use of single Intent and responses that provide a random quote. No follow up intents, no fulfillment, just plain hello world like Agent. 
 - `FamousQuotesAgent-With-Fulfillment` : This project extends the above `FamousQuotesAgent` with a Fulfillment step. The Fulfillment is a Firebase Cloud Function that provides a random quote based on the category specified by the user. 
 - `MeetingRoomAgent` : This Dialogflow Agent allows the user to book a meeting room by specifying the meeting room name, day of the meeting and the start time of the meeting. It demonstrates use of required parameters, user defined entities, system entities and more. 
 - `MeetingRoomAgent-With-Followup` : Enhances the above `MeetingRoomAgent` project with use of Follow up Intents in Dialoglow to create a non-linear conversation.

To import the projects into Dialogflow, follow the steps given below:

 1. Create a new Agent in Dialogflow.
 2. Go to Settings and then Import/Export. 
 3. Click on Import, provide the ZIP file given here and then follow the rest of the instructions to import.
