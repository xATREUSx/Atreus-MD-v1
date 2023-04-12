import fetch from 'node-fetch'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
 let capt = `*${htki} Truth ${htka}*
 oK!you are ready this is your question.

        "Made by Ali"
        '+923142913200'
 `

	let truth = [
'What is your biggest fear?',
'What is the most embarrassing thing you have ever done?',
'What\'s a secret you\'ve never told anyone?',
'What is your biggest fantasy?',
'When was the last time you cried?',
'What is the biggest lie you\'ve ever told?',
'What is the most embarrassing photo of you?',
 'What is a weird food that you love?',
 'What terrible movie or show is your guilty pleasure?',
 'What was your biggest childhood fear?,',
 'What is the first letter of your crush’s name?',
 'What is the worst grade you received for a class in school/college?',
 'What is the biggest lie you\'ve ever told?',
 'Have you ever accidentally hit something (or someone!) with your car?',
 'Have you ever broken an expensive item?',
 'What is one thing you\'d change about your appearance if you could?',
 'If you suddenly had a million dollars, how would you spend it?',
 'Who is the best teacher you\'ve ever had and why?',
 'What is the worst food you\'ve ever tasted?',
 'What is the weirdest way you\'ve met someone you now consider a close friend?',
'What is the most embarrassing thing you\'ve posted on social media?',
'Who was your first celebrity crush?',
'Have you ever revealed a friend\'s secret to someone else?',
'How many kids do you want to have one day (or how many did you want to have growing up)?',
'If you could only eat one meal for the rest of your life, what would it be?',
'What is a secret you had as a child that you never told your parents?',
'What is your favorite book of all time?',
'What is the last text message you sent your best friend?',
'What is something you would do if you knew there were no consequences?',
'What is the worst physical pain you\'ve ever been in?',
'Personality-wise, are you more like your mom or your dad?',
'When is the last time you apologized (and what did you do)?',
'Have you ever reported someone for doing something wrong (either to the police or at work/school)?',
'If your house caught on fire and you could only save three things (besides people), what would they be?',
'If you could pick one other player to take with you to a deserted island, who would it be?',
'What sport or hobby do you wish you would’ve picked up as a child?',
'Have you ever stolen anything?',
'What\'s the weirdest dream you\'ve ever had?',
'If you could travel to any year in a time machine, what year would you choose and why?',
'If you could change one thing about yourself, what would it be?',
'What\'s one of the most fun childhood memories you have?',
 'What song was or do you want to be the your first dance at your wedding?',
'What song would make the best theme music for you?',
'What is the most irrational superstition you have?',
'What is the weirdest food combination you enjoy?',
'What is the stupidest thing you ever did on a dare?',
]
							 
let msg = await conn.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/7QkfZy3/truth-ok.jpg' }, caption: `${pickRandom(truth)}`, footer: capt }, { quoted: m })
}

handler.command = /^truth?$/i


export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// <a href="https://ibb.co/zhgFsPh"><img src="https://i.ibb.co/Y7SX2f7/DARE-PLUGIN-READY.jpg" alt="DARE-PLUGIN-READY" border="0"></a>
// <a href="https://ibb.co/xYFkB5n"><img src="https://i.ibb.co/7QkfZy3/truth-ok.jpg" alt="truth-ok" border="0"></a>