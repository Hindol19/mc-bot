const mineflayer = require('mineflayer')
require('./keep_alive') // start Express server
// your existing bot code below...

function createBot() {
  const bot = mineflayer.createBot({
    host: 'kokanee.aternos.host', // or public IP
    port: 11150,
    username: 'Bhodai69', // cracked usernames work
  })

  bot.once('spawn', () => {
    console.log('✅ Bot spawned in the world')
    bot.chat('Hello, I am alive and AFK 😴')

    // Anti-kick: keep jumping
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => bot.setControlState('jump', false), 500)
    }, 10_000)
  })

  bot.on('end', () => {
    console.log('⚠️ Disconnected. Reconnecting...')
    setTimeout(createBot, 5000)
  })

  bot.on('error', err => {
    console.log('❌ Error:', err)
  })
}

createBot()
