const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'yourserver.aternos.me', // or public IP
    port: 25565,
    username: 'AFK_Bot_01', // cracked usernames work
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
