const Botname = "Cr3sh4's bot";

const Discord = require('discord.js');
const client = new Discord.Client();
const ownerID = "294122131074318337";
const ytdl = require('ytdl-core');
//require('node-opus');
require('@discordjs/opus');
require('ffmpeg-static');
require('opusscript');
const fs = require('fs');
require('os');
const config = require('./config.json');
//const broadcast = client.voice.createBroadcast();
const streamOptions = { seek: 0, volume: 1};
//const getInfo = require('ytdl-getinfo');
require('./music.js');
var prompt = require("prompt");
var prefix = 'J!';
const broadcast = client.createVoiceBroadcast();








client.on('message', message => {

});







client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);

client.user.setActivity(config.status, {type: 'PLAYING'});
//client.user.setAvatar(config.avatar);
process.stdin.setEncoding('utf8');



    


});

client.on('message', msg => {
    
    function randomnum() {
        var rand = Math.floor(Math.random() * 2);
        return rand;
     }    
        var randnum = randomnum();   
        var date = new Date();
        var getnamedmounth = date.getUTCMonth() + 1;
        var GetTime = ('[' + date.getFullYear() + '.' + getnamedmounth + '.' + date.getUTCDate() + ']' + '  (' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getUTCMilliseconds() + ') - ');
      //  let args = msg.content.substring(prefix.length).split(" ");
      //  let args = msg.content.substring(prefix.length).split(" ");
        let args = msg.content.toLowerCase();
        //  let cmd = args.shift().toLowerCase();
        var musicurl = {};
        var lasturl = 0;
        var TimeCreateFile = 0;
        var servers = {};
        //Queue system vars
        const queue = new Map();
        const serverQueue = queue.get(msg.guild.id);
       // const voiceChannel = msg.member.voiceChannel;
       // var connection = msg.member.voice.channel.join();

     function CreateTimeFile(){
        fs.appendFile('TimeUsersList.txt', 'var ' +  + '\r', function (err) {
            if (err) throw err;
          });
     }

      function TimeInChannel(){
        fs.appendFile();
      }
        
        
      if (msg.author.bot) {
        return;
        }





    if (msg.content.toLowerCase().startsWith('botstop')) {
        if (msg.member.permissions.has('ADMINISTRATOR')) {
            msg.reply('Disabled')
                console.log('Пользователь ', msg.author.tag + " отключил бота в канале " + msg.channel.name);
                fs.appendFile('LOGS.txt',GetTime + msg.author.tag + " ввёл комманду STOP в канале " + msg.channel.name + '\r', function (err) {
                    if (err) throw err;
                  });
            setTimeout(function () { client.destroy(); }, 1000)
            
return 0; 
        }
    }









 //   if(command === "ping") {
 //       msg.channel.send(Math.round(client.ping) + "ms")
  //    }


    if (msg.content == ('flip')) {
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


        if(msg.content === '1'){
            
        }
    


    if (msg.content.startsWith('pinfo')){
        msg.reply('start');
        let exampleEmbed = new Discord.MessageEmbed()
	.setColor('#5309FF')
    .setAuthor(msg.author.username, msg.author.displayAvatarURL())
  //  .setImage(getavatarurl())
	//.setDescription(msg.author.)
	.addFields(
		{ name: '', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setTimestamp()

msg.channel.send(exampleEmbed);
       // CreateTimeFile();
        msg.reply('end');

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
     /*           var link = `https://www.youtube.com/watch?v=crtJzci5XL4`;
                    function play(musiclink) {
                    play(ytdl (link, { filter: 'audioonly' }));
                    
                  }

         if (msg.channel.id === `690712642100265011`) {
          if (msg.content.startsWith('http')) {
            let musiclink = `${msg}`;
            msg.reply(musiclink);
             msg.member.voiceChannel.join();
          //  ytdl(`https://www.youtube.com/watch?v=VWxjcQjHA7o` , { filter : 'audioonly' });
            
            var ss = ytdl.validateURL(musiclink);
            msg.channel.send(ss);

           // play(musiclink);
            msg.channel.send('ytdl ok');
            
            
          }
          else {
            msg.delete();
          //  msg.channel.send('Msg removed');
        }}  */
        

        if(msg.content === 'add'){
           msg.member.guild.roles.find(role => role.id === '474709011204276264');
           
        }




        if (msg.content === 'sg') {
            let exampleEmbed = new Discord.RichEmbed()
            .setColor('#5309FF')
            .setAuthor(msg.author.username, msg.author.displayAvatarURL)
          //  .setImage(getavatarurl())
            //.setDescription(msg.author.)
            .addField('Current playing:', 'HJFDHJJDSHKJHKFSDJHKFSD', true)
            .addField('Track by: ', msg.author.tag)
            .setImage('https://www.youtube.com/watch?v=0J2QdDbelmY')
            .setTimestamp()
        
            
        msg.channel.send(exampleEmbed);
        }




          
          if (msg.content === 'tst'){
              var tst = ["tst1", "tst2", "tst3"];
              msg.channel.send(tst);
              tst.pop();
              msg.channel.send(tst);
                }
        

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



      
      if (msg.content.startsWith('http')) {



        function play(connection, msg){
          var server = servers[msg.guild.id];
          
          server.dispatcher = connection.playStream(ytdl(server.queue[0], { filter : 'audioonly'}));

          server.queue.shift();

          server.dispatcher.on("end", function(){
            if(server.queue[0]){
              play(connection, msg);
            }
            else {
              connection.disconnect();
              console.log('5');
              console.error();
              
            }
          });

        }

        //  if (!args[1]){
       //     msg.channel.send('Я нічого не бачу!');
       //     return;
       //   }

          if(!msg.member.voiceChannel) {
            msg.channel.send('Вы не в голосовом канале!');
          }

          if (!servers[msg.guild.id]) servers[msg.guild.id] = {
            queue: []
          }
          console.log('1');

          var server = servers[msg.guild.id];

          console.log('2');

          server.queue.push(args);

          console.log('3');

          if (!msg.guild.voiceConnection) msg.member.voiceChannel.join().then(function(connection)
          {
            play(connection, msg);
            console.log('4');
          })







      }

        



     











      if(msg.channel.id === '690712642100265011') {
        if (msg.content.toLowerCase().startsWith('disco')){
          msg.member.voiceChannel.leave();
          msg.channel.send('Disconnected! @' + msg.author.tag);
        }
        var musiclink = `${msg}`;
        var validateURL = ytdl.validateURL(musiclink);
        if (validateURL === true) {
          var verifedmusiclink = `${musiclink}`


          




        }
        if (validateURL === false){
          msg.reply('Ссылка не валидная');
        }

 
    //  if (msg.content.startsWith('https')) {
        
        if (validateURL === false) {
            msg.delete();
            return;
        }}



         // var stream = ytdl(verifedmusiclink, { filter : 'audioonly' });
         // var dispatcher = serverQueue.connection.playStream(ytdl(song.url, { filter : 'audioonly'})) //stream, streamOptions
        //    .on('start', () => {
         //   msg.channel.send(`Current playing: \n` + verifedmusiclink);
         //   console.log('Current playing: ' + verifedmusiclink);
        
              //   let exampleEmbed = new Discord.RichEmbed()
               //  .setColor('#5309FF')
               //  .setAuthor(msg.author.username, msg.author.displayAvatarURL)
               //  .setImage(getavatarurl())
                 //.setDescription(msg.author.)
               //  .addField('Current playing:', '', true)
               //  .addField('Track by: ', msg.author.tag)
               //  .addField(`${musiclink}`)
                 //.setImage('https://i.forfun.com/k00nvqei.jpeg')
                // .setTimestamp()
             
            // msg.channel.send(exampleEmbed);
       //   })
        
        
        //  .on('end', () => {
        //    console.log('Музыка закончилась');
        //    serverQueue.songs.shift();
        //    play(guild, serverQueue.songs[0]);
        //  })
        
        
        
        
               





                if (msg.content.toLowerCase().startsWith('disco')){
                    msg.member.voiceChannel.leave();
                }



                if (msg.content.toLowerCase().startsWith('join')){
                  msg.member.voiceChannel.join();
                }



   


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


