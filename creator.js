function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '628884357769', 'AhyanGanz', m)
  this.sendContact(m.chat, '628884357769', 'AhyanGanz', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
