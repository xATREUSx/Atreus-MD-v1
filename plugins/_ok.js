import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let ok = 'https://telegra.ph/file/1d140f35607206924fd59.jpg'
let stiker = await sticker(false, ok, global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

export default handler