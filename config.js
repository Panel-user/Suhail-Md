const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064763129";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_11_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICAxMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzksXG4gICAgICAgIDgxLFxuICAgICAgICAzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDcyLFxuICAgICAgICA0MixcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwLFxuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWWpVSzM5SGtZQnIwMkZRMVJsb3VBdE9qR1Yxc0huampNOHlpUmJxSG5ocz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc3OTc3MzkyNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM1NkZCODg1QkQ4QUMxMzlBOUM3Nzg3RkU3Q0U1REIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTU1ODY1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzc5NzczOTI0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTlGOUJGREJGNTg4MzE3QTdDNDY0NTBBRDE1NTJCQ0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTU4NjU5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVBV3BGaWMzUUpxY2UyZEpkeGxNendcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWJlMzc2NmUtZDY4Mi00ZWQ2LTkxMTctNWU4NjE2OGY1MWI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDE5NCxcbiAgICAgIDI0MSxcbiAgICAgIDI1MixcbiAgICAgIDQwLFxuICAgICAgMTksXG4gICAgICAyNTAsXG4gICAgICA4NixcbiAgICAgIDg0LFxuICAgICAgMjM1LFxuICAgICAgMTM4LFxuICAgICAgMSxcbiAgICAgIDc4LFxuICAgICAgMjUzLFxuICAgICAgNzMsXG4gICAgICAzOCxcbiAgICAgIDIzNCxcbiAgICAgIDE5NSxcbiAgICAgIDc4LFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDQxLFxuICAgICAgMTY3LFxuICAgICAgNTUsXG4gICAgICAxMzYsXG4gICAgICA1NSxcbiAgICAgIDEzMSxcbiAgICAgIDYyLFxuICAgICAgMjMwLFxuICAgICAgMTU4LFxuICAgICAgNDAsXG4gICAgICA1OCxcbiAgICAgIDEwNixcbiAgICAgIDc4LFxuICAgICAgODMsXG4gICAgICAxLFxuICAgICAgMTIsXG4gICAgICA0NyxcbiAgICAgIDIwMSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJROVBFVFRTSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3Nzk3NzM5MjQ2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQwNDI0NjUxNjI4NzcwOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUGlua2ninaTvuI/igI3wn6m5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzdxcm9BREVQN0QrYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpRmo4QWtlQmZkZm9pNU5xdkFBeGFSaVNHdG9YbVExK0dCSHBJcGtXS1dJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkIza2s0SlIwU2toVkpKcHBkUldkQm1jN3JiZndLZWJTclZobG9JL3R5T1ZiWkMzaXFDVjJYdjM2WmxibW0rZitZTHYwQlJINkJ5QnBlSTRDaktJU0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpNaWJlSkFpc0NZM0pIb3BsRVFkN2l6WkdnRXJHRm9mbFlTRjd0NjF5MW9zYmt1K3ljN2MzVytBN0M4djVndW1PaTVwYmlOa29GSjJXbk9LLzFBL2lBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzc5NzczOTI0Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU1ODY1NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVpOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWk4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiT00yM3hsR3VoSjJ2cW5oTVlxdzI4cnB5NDh4akN2OFllUi9LT2U3eG8yRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MDYwNzM3MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTU1ODY1OTI5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
