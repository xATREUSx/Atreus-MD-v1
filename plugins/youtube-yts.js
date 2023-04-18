/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Ikratos-MD-v1
 * @description : Ikratos-MD-v1,A Multi-functional simple and light weight whatsapp bot.
 * @version 1.0.0
 * @file : youtube-yts.js
 **/
 import { youtubeSearch } from '@bochilteam/scraper'
 import yts from 'yt-search'

 let handler = async(m, { conn, usedPrefix, text, args, command }) => {
 let name = await conn.getName(m.sender)
 try {
   if (!text) throw `Where is the text?\nExample; *${usedPrefix + command}* arcade`
   let cari = await youtubeSearch(`${text}`)
     let dapet = cari.video
     let listSections = []
   Object.values(dapet).map((v, index) => {
   listSections.push([index + ' ' + cmenub + ' ' + v.title, [
           ['Video🎧', usedPrefix + 'ytmp4 ' + v.url , '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n *Views:* ' + v.view + '\n📎 *Url:* ' + v.url],
           ['Audio 🎧', usedPrefix + 'ytmp3 ' + v.url + ' yes', '\n⌚ *Duration:* ' + v.durationH + '\n⏲️ *Uploaded:* ' + v.publishedTime + '\n *Views:* ' + v.view + '\n📎 *Url:* ' + v.url]
         ]])
   })
   return conn.sendList(m.chat, '*───「 Youtube Search 」───*', `Please choose the type below...\n*Your requested text:* ${text}\n\nɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ1 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 347 0027813`, `${fig}`, `YouTube Search 🔎`, listSections, m)
  } catch {
    await conn.reply(m.chat, global.wait, m)
    let cara = await yts(text)
    let depat = cara.all
    let listSections2 = []
    Object.values(depat).map((v, index) => {
      listSections2.push([index + ' ' + cmenub + ' ' + `${v.title}`, [
              ['Video🎧', usedPrefix + 'ytmp4 ' + `${v.url}` , '\n⌚ *Duration:* ' + `${v.timestamp}` + '\n📎 *Url:* ' + `${v.url}`],
              ['Audio 🎧', usedPrefix + 'ytmp3 ' + `${v.url}` + ' yes', '\n⌚ *Duration:* ' + `${v.timestamp}` +  '\n📎 *Url:* ' + `${v.url}`]
            ]])
      })
     return conn.sendList(m.chat, '*───「 Youtube Search 」───*', `Please choose the type below...\n*Your requested text:* ${text}\n\nɪᴋʀᴀᴛᴏs-ᴍᴅ-ᴠ1 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 347 0027813`, `${fig}`, `YouTube Search 🔎`, listSections2, m)
  }
 }
 handler.help = ['ytsearch <query>']
 handler.tags = ['internet']
 handler.command = /^yts(earch)?$/i
 
 
 export default handler
