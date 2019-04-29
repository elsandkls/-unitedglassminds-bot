const tmi = require('tmi.js');
const http = require('http');
const request = require('request'); 

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

// Create a client with our options
const client = new tmi.client(opts);
console.log(`Initiating client connection.`);
// Register our event handlers (defined below)
client.on('message', onMessageHandler); 
client.on('connected', onConnectedHandler); 
// Connect to Twitch:
client.connect();
console.log(`Client is connected.`);

// call to start the safety break functions
// Interval calculations 
var myIntervalMilliSeconds = 1000;
var myIntervalSeconds = 60; // 60 seconds in one minute
var myIntervalMinutes = 30; // 10 minute interval
var myIntervalLength = myIntervalMilliSeconds * myIntervalSeconds * myIntervalMinutes;

const intervalObj_MT = setInterval(wrapperMT, myIntervalLength);  

function wrapperMT()
{
    client.on('message', Initialize_MultiTwitch_Link);
}

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) 
{
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim(); 
    // If the command is known, let's execute it    
    const channel = context;  
    //console.log(`* recieved channel ${channel} `);
    const user = target;  
    //console.log(`* recieved user ${user['display-name']}`);
    const message = msg.trim();
    //console.log(`* recieved ${message} command`);
    const username = `${user['display-name']}`; 
    
    switch(message) {  
      case '!MLlist': 
        client.say(target, `unitedglassminds-bot -- Our commands are !MLlist (to see this list), !multilink  `);
        console.log(`* Executed ${message} command`);
        break;
      //////// extra commands  
      case '!multilink':
          Initialize_MultiTwitch_Link(client, channel, target, msg, self);
          console.log(`* Executed ${message} command`); 
          break;          
      default:        
        console.log(`* Unknown command ${message}`);
        break;
     }    
} 

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) 
{
  console.log(`* Connected to ${addr}:${port}`);  
}
   
function Initialize_MultiTwitch_Link(client, channel, target, msg, self) 
{  
  //console.log("Initialize_MultiTwitch_Link -- Start"); 
  var kiss = 0;
	var User = []; 
	User[kiss] = "K_Ron_Spliffs";          kiss++; 
	User[kiss] = "beastworksglass";        kiss++;
	User[kiss] = "bubblesglass"; 	         kiss++; 
	User[kiss] = "drbthunderfoot";         kiss++; 
	User[kiss] = "smplyglass";             kiss++;
  User[kiss] = "taniquil";               kiss++;
  User[kiss] = "canibauz";               kiss++;
	User[kiss] = "gubsglass";              kiss++;
	User[kiss] = "dedleewicket";           kiss++;
	User[kiss] = "FishNFries";             kiss++;
	User[kiss] = "gubsglass";              kiss++;
	User[kiss] = "ichabodglass";           kiss++;
	
  //console.log("Initialize_MultiTwitch_Link: User: "+User);    
	let LiveUsers = "http://kidshideaway.net/kadgar_test.php?q=dawghouseglass";
	for(var i=0; i< User.length; i++)
	{
      LiveUsers = LiveUsers + "/" + User[i];
  }  
    console.log('LiveUsers:' + LiveUsers);
    //client.say(target, "Checking active users: "+LiveUsers);
  
    http.get(LiveUsers, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type']; 
    //res.setTimeout(60);
    //console.log('statusCode:' + statusCode);      
    let error;
    if (statusCode !== 200) 
    {
      error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
    }  
      
    if (error) 
    {
      console.error(error.message); 
      res.resume();
      return;
    } 
      
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });      
    res.on('end', () => 
    {
      try 
      {
        const parsedData = rawData;
        //console.log("Initialize_MultiTwitch_Link: parsedData: "+parsedData);
        console.log('parsedData'+  parsedData);
        client.say(target, parsedData);
      } 
      catch (e) 
      {
        console.error(e.message);
      }     
    });
    res.on('error', (e) => 
    {
      console.error(`Got error: ${e.message}`);
    });
   });   		    
  } // end user for loop      
