let handler = async m => m.reply(`
[->GOPAY: 628884357769
[->DANA: 628884357769
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
