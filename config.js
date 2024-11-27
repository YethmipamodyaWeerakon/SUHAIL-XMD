const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_25_11_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0LFxuICAgICAgICAxOSxcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlUrcktxajZrdzdaYWhReUpnS0hWV1FyK3dEc3REOUd2Nmp6UGFzdncySlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlZYWgxX1R5UUU2YjBhUkxWRUlvSkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTQxM2Q1NzItMjFlMy00N2ZkLTkyM2ItNWNiNzcxYTc5OTllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MCxcbiAgICAgIDIyNCxcbiAgICAgIDE4MCxcbiAgICAgIDI0MCxcbiAgICAgIDE3LFxuICAgICAgMTksXG4gICAgICAxNTMsXG4gICAgICAxMjIsXG4gICAgICAxNDIsXG4gICAgICA0LFxuICAgICAgMyxcbiAgICAgIDEwMixcbiAgICAgIDE5NixcbiAgICAgIDE5NSxcbiAgICAgIDM2LFxuICAgICAgNzAsXG4gICAgICAzNSxcbiAgICAgIDIyNyxcbiAgICAgIDExNSxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDEzLFxuICAgICAgMTgxLFxuICAgICAgNjgsXG4gICAgICAxMTgsXG4gICAgICAxMzAsXG4gICAgICAxMTMsXG4gICAgICA0OSxcbiAgICAgIDY2LFxuICAgICAgNyxcbiAgICAgIDEyNixcbiAgICAgIDc5LFxuICAgICAgMTU4LFxuICAgICAgMTE1LFxuICAgICAgMjA1LFxuICAgICAgMTM1LFxuICAgICAgNDYsXG4gICAgICA4MixcbiAgICAgIDIxNyxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZCRVQ0OEFNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3OTM2MjA2NzozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzEyNTAzNjY2MDM0NjE6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGJsbnBVREVNWHpuTG9HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0RkdWVDd2cEx4d1JlZUxiVWtiN0RtS1Z5ZHhDZU1ZZEhHN2NveTR3bVJnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVFT21vT0lHK29hUWF5dFVBWEYwRHh0ekJqWXVab01ZTWwvV2xZRHN3MGRrRFEzWHpHQzJUZUhiek1wYVhLZ1dLcDVKYUVETWN5cXNqOU9Kb0pHb0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJmQjY4ZlBxck1VaTVScEZLL1kxTDB6YWIvTHFmSTZ1K2loMXlCV3l2eTdsOWp1aUZIMnF6WHBlVXowamNjOHBQaytFcklvNmFDQllkNXdOTzlmV2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzc5MzYyMDY3OjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNzIxMDk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTm95XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOb3kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLeHdDZlRqNEoyU3ViT21DV1FwQTlPYnB3bDRQZlgxN1pSSmEwSUN4TWpnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0OTg1MTA2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
