}

module.exports. run = function({ api, event, args, getText }) {
  const axios = require("axios");
  const request = require('request');
  const fs = require("fs-extra");
 const { commands } = global.client;
 const { threadID, messageID } = event;
 const command = commands.get((args[0] || "").toLowerCase());
 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
if (args[0] == "all") {
    const command = commands.values();
    var group = [], msg = "";
    for (const commandConfig of command) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
    }
    group.forEach(commandGroup => msg += `❄️ ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} \n${commandGroup.cmds.join(' • ')}\n\n`);

    return axios.get('https://loidsenpaihelpapi.miraiandgoat.repl.co').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      let admID = "61551846081032";

      api.getUserInfo(parseInt(admID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", "");
    let callback = function () {
        api.sendMessage({ body:`✿🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃✿\n\n` + msg + `✿══════════════✿\n│𝗨𝘀𝗲 ${prefix}help [Name?]\n│𝗨𝘀𝗲 ${prefix}help [Page?]\n│𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 : │Arata Kaizaki\n│𝗧𝗢𝗧𝗔𝗟 :  ${commands.size}\n————————————`, mentions: [{
                           tag: firstname,
                           id: admID,
                           fromIndex: 0,
                 }],
            attachment: fs.createReadStream(__dirname + `/cache/472.${ext}`)
        }, event.threadID, (err, info) => {
        fs.unlinkSync(__dirname + `/cache/472.${ext}`);
        if (autoUnsend == false) {
            setTimeout(() => {
                return api.unsendMessage(info.messageID);
            }, delayUnsend * 1000);
        }
        else return;
    }, event.messageID);
        }
         request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/472.${ext}`)).on("close", callback);
     })
      })
};
 if (!command) {
  const arrayInfo = [];
  const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 15;
    let i = 0;
    let msg = "";

    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);  
const first = numberOfOnePage * page - numberOfOnePage;
   i = first;
   const helpView = arrayInfo.slice(first, first + numberOfOnePage);


   for (let cmds of helpView) msg += `•—»[ ${cmds} ]«—•\n`;
    const siu = `╭──────•◈•──────╮\n |        Arata Kaizaki Bot \n |   🄲🄾🄼🄼🄰🄽🄳 🄻🄸🅂🅃       \n╰──────•◈•──────╯`;
const text = `╭──────•◈•──────╮\n│𝗨𝘀𝗲 ${prefix}help [Name?]\n│𝗨𝘀𝗲 ${prefix}help [Page?]\n│𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 : │Arata Kaizaki\n│𝗧𝗢𝗧𝗔𝗟 : [${arrayInfo.length}]\n│📛🄿🄰🄶🄴📛 :  [${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}]\n╰──────•◈•──────╯`; 
    var link = [
"https://i.imgur.com/FdAeql8.jpeg", "https://i.imgur.com/FdAeql8.jpeg", "https://i.imgur.com/FdAeql8.jpeg", "https://i.imgur.com/FdAeql8.jpeg",
"https://i.imgur.com/FdAeql8.jpeg",
"https://i.imgur.com/FdAeql8.jpeg",
"https://i.imgur.com/FdAeql8.jpeg",
    ]
     var callback = () => api.sendMessage({ body: siu + "\n\n" + msg  + text, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
 }
const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

  var link = [
"https://i.imgur.com/ybM9Wtr.jpeg",
  ]
    var callback = () => api.sendMessage({ body: leiamname, attachment: fs.createReadStream(__dirname + "/cache/loidbutter.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/loidbutter.jpg"), event.messageID);
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/loidbutter.jpg")).on("close", () => callback());
};
