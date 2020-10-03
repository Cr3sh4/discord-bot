const Botname = "mmhero bot";

const Discord = require('discord.js');
const client = new Discord.Client();
//client.music = require("discord.js-musicbot-addon");


const ownerID = "294122131074318337";


const fs = require('fs');
require('os');

const config = require('./config.json');
const { info } = require('console');
const { send } = require('process');
const broadcast = client.voice.createBroadcast();
const streamOptions = { seek: 0, volume: 1};


var prefix = '@@';














client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);




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
if (newMember.mute == true)
{
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
        
        const ytdl = require('ytdl-core');
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

        
        var mention = msg.mentions.users.first();
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
    

     
    if (ChatMsg == '~join')
    {
        msg.member.voice.channel.join();
    }



    





    if (ChatMsg == '~tpall' || ChatMsg == '~here') //tpall
    {

        msg.guild.members.cache.forEach(member => 
            {
            if (member.voice.channel && msg.member.permissions.has('MOVE_MEMBERS')) 
                {
                var channelid = msg.member.voice.channel.id;
                member.voice.setChannel(channelid);
                }
                else 
                {
                    console.log("User " + msg.author.tag + " writen ~tpall without permissions");
                    return;
                }
            });
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
      



 
     function InviteLinkCheck() //delete invite links
     {
         console.log("InviteLinkCheck Init");
        if (msg.channel.id == "391022771800375298") return;
    else 
        {
                msg.reply("Server invite's are not allowed! Use #self-promotion channel.")
               .then(msg => {
                 msg.delete({ timeout: 10000});
             })
                    .catch(console.error());
                msg.delete();
        }
     }



     //   const channel = client.channels.cache.get(AllMembersCount)
     //   channel.setName("All members: " + client.users.cache.filter(client => !client.bot).size + "/500");






    
    function ClientStop() {
        console.log("User " + msg.author.tag + " stopped bot task!");
        process.exit();
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


            if (FoundInText) 
            {
                msg.delete();
                console.log(msg.author.tag + " написал слово из blacklist");
                msg.reply('That word is blacklisted!').then(msg => { 
                    msg.delete({ timeout: 10000});
                    
                })
                       .catch(console.error());
            }
            
            
                
            
        
  //  }
    
    





            if (ChatMsg == '~Blacklist') 
        {
            if (!msg.author.dmChannel) return;
            msg.author.send('```css\n Blacklisted words: \n' + DenyList + '```');
            
        }



        
        

  if (ChatMsg.startsWith("~kick")) 
  {
      
  if (!msg.member.hasPermission("KICK_MEMBERS"))
  {
    msg.delete();
    msg.channel.send("У вас нет прав для использования данной комманды!").then(msg => { 
      msg.delete({ timeout: 10000});
      
  })
         .catch(console.error());
         return;
}
  if (mention == null) 
  {
      msg.delete();
      msg.channel.send("Пользователь не указан!").then(msg => { 
        msg.delete({ timeout: 10000});
        
    })
           .catch(console.error());
           return;
  }
   // if (msg.guild.member(mention).hasPermission("ADMINISTRATOR")) return;
   if (msg.guild.member(mention).client.user.id == "294122131074318337")  return;
   if (!msg.guild.member(mention).kickable) {msg.channel.send("`Этого пользователя невозможно кикнуть`"); return;}
    let reason = msg.content.slice (mention.toString.length + 29);
    
    let kick_embed = new Discord.MessageEmbed()
    .setColor('#ff121e')
    .setTitle("Enterprise Squad")
    .setThumbnail(mention.avatarURL())
    .addField("Пользователь: ", `${mention.username + "#" + mention.discriminator}`)
    .addField("Кикнут модератором: ", `${msg.author.tag}`)
    .addField("По причине:", `${reason}`, true)
   // .addField("Забанен до %%", '2', true)
    .setFooter("Enterprise Squad", "https://cdn.discordapp.com/attachments/685063276950061066/754501359658860625/234331.gif")
    .setTimestamp()

    console.log(reason);
    try {
    msg.guild.member(mention).kick(reason);
    //msg.channel.send(msg.author.tag + " kicked " + mention.username + " from server")
    msg.channel.send(kick_embed);
    msg.delete();
   
    
    }
    catch {
        msg.channel.send("`Ошибка, подробности в консоли...`" + console.error());
    }}







    if(ChatMsg.startsWith(`~ban`)) //ban command
    {
      if (!msg.member.hasPermission("BAN_MEMBERS")) return;
      if (mention == null)
      {
        msg.delete();
        msg.channel.send("Пользователь не указан!").then(msg => { 
          msg.delete({ timeout: 10000});
          
      })
             .catch(console.error());
             return;
    }
     // if (msg.guild.member(mention).hasPermission("ADMINISTRATOR")) return;
      if (msg.guild.member(mention).client.user.id == "294122131074318337")  return;
      if (!msg.guild.member(mention).kickable) {msg.channel.send("`Этого пользователя невозможно забанить`"); return;}
      let reason = msg.content.slice (mention.toString().length + 6);
      console.log(reason);
        

      let ban_embed = new Discord.MessageEmbed()
      .setColor('#ff121e')
      .setTitle("Enterprise Squad")
      .setThumbnail(mention.avatarURL())
      .addField("Пользователь: ", `${mention.username + "#" + mention.discriminator}`)
      .addField("Забанен модератором: ", `${msg.author.tag}`)
      .addField("По причине:", `${reason}`, true)
     // .addField("Забанен до %%", '2', true)
      .setFooter("Enterprise Squad", "https://cdn.discordapp.com/attachments/685063276950061066/754501359658860625/234331.gif")
      .setTimestamp()


      msg.guild.member(mention).ban(reason);
      msg.channel.send(ban_embed)
    
      
      
    }
    
    



   

    


      //  msg.channel.send(kick_embed);
     //   console.log(msg.author.tag + " ~join init");
   
        
    
    
    



// || "+help" || "+invite" || "+prices" || "+buy" || "+refund" || "+bid" || "+check" || "+daily" || "+verify" || "+level"
    var MuteRole = msg.guild.roles.cache.find(role => role.name === "Muted");
    
    if (msg.content == "+info")
    {
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
        
    }


    if (ChatMsg == '~ping') {
        msg.channel.send(date.toLocaleTimeString());
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




   








if (msg.content.startsWith('r')) {
 // console.log(client.channels.cache.get(msg.member.guild.id)); 
    console.log('ok');
    console.log(msg.content);
    console.log(msg.content.trim());
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




