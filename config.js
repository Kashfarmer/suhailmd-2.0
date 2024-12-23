const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121530876";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_43_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAzLFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODksXG4gICAgICAgIDY2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSXhKNjQvN1RVRTJjdm9SVU5wRUFnZkw2bHpsallXQlZCWmViMVBTOUhHaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMFNKeWVyVTNUSlduV3lxWDFUck9YUVwiLFxuICBcInBob25lSWRcIjogXCIyOTg4ODgzMy0yMmQ2LTQwNGMtOGEyYy0wNDljOTJmYWUzNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMjgsXG4gICAgICAyNDEsXG4gICAgICAxMCxcbiAgICAgIDczLFxuICAgICAgNzUsXG4gICAgICAyNTIsXG4gICAgICA2LFxuICAgICAgMzUsXG4gICAgICAxMTUsXG4gICAgICAyMDQsXG4gICAgICAyNDIsXG4gICAgICAxOCxcbiAgICAgIDE2OCxcbiAgICAgIDEyOCxcbiAgICAgIDMxLFxuICAgICAgMTM5LFxuICAgICAgMTExLFxuICAgICAgMjQ1LFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMxLFxuICAgICAgMTI5LFxuICAgICAgMTg3LFxuICAgICAgMTg3LFxuICAgICAgMjE0LFxuICAgICAgMTU5LFxuICAgICAgMTU2LFxuICAgICAgNTAsXG4gICAgICAyMzgsXG4gICAgICAyNDAsXG4gICAgICAyMixcbiAgICAgIDY0LFxuICAgICAgMjEwLFxuICAgICAgMTcyLFxuICAgICAgMjQwLFxuICAgICAgMTY5LFxuICAgICAgMjExLFxuICAgICAgMTIxLFxuICAgICAgMTE3LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZTMzJDQzlIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzMyNDA0ODI0NzI6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLYXNoIEZhcm1lciBTR1wiLFxuICAgIFwibGlkXCI6IFwiMjU0MDM0ODE2NTc3NjIwOjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Bla3hiZ0tFSkRycDdzR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTG5wN3g4R0l5TzN0NjUzelZQOW9nM1VWVlNwNnpsdzRtRjBTZWNRWFUzST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEbTloQ3FOMmNBTFRkeEdwRGVIbXNMcWtKTEkyUUxaVDQxVUhWWlF2dXpqVTZhTDlFeDZwTDlFVm8rOW9pRnd2SVJHLzU4eTBKaVQ0ZE9IVzN2S0ZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVZDBkT284cEQrT0lTZmd0TGxyRVhuN1p4dStYbXJld082aEJSMTZ6NjJmL0drQTUvRzUzdklVTjNnamR2YVgxZFZWait5a2xGdzVEdE00YXpsbDhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzMyNDA0ODI0NzI6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0OTk3Mzk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSStaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJK1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEMFh1dGhzdjJWUm9JY2JkeWxBYWxKOW5KbWlRRHBRWldsV3I1WHBrb3p3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4MDI5MzAyOTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDk0ODY5MzEyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
