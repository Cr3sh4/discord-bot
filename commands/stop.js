module.exports = {
    name: 'stop',
    description: 'close node app',
    execute(msg)
    {
        function ClientStop() {
            console.log("User " + msg.author.tag + " stopped bot task!");
            process.exit();
          }

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
}
