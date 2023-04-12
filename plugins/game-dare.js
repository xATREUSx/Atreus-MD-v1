import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} Dare ${htka}*
   YOU ARE READY BE HONEST OK? 
 
       'Create by ALI'
       "+923142913200"
 `

	let dare = [
'Demonstrate one of us until someone can guess who is the person being demonstrated.',
'Make up a 30-second opera about a person or people in the group and perform it.',
'What was the most embarrassing thing that happened to you at a grocery store?',
'Put makeup on the person sitting the farthest away from you.',
'Who would you choose to help you hide a dead body?',
'What is the most embarrassing thing that has happened to you in front of a crowd?',
'Do the worm.',
'Have you ever been arrested?',
'Who is your secret crush?',
'When was the last time you cried?',
'What\'s the dirtiest thing you\'ve ever done in public?',
'Have you ever accidentally hit something with your car?',
'Give a foot massage to someone in the room.',
'What\'s your most disastrous date story?',
'Do you have a finsta?',
'If you could date two people at once, who would you choose?',
'Tell everyone who you find most attractive in the room.',
'Get up in front of the group and try doing five minutes worth of standup comedy.',
'If you could swap wardrobes with someone in this room, who would it be?',
'Show the last text you sent.',
'Try to unbuckle your pants using only your elbows.',
'What\'s the best date you\'ve ever been on?',
'Have you ever played strip poker?',
'What\'s the drunkest you\'ve ever been?',
'Have you ever lied to get out of an awkward situation?',
'Using no words, pretend to be a food. Don\'t pretend to eat the food—pretend to be the food. Keep pretending until someone in the group guesses the food you are.',
'Have you ever made out with someone here?',
'Have you ever lied about your age?',
'What\'s the most disgusting thing you\'ve ever done?',
'Remove four items of clothing.',
'Repeat everything the person next to you says until it\'s your turn again.',
'What\'s the strangest dream you\'ve ever had?',
'Do you pick your nose?',
'What do people get wrong about you?',
'Read the last five things you searched for on Google out loud.',
'Pretend you\'re a bird and eat cereal off the floor using only your mouth.',
'Who\'s the most surprising person to have ever slid into your DMs?',
  ]
  
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/Y7SX2f7/DARE-PLUGIN-READY.jpg' }, caption: `${pickRandom(dare)}`, footer: capt }, { quoted: m })
}

handler.command = /^dare?$/i


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

