import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Example:\n.song believer'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Audio š§', usedPrefix + 'yta ' + v.url + ' yes', '\nā *Duration:* ' + v.durationH + '\nā²ļø *Uploaded:* ' + v.publishedTime + '\nšļø *Views:* ' + v.view + '\nš *Url:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*āāāć Song Result ćāāā*', `Please select the type below...\n*The text you requested:* ${text}\n\nRetype *${usedPrefix + command}* your text, to change the text again\n ā¢--šø_šŖš«šš„šš©š_šø--ā¢ `, author, `Song list š`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['tools']
handler.command = /^song?$/i
handler.premium = true


export default handler