const Discord = require('discord.js');
const mc = require('minecraft-server-util')
const mysql = require('mysql');
const request = require('request');
const color = require('colors');
const client = new Discord.Client();
const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;
const fs = require('fs');

require('os');

const config = require('./config.json');
const { setTimeout } = require('timers');












var con;

if (config.logs.enabled == true)
{
  var con = mysql.createConnection({
    host: config.logs.host,
    user: config.logs.user,
    password: config.logs.password,
    database: config.logs.database
  });
}
else if (config.logs.enabled == false)
{
  console.log("LOGS IS DISABLED".yellow);
}
else {
  console.log("LOGS INIT ERROR".red);
  return;
}
var looped = 0;



 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`.green);
  const Guilds = client.guilds.cache.map(guild => guild.id);
 //   console.log(Guilds);



client.user.setActivity(config.status, {type: 'PLAYING'});
//client.user.setAvatar(config.avatar);
process.stdin.setEncoding('utf8');








});

if (config.logs.enabled == true)
{
  var sql = `INSERT INTO ${config.logs.table} (command) VALUES ('Ready')`;
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!".gray);
  
    

  });
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}
else



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









  

player.on('trackStart', (msg, track) => msg.channel.send(`Now playing ${track.title}...`))






/*
//AIzaSyD_yvZEZQOkEMxxEg-3e7U5exBYv1UZzyI
const bot = new MusicBot({
  botPrefix: '~', // Example: !
  ytApiKey: 'AIzaSyCcVLEpsJC9z95Err0qIJ_wqwZGLkQgOKQ', // Video to explain how to get it: https://www.youtube.com/watch?v=VqML5F8hcRQ
  botClient: client // Your Discord client. Here we're using discord.js so it's the Discord.Client()
});


*/





const commandlist = ["avatar @mention", "flip", "here", "join", "meme", "ping", "roll [min-max]", "tpto [channel id]", "uptime"];
const effectlist = ['bassboost', '8D', 'vaporwave', 'nightcore', 'phaser', 'tremolo', 'vibrato', 'reverse', 'treble', 'normalizer', 'surrounding', 'pulsator', 'subboost', 'karaoke', 'flanger', 'gate', 'haas', 'mcompand'];
player.options.leaveOnEmptyCooldown = config.music.channel_leave_cooldown;
player.options.leaveOnEndCooldown = config.music.channel_leave_cooldown;


client.on('message', async msg => {
        var rand;
        

        var date = new Date();var getnamedmounth = date.getUTCMonth() + 1;var GetTime = ('[' + date.getFullYear() + '.' + getnamedmounth + '.' + date.getUTCDate() + ']' + '  (' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getUTCMilliseconds() + ') - ');
        var args = msg.content.slice(config.prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        const msgcontent = msg.content;
        if (msg.channel.type == 'dm') return;
        let mention = msg.mentions.users.first();
        var AllMembersCount = "752539273034465291";var VoiceOnlineCount = "754009450171334768";var BoostersCount = "751876552110899231";
        const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
        const ServerBoost = client.channels.cache.get(BoostersCount);
        ServerBoost.setName("🚀Boost Count: " + msg.guild.premiumSubscriptionCount + "/30");
        const VoiceOnline = client.channels.cache.get(VoiceOnlineCount);
        if (msg.author.bot || !msg.content.startsWith(config.prefix)) return;
        let ChatMsg = msg.content.toLowerCase();

        
        /*
        CREATE TABLE `jma_db`.`table_name` 
        ( `id` INT(14) NOT NULL AUTO_INCREMENT ,
         `time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
          `guild_id` INT(18) NOT NULL ,
           `guild_name` INT(100) NOT NULL ,
            `channel_id` INT(18) NOT NULL ,
             `channel_name` INT(100) NOT NULL ,
              `user_id` INT(18) NOT NULL ,
               `user_name` INT(32) NOT NULL ,
                `command` INT(256) NOT NULL ,
                 `args` INT(256) NOT NULL ,
                  `full_message` INT(256) NOT NULL ,
                   PRIMARY KEY (`id`)) ENGINE = InnoDB; 
        */

        
        //command.avatar
        if (command === 'avatar') {
                  if (!mention) {
                    msg.channel.send("Using: ~avatar + @user").then(msg => {
                            msg.delete({ timeout: 10000});
                            return;
                        })
                              .catch(console.error());
                    
                  }
                  else 
                  {
                    if (config.logs.enabled == true)
                    {
                    var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                      con.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log("1 record inserted".gray);
                      });
                    }
                    else

                  msg.channel.send(mention.avatarURL({ format: "png", dynamic: true })).then(msg => {
                    

                            msg.delete({ timeout: 60000});
                        })
                              .catch(console.error());
                  console.log(msg.author.tag + " init command " + msg.content);
                  }
    
        }
        //command.ban 
        else if (command === 'ban') {
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
                      try {
                        msg.guild.member(mention).ban(reason)

                        if (config.logs.enabled == true)
                        {
                        var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                        con.query(sql, function (err, result) {
                          if (err) throw err;
                          console.log("1 record inserted".gray);
                        });
                      }
                      else {}

                      }
                      catch {
                        msg.channel.send("Комманда не была выполнена :( Подробности в консоли");
                        return;
                      }
                      
                      msg.channel.send(ban_embed);
        }
        //command.flip
        else if (command === 'flip') {

          function randomnum() {
            var rand = Math.floor(Math.random() * 2);
            return rand;
         }    
         var randnum = randomnum();  //Useless code...

       
            if (randnum === 0) {
                msg.reply('Орёл');
                console.log( msg.author.tag + ' ввёл команду FLIP в комнате ' + msg.channel.name + ' выпал ОРЁЛ');  
                
                if (config.logs.enabled == true)
                {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Орёл')`;
                  con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted".gray);
                  });
                }
              else {}

            }
            if (randnum === 1) {
                msg.reply('Решка').then(msg => {
                  msg.delete({ timeout: 10000});
                    return;
              })
                     .catch(console.error());
                console.log( msg.author.tag + ' ввёл команду FLIP в комнате ' + msg.channel.name + ' выпала РЕШКА');
               
                if (config.logs.enabled == true)
                {
                var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Решка')`;
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
                }
                else{}
            }  
          }
          //command.here || command.tpall
          else if (command === 'here') 
          {

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

                  if (config.logs.enabled == true)
                  {
                    var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                    con.query(sql, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted".gray);
                    });
                  }
                  else{}
          }
          //command.join
          else if (command === 'join') 
          {
                  msg.member.voice.channel.join();
                  console.log(msg.author.tag + " init command ~join");
                  if (config.logs.enabled == true)
                  {
                      var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                      con.query(sql, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted".gray);
                    });
                  }
              else {}
          }
          //command.kick
          else if (command === 'kick') 
          {
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

                    if (config.logs.enabled == true)
                    {
                      var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                      con.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log("1 record inserted".gray);
                      });
                    }
                    else {}

                    //msg.delete();
                  } catch {
                    msg.channel.send("`Ошибка, подробности в консоли...`" + console.error());
                  }
          }
          //command.meme
          else if (command === 'meme') 
          {
            fs.readdir(config.memes_dir, (err, files) => {
              const random_meme = Math.floor(Math.random() * files.length);
              console.log(msg.author.username + " meme command: " + random_meme);
              try
              {
                
                if (config.logs.enabled == true)
                {
                    var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', pic.${random_meme})`;
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted".gray);
                  });
                }
                else {}
                msg.channel.send("pic." + random_meme + {files: [`${config.memes_dir}/meme (${random_meme}).jpg`]});
              }
              catch(err)
              {
                console.log(err);
              }

            });
            return;
          }
          //command.ping
          else if (command === 'ping') 
          { 
            var ping = Date.now() - msg.createdTimestamp + " ms";

                if (config.logs.enabled == true)
                {
                    var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Your ping is ${Date.now() - msg.createdTimestamp}')`;
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted".gray);
                  });
                }
              else {}
                  msg.channel.send("Your ping is `" + `${Date.now() - msg.createdTimestamp}` + "` ms");
          }
          //command.restart
          else if (command === 'restart') 
          {
            if (msg.member.hasPermission("ADMINISTRATOR"))
            {
              try 
              {
                  client.destroy()
                  client.login(config.token);

                  if (config.logs.enabled == true)
                  {
                      var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                      con.query(sql, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted".gray);
                    });
                  }
                  else {}
                  msg.reply("Sucessfully restarted!".green);
                  console.log(msg.author.tag + " init bot restart!");
              }
              catch 
              {
                  console.warn("Failed to restart!".red);
              }
            }
          }
          //command.roll
          else if (command === 'roll') 
          {
                function getRandomInt(max) {
                  return Math.floor(Math.random() * Math.floor(max));
                }
              
                  if (ChatMsg.startsWith("~roll")) 
                    if (!args[0]) {
                      var random_ = getRandomInt(100);
                      console.log(msg.author.tag + " roll: " + random_);

                      if (config.logs.enabled == true)
                      {
                          var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', '${random_}')`;
                          con.query(sql, function (err, result) {
                          if (err) throw err;
                          console.log("1 record inserted".gray);
                        });
                      }
                      else {}
                      msg.reply(random_)
                        .then((msg) => {
                          msg.delete({ timeout: 10000 });
                          return;
                        })
                        .catch(console.error());
                    }
              
                    if (args[0] >= 0) {
                      var userinput = args[0];
                      var random_ = getRandomInt(userinput);
                      console.log(msg.author.tag + " roll: " + random_);
                      if (config.logs.enabled == true)
                      {
                          var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', '${random_}')`;
                          con.query(sql, function (err, result) {
                          if (err) throw err;
                          console.log("1 record inserted".gray);
                        });
                      }
                      else {}
                      msg.reply(random_)
                        .then((msg) => {
                          msg.delete({ timeout: 10000 });
                          return;
                        })
                        .catch(console.error());
                    }
          }
          //command.shutdown
          else if (command === 'shutdown') 
          {
                function ClientStop() {
                  console.log("User " + msg.author.tag + " stopped bot task!".red);
                  process.exit();
                }
      
              if (msg.author.id == config.ownerID || msg.author.id == '252431644684713985')
              {
                
                  msg.reply("Stopped!").then(msg => {
                      msg.delete({ timeout: 1000});
                  })
                        .catch(console.error());
                    msg.delete();
                    client.user.setStatus('dnd');

                  /*  con.connect(function(err) {
                      if (err) throw err;
                      console.log("Write shutdown to database!".green);
                      
                      
                      
                    }); */
                    if (config.logs.enabled == true)
                    {
                        var sql = `INSERT INTO ${config.logs.table} (command, bot_response) VALUES ('Shutdown', 'Stopped!')`;
                        con.query(sql, function (err, result) {
                        if (err) throw err;
                        console.log("1 record inserted".gray);
                      });
                    }
                    else {}

                      setTimeout(ClientStop, 2000);
                  
                  
              }
          }
          //command.tpto
          else if (command === 'tpto') 
          {
                let userchannel = msg.member.voice.channel;
        
            
              if (args >= 1) 
              {
              console.log('tpto init');
              
              for (let member of userchannel.members) 
              {
              // if (member[1].user.id == '294122131074318337') 
            //   {
                  console.log('FINDED!');
                  console.log( member[1].guild.member());
                  msg.guild.members.cache.forEach(member => { //Loop every user
                      if(member.voice.channel){//Is user in voicechannel and is user the command executer
                          member.voice.setChannel(args[0])//Sets user to channel
                      }});
              // }
              if (config.logs.enabled == true)
              {
                var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted".gray);
              });
              }
              else {}  
              }
            }
            else
            {
              console.log("tpto error".red);
              return;
            }
          }
          //command.uptime
          else if (command === 'uptime') 
          {
                var uptime_sec;
                var uptime_min;
                var uptime_hours;
                var uptime_days;
                var uptime_month;

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
                  
                  if (config.logs.enabled == true)
                  {
                      var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Current uptime: ${msToTime(client.uptime)}')`;
                      con.query(sql, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted".gray);
                    });
                  }
                  else {}
            msg.channel.send("```c\nCurrent uptime: " + msToTime(client.uptime) + " \n```").then(msg => { 
                msg.delete({ timeout: 10000});
            })
                  .catch(console.error());
              msg.delete();
              console.log(msg.author.tag + " init command ~uptime " + msg.content);
          }
          else if (command == 'alo' && msg.author.id == config.ownerID)
          {
            //console.log(`${msg.guild.id}', '${msg.guild.name}', '${msg.channel.id}', '${msg.channel.name}', '${msg.author.id}', '${msg.author.username}', '${command}', '${args}', '${msg.content}`);
           

            console.log("end!");
          }
          // command.p || command.play
          else if (command == 'p' || command == 'play')
          {
            player.play(msg, args[0]);
            if (config.logs.enabled == true)
                  {
                      var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                      con.query(sql, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted".gray);
                    });
                  }
          }
          // command.skip
          else if (command == 'skip')
          {
            player.skip(msg);
            if (config.logs.enabled == true)
                  {
                      var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Skipped!')`;
                      con.query(sql, function (err, result) {
                      if (err) throw err;
                      console.log("1 record inserted".gray);
                    });
                  }
          }
          // command.repead || command.loop
          else if (command == 'repeat' || command == "loop")
          {
            console.log(looped);
            if (looped == 0)
            {
              player.setRepeatMode(msg, true);
              looped = 1;
              if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Looped!')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
              msg.channel.send("Looped!").then((msg) => {
                msg.delete({ timeout: 10000 });
                return;
              })
              .catch(console.error());
              return;
            }
            else
            {
              player.setRepeatMode(msg, false);
              looped = 0;
              if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Loop is disabled')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
              msg.channel.send("Loop is disabled").then((msg) => {
                msg.delete({ timeout: 10000 });
                return;
              })
              .catch(console.error());
              return;
            }
          }
          else if (command == 'volume')
          {
            player.setVolume(msg, args[0]);
            msg.channel.send("Volume change to: " + args[0]);
            console.log("New volume: " + args[0]);
            if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
          }
          else if (command == 'pause')
          {
            if (player.isPlaying(msg))
            {
            player.pause(msg);
            msg.channel.send("Paused!");
            if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Paused!')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
            }
            else {
              msg.channel.send('No songs are currently playing');
              if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'No songs are currently playing')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
            }
            
          }
          else if (command == 'resume')
          {
            if (!player.nowPlaying)
            {
              msg.channel.send('Music already playing!');
              if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Music already playing!')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
            }
            else
            {
              player.resume(msg);
              if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
            }
          }
          else if (command == 'leave')
          {
            msg.member.voice.channel.leave();
            if (config.logs.enabled == true)
            {
                var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted".gray);
              });
            }
          }
          else if (command == 'effect')
          {
            if (args[0] == undefined)
            {
              msg.channel.send("Usage: ~effect effectname enable/disable or on/off or 1/0. To watch all effects, write `~effect list`");
              if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', 'Usage: ~effect effectname enable/disable or on/off or 1/0. To watch all effects, write ~effect list')`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
            }
            if (args[0] == 'list')
            {
              msg.channel.send("This is all available effects: `" + effectlist.toString() + "`");
              if (config.logs.enabled == true)
              {
                  var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', "This is all available effects: ` + effectlist.toString() + `")`;
                  con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted".gray);
                });
              }
            }
            console.log("effect init");
            if (effectlist.includes(args[0]))
            {
              console.log("command: " + command + " args0: " + args[0] + " args1: " + args[1]);
              if (args[1] == 'on' || args[1] == '1', args[1] == 'enable') //case dlya debilov (╯°□°）╯︵ ┻━┻
              { 
                if (!player.isPlaying)
                {
                msg.channel.send("Bot dont playing now any song");
                if (config.logs.enabled == true)
                {
                    var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message, bot_response) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}', "Bot dont playing now any song")`;
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted".gray);
                  });
                }
                return;
                }
                if (args[0] == 'bassboost')
                {
                  player.setFilters(msg,{
                    bassboost: true
                  })
                }
                if (args[0] == '8D')
                {
                  player.setFilters(msg,{
                    '8D': true
                  })
                }
                if (args[0] == 'phaser')
                {
                  player.setFilters(msg,{
                    phaser: true
                  })
                }
                if (args[0] == 'tremolo')
                {
                  player.setFilters(msg,{
                    tremolo: true
                  })
                }
                if (args[0] == 'vibrato')
                {
                  player.setFilters(msg,{
                    vibrato: true
                  })
                }
                if (args[0] == 'reverse')
                {
                  player.setFilters(msg,{
                    reverse: true
                  })
                }
                if (args[0] == 'treble')
                {
                  player.setFilters(msg,{
                    treble: true
                  })
                }
                if (args[0] == 'normalizer')
                {
                  player.setFilters(msg,{
                    normalizer: true
                  })
                }
                if (args[0] == 'surrounding')
                {
                  player.setFilters(msg,{
                    surrounding: true
                  })
                }
                if (args[0] == 'pulsator')
                {
                  player.setFilters(msg,{
                    pulsator: true
                  })
                }
                if (args[0] == 'subboost')
                {
                  player.setFilters(msg,{
                    subboost: true
                  })
                }
                if (args[0] == 'karaoke')
                {
                  player.setFilters(msg,{
                    karaoke: true
                  })
                }
                if (args[0] == 'flanger')
                {
                  player.setFilters(msg,{
                    flanger: true
                  })
                }
                if (args[0] == 'gate')
                {
                  player.setFilters(msg,{
                    gate: true
                  })
                }
                if (args[0] == 'haas')
                {
                  player.setFilters(msg,{
                    haas: true
                  })
                }
                if (args[0] == 'mcompand')
                {
                  player.setFilters(msg,{
                    mcompand: true
                  })
                }
                if (config.logs.enabled == true)
                {
                    var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted".gray);
                  });
                }
               
              }

              if (args[1] == 'off' || args[1] == '0', args[1] == 'disable')
              {

                if (args[0] == 'bassboost')
                {
                  player.setFilters(msg,{
                    bassboost: false
                  })
                }
                if (args[0] == '8D')
                {
                  player.setFilters(msg,{
                    '8D': false
                  })
                }
                if (args[0] == 'phaser')
                {
                  player.setFilters(msg,{
                    phaser: false
                  })
                }
                if (args[0] == 'tremolo')
                {
                  player.setFilters(msg,{
                    tremolo: false
                  })
                }
                if (args[0] == 'vibrato')
                {
                  player.setFilters(msg,{
                    vibrato: false
                  })
                }
                if (args[0] == 'reverse')
                {
                  player.setFilters(msg,{
                    reverse: false
                  })
                }
                if (args[0] == 'treble')
                {
                  player.setFilters(msg,{
                    treble: false
                  })
                }
                if (args[0] == 'normalizer')
                {
                  player.setFilters(msg,{
                    normalizer: false
                  })
                }
                if (args[0] == 'surrounding')
                {
                  player.setFilters(msg,{
                    surrounding: false
                  })
                }
                if (args[0] == 'pulsator')
                {
                  player.setFilters(msg,{
                    pulsator: false
                  })
                }
                if (args[0] == 'subboost')
                {
                  player.setFilters(msg,{
                    subboost: false
                  })
                }
                if (args[0] == 'karaoke')
                {
                  player.setFilters(msg,{
                    karaoke: false
                  })
                }
                if (args[0] == 'flanger')
                {
                  player.setFilters(msg,{
                    flanger: false
                  })
                }
                if (args[0] == 'gate')
                {
                  player.setFilters(msg,{
                    gate: false
                  })
                }
                if (args[0] == 'haas')
                {
                  player.setFilters(msg,{
                    haas: false
                  })
                }
                if (args[0] == 'mcompand')
                {
                  player.setFilters(msg,{
                    mcompand: false
                  })
                }

                if (config.logs.enabled == true)
                {
                    var sql = `INSERT INTO ${config.logs.table} (guild_id, guild_name, channel_id, channel_name, user_id, user_name, command, args, full_message) VALUES (${msg.guild.id}, '${msg.guild.name}', ${msg.channel.id}, '${msg.channel.name}', ${msg.author.id}, '${msg.author.username}', '${command}', '${JSON.stringify(args)}', '${msg.content}')`;
                    con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted".gray);
                  });
                }

              }

            }

            
          }
         else if (command == 'test')
         {
          
         }
         

          


        
        

      

          
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
      
          
        
        


     
    
/*let kanal = msg.member.voice.channel;
     
     if (msg.content.startsWith('~tpto')) 
     {
       if (args >= 0) 
       {
        console.log('tpto init');
        
        for (let member of kanal.members) 
        {
        // if (member[1].user.id == '294122131074318337') 
      //   {
            console.log('FINDED!');
            console.log( member[1].guild.member());
            msg.guild.members.cache.forEach(member => { //Loop every user
                if(member.voice.channel){//Is user in voicechannel and is user the command executer
                    member.voice.setChannel(args[0])//Sets user to channel
                }});
        // }
               
        }
      }
      else
      {
        console.log("tpto error".red);
        return;
      }
    } */
    
      
    //if(msg.content.startsWith(bot.prefix)) { // If the message starts with your prefix
    //  bot.onMessage(msg); // The music-system must read the message, to check if it is a music command and execute it.
  //};
    

     /*
    if (ChatMsg == '~join')
    {
      if (msg.member.voice.channel.joinable)
      {
        msg.member.voice.channel.join();
      }
      else {
        console.log("Join failed".red);
        msg.reply("Failed!").then(msg => {
          msg.delete({ timeout: 10000});
  return;
      })
             .catch(console.error());
      }
        console.log(msg.author.tag + " init command ~join");
    }

    if (ChatMsg == '~leave')
    {
      try
      {
        msg.member.voice.channel.leave();
      }
      catch
      {
        msg.reply("Already disconnected!").then(msg => {
          msg.delete({ timeout: 10000});
  return;
      })
             .catch(console.error());
        return;
      }
    }
    

    */

    



   

   

   /* if (ChatMsg == '~hentai')
    {
      
      var hentaiurl_ = "https://cdn.discordapp.com/attachments/781279685102272525/793569370655031326/unknown.png";
      const embed = new Discord.MessageEmbed()
      .setDescription(
        `${lang.IMAGE.CLICK_TO_VIEW}(${data.message})`
      )
        .setImage(`${hentaiurl_}`);
  
      msg.channel.send(embed);

      console.log(msg.author.tag + " use command /hentai".red);
    }
    else return; */


    


/*
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
      */



 /*
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
*/
   /*  function ClientStop() {
       console.log("User " + msg.author.tag + " stopped bot task!");
       process.exit();
     } */

    /* function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    } */

     



     //   const channel = client.channels.cache.get(AllMembersCount)
     //   channel.setName("All members: " + client.users.cache.filter(client => !client.bot).size + "/500");




    


 /*   if (ChatMsg.startsWith("~avatar")) 
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
    } */


 /*   if (ChatMsg.startsWith("~p ") || ChatMsg.startsWith("~play"))
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

    } */
    
    


    
    //if (!msg.member.hasPermission('MOVE_MEMBERS'))
   // if (!msg.channel.id == "391022771800375298") 
  //  {
          //replace the Xs with the admin role ID
        /*    if (regex.exec(msg.content)) 
            {
                console.log("LINK DETECTED");
                InviteLinkCheck();
            } */

         /*   let FoundInText = false;
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
            }*/
            
            
                
            
        
  //  }
    
    





          /*  if (ChatMsg == "~Blacklist") {
              if (!msg.author.dmChannel) return;
              msg.author.send(
                "```css\n Blacklisted words: \n" + DenyList + "```"
              );
              console.log(msg.author.tag + " init command ~blacklist " + msg.content);
            } */

//give Cr3sh4 splash_potion 1 16398 {CustomPotionEffects:[{Id:5,Amplifier:2,Duration:2400},{Id:10,Amplifier:3,Duration:600},{Id:11,Amplifier:2,Duration:2400},{Id:22,Amplifier:3,Duration:3600},{Id:25,Amplifier:2,Duration:200},{Id:9,Amplifier:1,Duration:3600},{Id:19,Amplifier:1,Duration:30}],display:{Name:"\"Red Bull\"",Lore:["\"Stolen from Wallmart\""]}}
//give Cr3sh4 splash_potion 1 16398 {CustomPotionEffects:[{Id:5,Amplifier:2,Duration:2400},{Id:10,Amplifier:3,Duration:600},{Id:11,Amplifier:2,Duration:2400},{Id:22,Amplifier:3,Duration:3600},{Id:1,Amplifier:1,Duration:10000},{Id:3,Amplifier:2,Duration:10000},{Id:25,Amplifier:2,Duration:60}],display:{Name:"\"Red Bull\"",Lore:["\"Stolen from Auchan\""]}}
        // 
        /*

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
        })-
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
  } */


  
  



/*
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
    } */
    
    /*
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
    } */



   

    


      //  msg.channel.send(kick_embed);
     //   console.log(msg.author.tag + " ~join init");
   
        
    
    
    



// || "+help" || "+invite" || "+prices" || "+buy" || "+refund" || "+bid" || "+check" || "+daily" || "+verify" || "+level"
   
    
   



    
    
        
    



    

/*
    if(ChatMsg == "~uptime") {
       
       
        msg.channel.send("```c\nCurrent uptime: " + msToTime(client.uptime) + " \n```").then(msg => { 
            msg.delete({ timeout: 10000});
        })
               .catch(console.error());
           msg.delete();
           console.log(msg.author.tag + " init command ~uptime " + msg.content);
    }
 */
/*
    if (ChatMsg == '~ping') {
        var ping = Date.now() - msg.createdTimestamp + " ms";
        msg.channel.send("Your ping is `" + `${Date.now() - msg.createdTimestamp}` + "` ms");
    
      
    } */
    /*
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
          )}) */
          
          /*let json = response.samplePlayers;
      let playersname;
      for(let i = 0;i<json[i];i++)
        playersname+=`${json[i].name} `
          
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

    */
  
    
  //  774735794895716362

   




    
      
  /*
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
  */


    
  


  /*  if (ChatMsg == ("~restart") && msg.member.hasPermission("ADMINISTRATOR")){ //restart command
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

    } */
    

/*
    if (ChatMsg == "~disable" || ChatMsg == "~off" || ChatMsg == "~shutdown")  //stop command
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
        
    } */
        


        

/*
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
            msg.reply('Решка').then(msg => {
              msg.delete({ timeout: 10000});
      return;
          })
                 .catch(console.error());
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

*/

   











  
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


