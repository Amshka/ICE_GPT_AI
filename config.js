const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github=process.env.GITHUB|| "https://github.com/GEEKMD099/GEEK-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaWQOHsFSAsv3SD3dJ3a";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaWQOHsFSAsv3SD3dJ3a" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec9bc5038601821f2eb84.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "237698046545" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "237698046545";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923135673658,923192173398";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135673658,923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://geek-qr-c6ccf7b7583e.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUIvdlZmb3RJZWxYQmQ4UmZKNCtGR3BKTGNEcGtZVHYwQ29MaVRGN2Ywdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FFakltQ0dCWEd4TTdZVytvUmRtanQwYWk2eHFJZzBRRkl0UDJxcnpsbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS2ZWZnVMVlJGak1SVmtYZEt5bC9rVUJGa0tCWDU3RGpxRjBtajNyK21nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUlF3Rm9zbkRIeGpUV01LblNxNG5PTlkyVjJQb1JJczNtL3pHTEUvejJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFRllQSGR4QVZGQktoaXlPOG1Ha3UzTElWcGVMcS9PQU9RRUlTbzNORVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik44Vm1maE1RTEZPak1DRWh1R09uQTBEbnp6KzV4Z3oxSFlEaWRLMHBiZzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUErTUlUTThOdFBQbWpIYURDbEs5SUpsZUpGemJ4TVRsWDB2UUVMMDlXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlJxRXNqLzVXb0VWcFZLTjZqQ1V2eEMxcnZUaEhpU1hvOUNWNnovNmlCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF6NGlVTWE2cDJjYmFJeHBDYnd3bGYwQUprRmpKVFFVUGpvU01tRWVsM05wRXZUNjM0WmtMN2dibk5RN0dPT2hqenE1V2VNcnlBRFNSUWpnMEtPOUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQwLCJhZHZTZWNyZXRLZXkiOiJPeUZwWDFiOGlPK2kvT2krMFg1MFJOWEcxdzlzcW94bXJIYlAxM0pmME1nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVQ3VLSTBVa1N2Q2k1NmE3aXlWdW5BIiwicGhvbmVJZCI6IjljMDc5ZWZiLTEzMmEtNDIyOC04ZjhjLTdkMDBkNzEyN2U0MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGVUlucDhxazZUeTJ3MnRUQ0dUQjNwd0t5VjQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQ0L3d4RzRsNFV1UnZ5WmowUUlMbzQzdWVQdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YaXZZa0dFUGZXcTdJR0dEUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InEzSnRhZEF5MUQ0OWZBMVY0SDJ5bE94ZzBxQlB5cUhZVjVrMW81T3hFUXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImpBOUVNT05JS29STEFFOHlKS3RvbXovMS95VkExYnBJOEN2eG5BeDEyV0sxcHlyb045RmlZRzV6TjZKOVltUmVyVlNPU2Q3WTcvYnNvUWg5V0tzSUNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjUUQ2R2krSURjVDgrbCtIRElLSmdqSEwzVVR5OXdoaHdGUjl2OXdFQjcrcnRDdXg2bXk4ZHcrUVJZSHNIaTM4SldhcThQeVlORmJMTXNoSU1VMVhBQT09In0sIm1lIjp7ImlkIjoiOTQ3NjIzODM2MzY6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW1pc2hrYSBUaGVqYW4iLCJsaWQiOiI0ODQwNDQ0OTUyNjk1OjIzQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2MjM4MzYzNjoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhdHliV25RTXRRK1BYd05WZUI5c3BUc1lOS2dUOHFoMkZlWk5hT1RzUkVMIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2MTg1OTc3fQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙂𝙀𝙀𝙆-𝙈𝘿 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝙂𝙀𝙀𝙆-𝙈𝘿 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "GEEK MD",
  ownername:process.env.OWNER_NAME|| "Geek",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
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
 
