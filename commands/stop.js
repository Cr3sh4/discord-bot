function botstop() {
{
    if (msg.member.permissions.has('ADMINISTRATOR')) {
        msg.reply('Bot stop')
            console.log('Пользователь ', msg.author.tag + " отключил бота в канале " + msg.channel.name);
            fs.appendFile('LOGS.txt',GetTime + msg.author.tag + " ввёл комманду STOP в канале " + msg.channel.name + '\r', function (err) {
                if (err) throw err;
              });
        setTimeout(function () { client.destroy(); }, 1000)
        
return 0; 
    }
    }
}