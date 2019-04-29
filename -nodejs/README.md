# Twitch United Glass Minds - Multi Channel Bot
=================

## Chatbot Overview

This chat bot uses AJAX server requests and Twitch API requests to determine if a list of users is broadcasting live, and then generates a multi channel viewer link.     
     
### Manual Calls

`!multilink` is the command to prompt the bot to check it's list of users, and print the updated link.

### Timer Calls
The timer will fire every 30 minutes if the chatbot remains online. If the chatbot goes to sleep on the glitch server, the timer will reset the next time it reloads.

### ReMix ME?
You need to get permission to remix this bot. 
This bot was custom made for a group of my friends, and relies on my webserver for AJAX calls to function.
I do not want to have a larger number of people calling my server. 
If you have your own server and would like a copy of the server side code, I'm more than happy to share it.
Just contact me for a copy of the code. elsandkls@gmail.com

### Get Environment Variables (REMIX)

To start, you’ll need three environment variables:
 
| *Variable*  | *Description*   |

|---|---|---|---|---|

|`BOT_USERNAME`  |  The account (username) that the chatbot uses to send chat messages. This can be your Twitch account. Alternately, many developers choose to create a second Twitch account for their bot, so it's clear from whom the messages originate. |  

|`CHANNEL_NAME`  |  The Twitch channel name where you want to run the bot. Usually this is your main Twitch account.

|`OAUTH_TOKEN`   |  The token to authenticate your chatbot with Twitch's servers. Generate this with [https://twitchapps.com/tmi/](https://twitchapps.com/tmi/) (a Twitch community-driven wrapper around the Twitch API), while logged in to your chatbot account. The token will be an alphanumeric string.|  


What you need (Twitch Setup Instructions)
-------------------
 - First, your own [Twitch.tv account](https://twitch.tv/signup).
 - Log out (or use different browser) after creating your account.
 - Create an [account](https://twitch.tv/signup) for your bot to use.
 - Stay logged in to the bot account and continue to the next step.
 - Visit [TwitchApps/TMI](https://twitchapps.com/tmi/) to generate and oauth token

### Running the bot (Twitch bot Setup Instructions)
-------------------
1. To start with this template, click the Remix button in the upper right. 
2. Glitch automatically installs Node and Tmi.js for us.
3. Add the three environmental vars in our [`.env`] file.
   - Edit .env file add the USERNAME and oauth PASSWORD for your bot.
   - It autosaves.  
4. View the code in `bot.js`. 
5. Your chatbot is ready to run! Glitch automatically deploys & runs each version. 
   - View the status button to ensure there are no errors. 
   - Make sure you keep the bot open in a window, so it stays awake.

6. Try the chatbot! Interact with your channel (twitch.tv/<CHANNEL_NAME>) by trying  the `!multilink` command. 

**Note**: This bot connects to the IRC network as a client and isn't designed to respond over HTTP. 

## Next Steps

Enjoy!
