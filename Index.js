const Botname = "mmhero bot";

const Discord = require('discord.js');
const mc = require('minecraft-server-util')
const color = require('colors');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const fs = require('fs');
var opusscript = require('opusscript');
var servers = {};
const broadcast = client.voice.createBroadcast();

//client.music = require("discord.js-musicbot-addon");


const ownerID = "294122131074318337";


require('os');

const config = require('./config.json');
const { info } = require('console');
const { send } = require('process');
const { fileURLToPath } = require('url');
const { setTimeout } = require('timers');
const { connect } = require('http2');

const streamOptions = { seek: 0, volume: 1};




















client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`.rainbow);
  var IsMonitoringEnabled = 0;
  




client.user.setActivity(config.status, {type: 'PLAYING'});
//client.user.setAvatar(config.avatar);
process.stdin.setEncoding('utf8');



/*client.music.start(client, {
    // Set the api key used for YouTube.
    youtubeKey: "AIzaSyCm1jwx_9JZcOQdsIsbkdQzN6cLquQKoS8",
  
    // The PLAY command Object.
    play: {
      // Usage text for the help command.
      usage: "~",
      // Whether or not to exclude the command from the help command.
      exclude: false  
    },
  
    // Make it so anyone in the voice channel can skip the
    // currently playing song.
    anyoneCanSkip: true,
  
    // Make it so the owner (you) bypass permissions for music.
    ownerOverMember: true,
    ownerID: "294122131074318337",
  
    // The cooldown Object.
    cooldown: {
      // This disables the cooldown. Not recommended.
      enabled: false
    }
   
  });
 */
    
//:bar_chart: All Members: 000/750
//:chart_with_upwards_trend:Voice Online:
//:rocket: Nitro Boosters



});




var AllMembersCount = "752539273034465291";

var BoostersCount = "751876552110899231";

const updateMemberCount = guild => {
    const channel = client.channels.cache.get(AllMembersCount)
    channel.setName("📊All Members: " + client.users.cache.filter(client => !client.bot).size + "/750");
};


    

client.on('guildMemberAdd', (member) => updateMemberCount(member.guild));
client.on("guildMemberRemove", (member) => updateMemberCount(member.guild));
client.on('voiceStateUpdate', (oldMember, newMember) => {
    var VoiceOnlineCount = "754009450171334768";
    var setVoiceChannelName = client.channels.cache.get(VoiceOnlineCount);
 const voiceChannels = client.channels.cache.filter(c => c.type === 'voice');
 var CountInVoiceChannels = 0;

 for (const [id, voiceChannel] of voiceChannels) CountInVoiceChannels += voiceChannel.members.size;

 setVoiceChannelName.setName("📈Voice Online: " + CountInVoiceChannels);  
 
if (newMember.id == '294122131074318337' || newMember.id == '252431644684713985')
{
if (newMember.mute == true)

{
    newMember.setMute(false);
}}


//console.log("User id: " + newMember.member.user.tag + " state update");
})







client.voice.connections.find()





























client.on('message', async msg => {
    
    function randomnum() {
        var rand = Math.floor(Math.random() * 2);
        return rand;
     }    
        var randnum = randomnum();   
        var date = new Date();
        var getnamedmounth = date.getUTCMonth() + 1;
        var GetTime = ('[' + date.getFullYear() + '.' + getnamedmounth + '.' + date.getUTCDate() + ']' + '  (' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getUTCMilliseconds() + ') - ');
      //  let args = msg.content.substring(prefix.length).split(" ");
        let args = msg.content.split(' ');
        let cmd = args.shift().toLowerCase();
       
        if (msg.channel.type == "dm")
    {
      if (msg.content == "~dm"){
      //msg.author.send('кто прочитал тот здохнет');
      //client.users.cache.get("252431644684713985").send("кто прочитал тот здохнет");
      console.log(client.users.cache.get('252431644684713985').fetch());
      }
    }

      if (msg.channel.type == 'dm') return;
        var queue = {};
        var musicurl = {};
        var lasturl = 0;
        var servers = {};
        let tomute = msg.guild.members.cache.get(args[0]);
        
       
       // const suffix = msg.content.substring(musicbot.botPrefix.length + command.length).trim();


        var uptime_sec;
        var uptime_min;
        var uptime_hours;
        var uptime_days;
        var uptime_month;

        
        let mention = msg.mentions.users.first();
        var AllMembersCount = "752539273034465291";
        var VoiceOnlineCount = "754009450171334768";
        var BoostersCount = "751876552110899231";
        //"Boost count: " + msg.guild.premiumSubscriptionCount + "/30"
        const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
        let DenyList = ['+help', '+invite', '+prices', '+buy', '+refund', '+bid', '+check', '+daily', '+verify', '+level'];


        
        
        const ServerBoost = client.channels.cache.get(BoostersCount);
        ServerBoost.setName("🚀Boost Count: " + msg.guild.premiumSubscriptionCount + "/30");
        const VoiceOnline = client.channels.cache.get(VoiceOnlineCount);



      

          
      //  VoiceOnline.setName("Voice online: -");

      //  let connection = msg.member.voice.channel.join();
    /*  const embed = new Discord.MessageEmbed()
      .setColor('#db121f')

      .setTitle("%username% " + "был кикнут админом: " + msg.author.tag)
      .setThumbnail("Thumbnail")
      .setDescription("По причине: ")
      .setThumbnail(msg.author.avatarURL())
      .setTimestamp() */
    //  _embed #channel author=name=Cr3sh4 icon=PICTURE URL | title=USERNAME has been kicked | description=Reason:  | thumbnail=KICKED USERNAME | color=#db121f
      
   var one = 1;
          
        
        
      
        
 if (msg.author.bot) return;
 let ChtMsg = msg.content;
 let ChatMsg = ChtMsg.toLowerCase();

     
    
 let kanal = msg.member.voice.channel;
     
 
 

     if (msg.content.startsWith('~unm')) 
     {
        console.log('unm init');
        
        for (let member of kanal.members) 
        {
        // if (member[1].user.id == '294122131074318337') 
      //   {
            console.log('FINDED!');
            console.log( member[1].guild.member());
            msg.guild.members.cache.forEach(member => { //Loop every user
                if(member.voice.channel){//Is user in voicechannel and is user the command executer
                    member.voice.setChannel('372068121898385418')//Sets user to channel
                }});
        // }
               
        }
    }
    
      if (ChatMsg.startsWith(''))
    

     
    if (ChatMsg == '~join')
    {
      if (!msg.member.voiceChannel) return;
      msg.member.voice.channel.join();
        console.log(msg.author.tag + " init command ~join");
    }

    

    

    



   

   




    



     function msToTime(millisec) {
        var secs = (millisec / 1000).toFixed(1);

        var mins = (millisec / (1000 * 60)).toFixed(1);

        var hors = (millisec / (1000 * 60 * 60)).toFixed(1);

        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

        if (secs < 60) {
            return secs + " Sec";
        } else if (mins < 60) {
            return mins + " Min";
        } else if (hors < 24) {
            return hors + " Hrs";
        } else {
            return days + " Days"
        }
      }
      



 
     function InviteLinkCheck() {
       //delete invite links
       console.log("InviteLinkCheck Init");
       if (msg.channel.id == "391022771800375298") return;
       else {
         msg
           .reply(
             "Server invite's are not allowed! Use #self-promotion channel."
           )
           .then((msg) => {
             msg.delete({ timeout: 10000 });
           })
           .catch(console.error());
         msg.delete();
       }
     }

     function ClientStop() {
       console.log("User " + msg.author.tag + " stopped bot task!");
       process.exit();
     }

     function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

     



     //   const channel = client.channels.cache.get(AllMembersCount)
     //   channel.setName("All members: " + client.users.cache.filter(client => !client.bot).size + "/500");




    


    if (ChatMsg.startsWith("~avatar")) 
    {
      if (!mention) {
        msg.channel.send("Using: ~avatar + @user").then(msg => {
                msg.delete({ timeout: 10000});
				return;
            })
                   .catch(console.error());
        
      }
      msg.channel.send(mention.avatarURL({ format: "png", dynamic: true })).then(msg => {
                msg.delete({ timeout: 60000});
            })
                   .catch(console.error());
      console.log(msg.author.tag + " init command " + msg.content);
    }


    if (ChatMsg.startsWith("~p ") || ChatMsg.startsWith("~play"))
    {
      console.log(args[0]);
     
      
      if (ytdl.validateURL(args[0]) == false)
      {
        msg.reply("Invalid link or args");  
      }
      else 
      {
        if(msg.member.voice.channel == false)
        {
          msg.channel.send("User isn't in voice channel")
          .then((msg) => {
            msg.delete({ timeout: 10000 });
          })
          .catch(console.error());
          return;
        }

        if (!servers[msg.guild.id]) servers[msg.guild.id] = {
          queue: []
        };


        var server = servers[msg.guild.id];
        if (!msg.guild.voice.connection) msg.member.voice.channel.join();
        broadcast.play('');
         
        
        

      }

    }
    
    


    
    //if (!msg.member.hasPermission('MOVE_MEMBERS'))
   // if (!msg.channel.id == "391022771800375298") 
  //  {
          //replace the Xs with the admin role ID
        /*    if (regex.exec(msg.content)) 
            {
                console.log("LINK DETECTED");
                InviteLinkCheck();
            } */

            let FoundInText = false;
            for (var i in DenyList) 
            {
                if (ChatMsg.includes(DenyList[i].toLowerCase())) FoundInText = true;
            }


            if (FoundInText) {
              msg.delete();
              console.log(msg.author.tag + " написал слово из blacklist");
              msg.reply("That word is blacklisted!")
                .then((msg) => {
                  msg.delete({ timeout: 10000 });
                })
                .catch(console.error());
            }
            
            
                
            
        
  //  }
    
    





            if (ChatMsg == "~Blacklist") {
              if (!msg.author.dmChannel) return;
              msg.author.send(
                "```css\n Blacklisted words: \n" + DenyList + "```"
              );
              console.log(msg.author.tag + " init command ~blacklist " + msg.content);
            }



        
        

  if (ChatMsg.startsWith("~kick")) {
    if (!msg.member.hasPermission("KICK_MEMBERS")) {
      msg.delete();
      msg.channel
        .send("У вас нет прав для использования данной комманды!")
        .then((msg) => {
          msg.delete({ timeout: 10000 });
        })
        .catch(console.error());
      return;
    }
    if (mention == null) {
      msg.delete();
      msg.channel
        .send("Пользователь не указан!")
        .then((msg) => {
          msg.delete({ timeout: 10000 });
        })
        .catch(console.error());
      return;
    }
    // if (msg.guild.member(mention).hasPermission("ADMINISTRATOR")) return;
    if (msg.guild.member(mention).client.user.id == "294122131074318337")
      return;
    if (!msg.guild.member(mention).kickable) {
      msg.channel.send("`Этого пользователя невозможно кикнуть`");
      return;
    }
    let reason = msg.content.slice(mention.toString.length + 29);
    if (reason == "") {
      reason = "Причина не указана";
    }
    console.log(mention + " забанен по причине: " + reason);
    let kick_embed = new Discord.MessageEmbed()
      .setColor("#ff121e")
      .setTitle("Enterprise Squad")
      .setThumbnail(mention.avatarURL())
      .addField(
        "Пользователь: ",
        `${mention.username + "#" + mention.discriminator}`
      )
      .addField("Кикнут модератором: ", `${msg.author.tag}`)
      .addField("По причине:", `${reason}`, true)
      // .addField("Забанен до %%", '2', true)
      .setFooter(
        "Enterprise Squad",
        "https://cdn.discordapp.com/attachments/685063276950061066/754501359658860625/234331.gif"
      )
      .setTimestamp();

    console.log(reason);
    console.log(msg.author.tag + " init command ~kick " + msg.content);
    try {
      msg.guild.member(mention).kick(reason);
      //msg.channel.send(msg.author.tag + " kicked " + mention.username + " from server")
      msg.channel.send(kick_embed);
      msg.delete();
    } catch {
      msg.channel.send("`Ошибка, подробности в консоли...`" + console.error());
    }
  }


  if (ChatMsg.startsWith('~tag') && msg.member.hasPermission('ADMINISTRATOR'))
  {
    let tag_count = msg.content.slice(mention.toString().length + 7);
        if (Number.isInteger(tag_count)) 
    {
    console.log(tag_count);
    console.log("User " + msg.author.tag + " TAGGED " + mention.username);

    }
        if (!Number.isInteger(tag_count))
          {
            msg.channel.send("Введите количество в цифрах!");
          }
  }
  




    if (ChatMsg.startsWith(`~ban`)) {
      //ban command
      if (!msg.member.hasPermission("BAN_MEMBERS")) return;
      
      if (mention == null) {
        msg.delete();
        let reason = msg.content.slice(mention.toString.length + 6);
        console.log("Message: " + msg.content);
        console.log("User: " + mention);
        console.log("Reason: " + reason);
        msg.channel
          .send("Пользователь не указан!")
          .then((msg) => {
            msg.delete({ timeout: 10000 });
          })
          .catch(console.error());
        return;
      }
      // if (msg.guild.member(mention).hasPermission("ADMINISTRATOR")) return;
      if (msg.guild.member(mention).client.user.id == "294122131074318337")
        return;
      if (!msg.guild.member(mention).bannable) {
        msg.channel.send("`Этого пользователя невозможно забанить`");
        return;
      }
      let reason = msg.content.slice(mention.toString().length + 6);
      console.log(msg.author.tag + " init command ~ban " + msg.content);
      if (reason == "") {
        reason = "Причина не указана";
      }

      let ban_embed = new Discord.MessageEmbed()
        .setColor("#ff121e")
        .setTitle("Enterprise Squad")
        .setThumbnail(mention.avatarURL())
        .addField(
          "Пользователь: ",
          `${mention.username + "#" + mention.discriminator}`
        )
        .addField("Забанен модератором: ", `${msg.author.tag}`)
        .addField("По причине:", `${reason}`, true)
        // .addField("Забанен до %%", '2', true)
        .setFooter(
          "Enterprise Squad",
          "https://cdn.discordapp.com/attachments/685063276950061066/754501359658860625/234331.gif"
        )
        .setTimestamp();
        console.log("Message: " + msg.content);
        console.log("User: " + mention);
        console.log("Reason: " + reason);
      try {msg.guild.member(mention).ban(reason)}
      catch {
        msg.channel.send("Комманда не была выполнена :( Подробности в консоли");
        return;
      }
      
      msg.channel.send(ban_embed);
    }
    
    
    if (ChatMsg == "~tpall" || ChatMsg == "~here") {
      //tpall
      msg.guild.members.cache.forEach((member) => {
        if (
          member.voice.channel &&
          msg.member.permissions.has("MOVE_MEMBERS")
        ) {
          var channelid = msg.member.voice.channel.id;
          member.voice.setChannel(channelid);
        }
      });
      console.log(msg.author.tag + " init command ~tpall " + msg.content);
    }



   

    


      //  msg.channel.send(kick_embed);
     //   console.log(msg.author.tag + " ~join init");
   
        
    
    
    



// || "+help" || "+invite" || "+prices" || "+buy" || "+refund" || "+bid" || "+check" || "+daily" || "+verify" || "+level"
   
    
    if (msg.content == "+info")
    {
        var MuteRole = msg.guild.roles.cache.find(role => role.name === "Muted");
      //  msg.delete();
       // msg.member.roles.add(MuteRole);
        console.log(msg.author.tag + " был замучен");
    }



    
    
        
    



    


    if(ChatMsg == "~uptime") {
       
       
        msg.channel.send("```c\nCurrent uptime: " + msToTime(client.uptime) + " \n```").then(msg => { 
            msg.delete({ timeout: 10000});
        })
               .catch(console.error());
           msg.delete();
           console.log(msg.author.tag + " init command ~uptime " + msg.content);
    }


    if (ChatMsg == '~ping') {
        msg.channel.send(msg.author.id);
    }
    let serverstatus;
    let serverstatuscolor = '#fffff';
   // let playerlist;

    function getplayerlist()
    {
      mc.queryFull('riomc.cf')
    .then((response) => {
        let players = response.players.toString();
        //console.log(response.players);
       // console.log(response);
        playerlist = response.players;
        //serverstatus = "enabled";
        console.log("RESPONE OK".green);
        console.log("Playerlist in function: " + playerlist + "".green);
        return playerlist;
    })
    .catch((error) => {
        serverstatus = "disabled";
        console.log("status: disabled".red);
        return serverstatus;
        throw error;
    });
    }



    function getserverstatus()
    {
      mc.query('riomc.cf')
    .then((response) => {
      if (response.onlinePlayers >= 1)
      {
        serverstatus = "enabled";
        serverstatuscolor = '#00ff00';
        return serverstatus, serverstatuscolor;

      }
      serverstatus = "enabled";
        //console.log(response);
        //console.log("status: enabled");
        return serverstatus;
    })
    .catch((error) => {
        serverstatus = "disabled";
        serverstatuscolor = '#FF4D00';
        console.log("status: disabled".red);
        fs.appendFile('LOGS.txt',GetTime + ' MONITORING NULL RESPONE ' + '\r', function (err) {
          if (err) throw err;
        });
        return serverstatus;
        throw error;
    });
    }

    
 //riomc.cf
 if (ChatMsg == '~t') 
 {
 console.log("Playerlist out func: " + playerlist + "".rainbow);
 }
    function monitoring()
    {

      //var monitoringmsg = await msg.channel.send("one");
      
      mc.status('riomc.cf') // port is default 25565
    .then((response) => {
      
      
      //  console.log("JSON: " + json + "");
      //  console.log("Players name: " + playersname + "");
        
       // var playerslistjson = response.samplePlayers;
       // const playername = playerslistjson[playerslistjson.length - 1];
       // const arrayplayers = playerslistjson.length;
        //var playersdata = JSON.parse(playerslistjson);
        msg.channel.messages.fetch('776825828696522772').then(newmsg=>{newmsg.edit(new Discord.MessageEmbed()
          //.setDescription("Java: riomc.cf\nBedrock: riomc.cf:26665\n Status: " + serverstatus +"\nOnline map: riomc.cf:25577")
          .setAuthor("Rio-MC 1.16.3")
          .setColor(serverstatuscolor)
          //.setColor('#00ff00')
          //.setTitle(`Online players: ${response.onlinePlayers}/${response.maxPlayers}\n`) 
          .addField('Online players: ', response.onlinePlayers + "/" + response.maxPlayers) 
          .addField("Java:", "riomc.cf")
          .addField("Bedrock:", "riomc.cf:26665")
          .addField("Online map:", "riomc.cf:25577")
          .addField("Status:", serverstatus)
          .setFooter("Rio-MC OPEN BETA") // , footer img
          .setThumbnail("https://media3.giphy.com/media/FVVpS4yRrAL7y/200.gif")
          )})
          
          /*let json = response.samplePlayers;
      let playersname;
      for(let i = 0;i<json[i];i++)
        playersname+=`${json[i].name} `
          */
         // console.log(playersname);
          
        //console.log(response.samplePlayers);
        
       //console.log("Playerlist in respone func : " + playerlist + "".rainbow);
        //console.log(playername);
       // msg.channel.send(playername.name);
    })
    .catch((error) => {
      console.log("Something error on monitoring".red);
        throw error;
    });
    //console.log(respone);
    }

    
    function MonEnable() 
    {
    
      
      if (msg.content != null)
      {   
          if (IsMonitoringEnabled == undefined)
          {

        setInterval(getserverstatus, 30000);
        setInterval(monitoring, 10000);

        var IsMonitoringEnabled = 1;

        console.log("Monitoring is enabled now!".green);
        console.log("[DOWN]IsMonitoringEnabled = " +  + IsMonitoringEnabled);
        
       return IsMonitoringEnabled;
          }


          else
              {
            msg.reply("Alredy enabled").then(msg => {
              msg.delete({ timeout: 10000});return;})
                 .catch(console.error());
              }
        }

          else {
            console.log("FUCK ON MONITORING ACTIVATOR".red);
          }


    }

    
  
    
  //  774735794895716362

   




    
      
        
       if (ChatMsg == "~err")
       {
         console.log("error sample".red);
       }
       if (ChatMsg == "~warn")
       {
         console.log("warn sample".yellow);
       }
       if (ChatMsg == "~inf")
       {
         console.log("info sample".white);
       }
       


    
  


    if (ChatMsg == ("~restart") && msg.member.hasPermission("ADMINISTRATOR")){ //restart command
        try 
        {
            client.destroy()
            client.login(config.token);
            msg.reply("Sucessfully!");
            console.log(msg.author.tag + " init bot restart!");
        }
        catch {
            console.log("Failed to restart!");
        }

    }
    


    if (ChatMsg == ("~stop"))  //stop command
    {
        if (msg.member.hasPermission("ADMINISTRATOR"))
        {
        
            msg.reply("Stopped!").then(msg => {
                msg.delete({ timeout: 1000});
            })
                   .catch(console.error());
               msg.delete();
               client.user.setStatus('dnd');
            fs.appendFile('LOGS.txt',GetTime + msg.author.tag + ' ввёл комманду STOP в комнате ' + msg.channel.name  + '\r', function (err) {
                if (err) throw err;
              });
              setTimeout(ClientStop, 2000);
            
        }
        
    }
        


        


    if (ChatMsg == ('~flip')) { //flip command
        if (randnum === 0) {
            msg.reply('Орёл');
            console.log( msg.author.tag + ' ввёл команду FLIP в комнате ' + msg.channel.name + ' выпал ОРЁЛ');  
           // fs.appendFile('LOGS.txt', msg.author.tag + ' ввёл команду FLIP в комнате ' + msg.channel.name + ' выпал ОРЁЛ');
            fs.appendFile('LOGS.txt',GetTime + msg.author.tag + ' ввёл комманду FLIP в комнате ' + msg.channel.name + ' выпал ОРЁЛ' + '\r', function (err) {
                if (err) throw err;
              });

        }
        if (randnum === 1) {
            msg.reply('Решка');
            console.log( msg.author.tag + ' ввёл команду FLIP в комнате ' + msg.channel.name + ' выпала РЕШКА');
        //    fs.appendFile('LOGS.txt', msg.author.tag + ' ввёл команду FLIP в комнате ' + msg.channel.name + ' выпала РЕШКА');
            fs.appendFile('LOGS.txt',GetTime + msg.author.tag + ' ввёл комманду FLIP в комнате ' + msg.channel.name + ' выпала РЕШКА' + '\r', function (err) {
                if (err) throw err;
              });
        } 
    }


    if (ChatMsg.startsWith('~roll'))
    {
      if (!args[0])
      {
        var random_ = getRandomInt(100);
        console.log(msg.author.tag + " roll: " + random_);
        msg.reply(random_).then(msg => {
          msg.delete({ timeout: 10000});
  return;
      })
             .catch(console.error());
  

      }
      if (args[0] >= 0)
      {
        var userinput = args[0];
        var random_ = getRandomInt(userinput);
        console.log(msg.author.tag + " roll: " + random_);
        msg.reply(random_).then(msg => {
          msg.delete({ timeout: 10000});
  return;
      })
             .catch(console.error());
      }
    }



   











  
       //var test = prompt("Тест", '');
  //  msg.content.startsWith(httpstart.startsWith('http')); 

 /* async function play(connection, url) {
        await msg.member.voice.channel.join();
        connection.play(await ytdl(`https://www.youtube.com/watch?v=SXe1aTEJU2w`), { type: 'opus' });
        if (msg.member.voice.channel) {
             msg.member.voice.channel.join()
                .then(connection => {
                    msg.reply('ok');
                    const dispatcher = connection.play(ytdl ( `https://www.youtube.com/watch?v=q5evnNSxbio` , { filter : 'audioonly' } )   )
    
                    dispatcher.on('end', () => {});
    
                    dispatcher.on('error', e => {
                        console.log(e);
                    });
                })
                .catch(console.log);
        } else {
            msg.reply('...');
        } 
      } */
    
 /*     switch (args[0]) {
        case 'play':

            function play(connection, msg){   
                msg.reply('play function initialization');
                
              var dispatcher = connection.play(ytdl (musicurl , { filter : 'audioonly' } ));
              dispatcher.on("end", function(){
                      play(connection, msg) },)
                    }


        

            if(!args[1]){
                msg.channel.send('Ссылка не найдена!');
                return;
            }
            if (!msg.member.voice.channel){
                msg.channel.send('Пользователь не в голосовом канале!');
                return;
            }
            if (!msg.guild.id) {
                queue: []
            }
            //var server = servers[msg.guild.id];

            //server.queue.push(args[1]);
            if (msg.member.voice.channel) msg.member.voice.channel.join()
     /*       .then
            (function (connection){
                var lasturl = msg;
                msg.reply(msg);
                msg.reply(lasturl);
                msg.reply(connection);
                return lasturl;
             // play(connection, msg);
            }) */
  /*          .then(connection => {
                var lasturl = msg;
          //      msg.reply(msg);
          shiftfunct(lasturl);
          msg.channel.send(shiftfunc);
                msg.reply(lasturl);
          //      msg.reply(connection);
                var lasturlshorted = lasturl.shift;
                msg.channel.send(lasturl);
            //    msg.channel.send(lasturlshorted);
             // play(connection, msg);
            })
            //console.log(URL5)
            break;
          } */
         


   /*     function play(connection, musiclink){   
            msg.reply('play function initialization \n');
          //  msg.member.voice.channel.join();
         // var dispatcher = connection.play(ytdl (musicurl , { filter : 'audioonly' } ));
          dispatcher.on("end", function(){
                  play(musiclink) },)
                } */

  //              async function play(connection, musiclink) {
  //                  connection.play(await ytdl(musiclink), { type: 'opus' });
 //                 }

  /*        if (msg.channel.id === `690712642100265011`) {
          if (msg.content.startsWith('http')) {
            let musiclink = `${msg}`;
            msg.reply(musiclink);
           //  msg.member.voice.connection.join();
          //  ytdl(`https://www.youtube.com/watch?v=VWxjcQjHA7o` , { filter : 'audioonly' });
            
            play(connection, musiclink);
            msg.channel.send('ytdl defined');
            
            
          }
          else {
            msg.delete();
            msg.channel.send('Msg removed');
        }} */
        











          
          
        

  /*   switch (args[0]) {
          case 'play':

          function play(connection, msg){   
              
            var dispatcher = connection.play(ytdl (server , { filter : 'audioonly' } ));

            server.shift();

            dispatcher.on("end", function(){
                    play(connection, msg)
                

                    
                }
            ,)
            }

          

              if(!args[1]){
                  msg.channel.send('Ссылка не найдена!');
                  return;
              }
              if (!msg.member.voice.channel){
                  msg.channel.send('Пользователь не в голосовом канале!');
                  return;
              }
              if (!msg.guild.id) {
                  queue: []
              }
              //var server = servers[msg.guild.id];

              //server.queue.push(args[1]);

              if (msg.member.voice.channel) msg.member.voice.channel.join().then(function(connection){
                play(connection, msg);
              })
              break;
            } */
         
      

   /*   if (msg.content === 'mus') {
        play();
      }*/









   


})


/*
client.on('message', async msg => {
    let args = msg.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    try {
        let ops = {
            ownerID: ownerID
        }
        if (msg.author.bot)
        {return;}
            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(client, msg, args, ops);

    }
    catch (error) {
        console.log(error);
        msg.channel.send('err');
        
    } 

})  */


/*client.on('message', async msg => {
    if (msg.content === ('conn')) {
    try {
        let ops = {
            ownerID: ownerID
        }


            let commandFile = require(`./commands/play.js`);
            commandFile.run(client, msg, args, ops);

    }
    catch (error) {
        console.log(error.stack);
        msg.channel.send('error');
        
    } }

}) */







   /* if (msg.content.startsWith('GO')) {
        if (msg.member.permissions.has('MANAGE_ROLES')) {
                //let user = msg.mentions.members.first()
                msg.member.addRole(631597123280044043);    //user.addRole('631597123280044043')
               // msg.reply(`1!`)
               // console.log(`Пользователю была выдана роль `)
        }
    } */


    /*if (msg.content === 'ok') {
        message.reply('Hey, I\'m a reply!')
            .then(() => console.log(`Sent a reply to ${message.author.username}`))
            .catch(console.error);
    } */
  

//🎄Admin🎄 294522861618724865 <=Admin id => 685100651491098634 ok hand id |



/*function disablebot() {
    timeoutId = setTimeout(disablebot, 3000)
} */

client.login(config.token);




