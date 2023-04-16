import fetch from 'node-fetch'

var handler = async (m, { conn, text }) => {
if (!text) throw `*Enter the Anime Title You Want to Find !*`
let res = await fetch('https://api.jikan.moe/v4/manga?q=' + text)
if (!res.ok) throw 'Not found'
let json = await res.json()
let { chapters, title_japanese, url, type, score, members, background, status, volumes, synopsis, favorites } = json.data[0]
let author = json.data[0].authors[0].name
let animeingfo = `📚 ᴛɪᴛʟᴇ: ${title_japanese}
📑 ᴄʜᴀᴘᴛᴇʀ: ${chapters}
✉️ ᴛʏᴘᴇ: ${type}
🗂 sᴛᴀᴛᴜs: ${status}
🗃 ᴠᴏʟᴜᴍᴇs: ${volumes}
🌟 ғᴀᴠᴏʀɪᴛᴇ: ${favorites}
🧮 sᴄᴏʀᴇ: ${score}
👥 ᴍᴇᴍʙᴇʀs: ${members}
⛓️ ᴜʀʟ: ${url}
👨‍🔬 ᴀᴜᴛʜᴏʀs: ${author}
📝 ʙᴀᴄᴋɢʀᴏᴜɴᴅ: ${background}
💬 sɪɴᴏᴘsɪs: ${synopsis}
`
conn.sendFile(m.chat, json.data[0].images.jpg.image_url, 'animek.jpg', `*${htki} ANIME INFO ${htka}*\n` + animeingfo, m)
}
handler.help = ['animeinfo <anime>']
handler.tags = ['anime']
handler.command = /^(animeinfo)$/i

export default handler