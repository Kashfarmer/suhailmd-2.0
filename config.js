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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233240482472";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_23_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDExMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk0LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICA4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVqVGQzYzJYNGlPVGNZa0phc3F5MUs5NURITEdPbzJ1MXFUUkFRSW84VjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjg5dlc2cWEtUnRhb3c3aW0tbjE4ZXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTIxMzM1YWMtMDdmNC00MjJmLTgzZjEtNTU1NmJiMzI2MjRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDMzLFxuICAgICAgMTMzLFxuICAgICAgMjE2LFxuICAgICAgMTQ5LFxuICAgICAgMjIxLFxuICAgICAgMTQ1LFxuICAgICAgMCxcbiAgICAgIDIyMSxcbiAgICAgIDkwLFxuICAgICAgMjMyLFxuICAgICAgMCxcbiAgICAgIDExLFxuICAgICAgMTIyLFxuICAgICAgMTEsXG4gICAgICAxODYsXG4gICAgICAxMDAsXG4gICAgICAyMzgsXG4gICAgICAxMTMsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTY3LFxuICAgICAgMTQ0LFxuICAgICAgNTEsXG4gICAgICAxMjYsXG4gICAgICAyMzMsXG4gICAgICA0OCxcbiAgICAgIDEwNixcbiAgICAgIDEwOCxcbiAgICAgIDEwMyxcbiAgICAgIDE3NyxcbiAgICAgIDc3LFxuICAgICAgMjEyLFxuICAgICAgMjM4LFxuICAgICAgMTkyLFxuICAgICAgMTIsXG4gICAgICAxNTgsXG4gICAgICAyMDEsXG4gICAgICAxMjksXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTUDk2SzdaNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjMzMjQwNDgyNDcyOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2FzaCBGYXJtZXIgU0dcIixcbiAgICBcImxpZFwiOiBcIjI1NDAzNDgxNjU3NzYyMDozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYWt4YmdLRU8yVm9ic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxucDd4OEdJeU8zdDY1M3pWUDlvZzNVVlZTcDZ6bHc0bUYwU2VjUVhVM0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOU1kc3JXM0d1a1ZqR2h3RGVXaGZoRFI1OTBtV2VKRkdhWkFxQTJHbmhSSmc1U3dha01ZNituWHlDTTllTWlqRjArS0p5V1RRazR5UldodVdjcmdPREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOGV1NGFxVUJaOHZVSkVLWWlJUFRVZGxPdzFFQWo2disxQ0JCbUdvY2Z6WStEQUhiREN0V1pXdmJGbG9WRTBhNTNhYm9vWDJHSjM0RGNsbTZhQU5YaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzMjQwNDgyNDcyOjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg4ODE3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUx5U1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHlTLmpzb24iOiAie1wia2V5RGF0YVwiOlwicjlNSk1BcnZPYkdCbWl2REpzWGZnbHpockFzS1JZaEQ5M1JVcTRnekpMaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyODAyOTMwMjk0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ4ODgxODEwODJcIn0iCn0="  // PUT your SESSION_ID 


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
