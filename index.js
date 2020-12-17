var readlineSync = require('readline-sync')
const gradient = require('gradient-string')
const chalk = require('chalk');
const date = require('date-and-time')

console.log(chalk.hex("A10000").bold.bgHex("#ffffff")("==================================================================="))

let marvel = gradient('red', 'pink', 'red').multiline([
    "   ___    ___      ___      ______  ____    ____ ______   __",
    "  |   ∖  /   |    /   ∖    |   _  ∖ ∖   ∖  /   /|   ___| |  |",
    "  |    ∖/    |   /  .  ∖   |  |_)  | ∖   ∖/   / |  |___  |  |",
    "  |  .    .  |  /  /_∖  ∖  |   _   /  ∖  ..  /  |   ___| |  |",
    "  |  |∖  /|  | /  .___.  ∖ |  | |  ∖   ∖    /   |  |___  |  |___",
    "  |__| ∖/ |__|/__/     ∖__∖|__| |___∖   ∖__/    |______| |______|",
].join('\n'))

console.log(marvel)
console.log(chalk.hex("A10000").bold())
console.log(chalk.hex("A10000").bold.bold.bgHex("#ffffff")("==================================================================="))
console.log(chalk.bgHex('#6E0D0D').hex('#ffffff').bold("\nWelcome to The Marvel Quiz 😁"))
var userName = readlineSync.question("Before we start, what was your name again? -> ")
console.log(chalk.hex("A10000").bold("\n==================================================================="))
console.log(chalk.bgHex('#8E3E45').hex('#ffffff')("                                                                   "))
console.log(chalk.bgHex('#8E3E45').hex('#ffffff').bold("⬜  Alrighty, Let's see how well do you know MCU 📝🔥                 "))
console.log(chalk.bgHex('#8E3E45').hex('#ffffff')("                                                                   "))
console.log(chalk.hex("A10000").bold("==================================================================="))

var temp = readlineSync.question("\nPress Enter to Continue...👆  ")

console.log(chalk.hex("#ffffff").bgHex("#6E0D0D").underline.bold("\nFlow of the quiz:                                                  "))
console.log(chalk.hex("#ffffff").bgHex("#8E3E45").bold("\nThere are 3 levels consisting of 5 🖐 questions each                  "))
console.log("⬜",chalk.bgHex("#355C7D")("LEVEL-1:"),"\n   ◽ Difficulty: Easy Peazy\n   ◽ Right answer: +200 points\n   ◽ Wrong answer: +/-0 point")
console.log("⬜",chalk.bgHex("#355C7D")("LEVEL-2:"),"\n   ◽ Difficulty: Only for a fan\n   ◽ Right answer: +200 points\n   ◽ Wrong answer: -100 point")
console.log("⬜",chalk.bgHex("#355C7D")("LEVEL-3:"),"\n   ◽ Difficulty: This is the test of a true fan\n   ◽ Right answer: +400 points\n   ◽ Wrong answer: -200 points")

var highScores = [
  {
    name: "   🥇  Parth himself",
    points: 3500
  },
  {
    name: "   🥈  Someone",
    points: 2500
  },
  {
    name: "   🥉  Someone else",
    points: 2000
  }
]

console.log(chalk.hex("A10000").bold.bgHex("#ffffff")(("\n===================================================================")))

var temp = readlineSync.question("\nPress Enter to Continue...👆  ")

console.log(chalk.hex("#ffffff").bold.bgHex("#8E3E45")("\n⬜  Here are the High scores, let's see if you can beat them 🏁      "))
for (var i=0; i<highScores.length; i++)
{
 console.log(highScores[i].name,":=>",highScores[i].points)
}
console.log(chalk.hex("A10000").bold.bgHex("#ffffff")(("\n===================================================================")))

console.log(chalk.hex("#ffffff").bold.bgHex("#8E3E45")("\n⬜  You'll only get one chance, make it count ⚠                     "))
var temp = readlineSync.question(chalk.hex("#ffffff").bold.bgHex("#8E3E45")("⬜  Press enter to start the Ultimate Marvel Quiz...👆              "))

const before = new Date()

var questions = [{
  question: ` 1) Which movie kickstarted the MCU journey? 
  (A) The Incredible Hulk
  (B) Captain America: The First Avenger
  (C) Iron Man
  (D) Thor

  Enter Your Answer => `,
  answer: "c",
  srNo:1,
},{
  question: ` 2) What is the Iron-Man suit actually made up of? 
  (A) Steel-Platinum alloy
  (B) Gold-Titanium alloy
  (C) Platinum-Silver alloy
  (D) Adamantium

  Enter Your Answer => `,
  answer: "b",
  srNo:2,
},{
  question: ` 3) What is the Name of the main villain in The Incredible Hulk? 
  (A) Abomination
  (B) General Ross
  (C) Colonel Rhodes
  (D) Doomsday 

  Enter Your Answer => `,
  answer: "a",
  srNo:3,
},{
  question: ` 4) What is Pepper Potts allergic to?
  (A) Roses
  (B) Strawberries
  (C) Tulips
  (D) Tea 

  Enter Your Answer => `,
  answer: "b",
  srNo:4,
},{
  question: ` 5) Initial fight sequence of Captain America: Civil War takes place in... 
  (A) Siberia
  (B) Lagos
  (C) Sokovia
  (D) Vienna 

  Enter Your Answer => `,
  answer: "b",
  srNo:5,
},{
  question: ` 6) When was the Tessarect first introduced on screen? 
  (A) Captain America: The First Avenger
  (B) Iron Man
  (C) Captain Marvel
  (D) Thor 

  Enter Your Answer => `,
  answer: "d",
  srNo:6,
},{
  question: ` 7) Who made the first super soldier serum?
  (A) Dr Reed Richards
  (B) Dr Xander Rice
  (C) Major William Stryker
  (D) Dr Abraham Erskine 

  Enter Your Answer => `,
  answer: "d",
  srNo:7,
},{
  question: ` 8) Which movie does Hawkeye make his debut in? 
  (A) Captain America: The First Avenger
  (B) Iron Man
  (C) The Avengers
  (D) Thor 

  Enter Your Answer => `,
  answer: "d",
  srNo:8,
},{
  question: ` 9) Which terrorist organisation kidnaps Tony Stark in Iron Man? 
  (A) The Manderin
  (B) ISIS
  (C) The Ten Rings
  (D) Al-qaida

  Enter Your Answer => `,
  answer: "c",
  srNo:9,
},{
  question: ` 10) Which of the following is not a Marvel Agent? 
  (A) Agent Rumlow
  (B) Agent Sitwell
  (C) Agent Romanoff
  (D) Agent Pierce 

  Enter Your Answer => `,
  answer: "d",
  srNo:10,
},{
  question: ` 11) Natasha is the daughter of...? 
  (A) Igor
  (B) Evan
  (C) Alar
  (D) Ivan 

  Enter Your Answer => `,
  answer: "d",
  srNo:11,
},{
  question: ` 12) Which major character is the first to die in Avengers: Infinity War? 
  (A) Heimdal
  (B) Korg
  (C) Loki
  (D) Valkyrie 

  Enter Your Answer => `,
  answer: "c",
  srNo:12,
},{
  question: ` 13) How many Infinity Stones does Thanos have when he arrives on Titan?
  (A) 4
  (B) 3
  (C) 5
  (D) 2

  Enter Your Answer => `,
  answer: "a",
  srNo:13,
},{
  question: ` 14) Which of the following is not Tony Stark's personal AI? 
  (A) Lyla
  (B) Edith
  (C) Joshua
  (D) Takeshi 

  Enter Your Answer => `,
  answer: "a",
  srNo:14,
},{
  question: ` 15) T'challa asks to open this section of the barrier in Avengers: Infinity War?  
  (A) north east section-17
  (B) south east section-18
  (C) south west section-18
  (D) north west section-17

  Enter Your Answer => `,
  answer: "d",
  srNo:15,
}]

var score = 0
var cnt = 0

function playGame(question,answer)
{
  if(questions[i].srNo<6)
  {
    console.log(chalk.bgHex("#ffffff").hex("#262626").bold("\n\nLEVEL 1 ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻"))
    var userAnswer = readlineSync.question(question)
    
    if (userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log(chalk.hex("#0FBF55").bold("---------------------- 😁  !! Correct !! 😁  ------------------------"))
      console.log(chalk.hex("#0FBF55").bgHex("#0FBF55")("                                                                   "))
      score = score + 200
      cnt++
    }
    else 
    {
      console.log(chalk.hex("#FF4343").bold("----------------------- ☹  !! Wrong !! ☹  -------------------------"))
      console.log(chalk.hex("#FF4343").bgHex("#FF4343")("                                                                   "))
    }
  }
  else if(questions[i].srNo<11)
  {
    console.log(chalk.bgHex("#ffffff").hex("#262626").bold("\n\nLEVEL 2 ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻"))
    var userAnswer = readlineSync.question(question)

    if (userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log(chalk.hex("#0FBF55").bold("---------------------- 😁  !! Correct !! 😁  ------------------------"))
      console.log(chalk.hex("#0FBF55").bgHex("#0FBF55")("                                                                   "))
      score = score + 200
      cnt++
    }
    else 
    {
      console.log(chalk.hex("#FF4343").bold("------------------------- ☹  !! Wrong !! ☹  -----------------------"))
      console.log(chalk.hex("#FF4343").bgHex("#FF4343")("                                                                   "))
      score = score - 100
    }
  }
  else if(questions[i].srNo>10)
  {
    console.log(chalk.bgHex("#ffffff").hex("#262626").bold("\n\nLEVEL 3 ◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻"))
    var userAnswer = readlineSync.question(question)

    if (userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log(chalk.hex("#0FBF55").bold("---------------------- 😁  !! Correct !! 😁  ------------------------"))
      console.log(chalk.hex("#0FBF55").bgHex("#0FBF55")("                                                                   "))
      score = score + 400
      cnt++
    }
    else 
    {
      console.log(chalk.hex("#FF4343").bold("------------------------- ☹  !! Wrong !! ☹  -----------------------"))
      console.log(chalk.hex("#FF4343").bgHex("#FF4343")("                                                                   "))
      score = score - 200
    }
  }
  console.log("                   |                           |")
  console.log("                   |  📝  Current score =",("000" + score).slice(-4)," |")
  console.log("                   |___________________________|")
  // console.log("\n◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻\n")
}


for (var i=0; i<questions.length; i++)
{
  if(i===5)
  {
    console.log(chalk.hex("A10000").bold.bgHex("#ffffff")("\n\n======================= Level 1 Completed ========================="))
    console.log("          |______________________________________________|")
    console.log("          |         🔘  Summary after Level 1 🔘           |")
    console.log("          |----------------------------------------------|")
    console.log("          |          Your Score => ",("000" + score).slice(-4),"/ 1000          |")
    console.log("          |         Correct Answers => ",("00" + cnt).slice(-2),"/ 05          |")
    console.log("          |______________________________________________|")

    var temp = readlineSync.question("\nPress enter to start Level 2...👆  ")
  }
  else if(i===10)
  {
    console.log(chalk.hex("A10000").bold.bgHex("#ffffff")("\n\n======================= Level 2 Completed ========================="))
    console.log("          |______________________________________________|")
    console.log("          |         🔘  Summary after Level 2 🔘           |")
    console.log("          |----------------------------------------------|")
    console.log("          |          Your Score => ",("000" + score).slice(-4),"/ 2000          |")
    console.log("          |         Correct Answers => ",("00" + cnt).slice(-2),"/ 10          |")
    console.log("          |______________________________________________|")
    var temp = readlineSync.question("\nPress enter to start Level 3...👆  ")
  }
  playGame(questions[i].question, questions[i].answer)
}

const after = new Date();
var timeTaken = (date.subtract(after, before).toSeconds())

console.log("\n\n◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻")

console.log("           _______________________________________________")
console.log("          |              🔴  Final Summary 🔴               |")
console.log("          |-----------------------------------------------|")
console.log("          |       📝  Your Score is => ",("000" + score).slice(-4),"/ 4000        |")
console.log("          |        ✅  Correct Answers => ",("000" + cnt).slice(-2),"/ 15         |")
console.log("          |        ⌛ Time taken => ",timeTaken.toFixed(3),"seconds       |")
console.log("          |_______________________________________________|")


var tempo = 0
console.log("\n\n◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻")
console.log(chalk.hex("#ffffff").bold.bgHex("#8E3E45")("\n⬜  Let's see the Leaderboard again, shall we? 🏁                     "))
for (var i=0; i < highScores.length; i++)
{
  if(score < highScores[i].points)
  {
    console.log(highScores[i].name,":=>",highScores[i].points)
  }  
  else
  {
    console.log("    ▶",userName,":=>",score)
    tempo = 1
    {break;}
  }
}
if(tempo==1)
{
  while(i < highScores.length)
  {
    console.log(highScores[i].name,":=>",highScores[i].points)
    i = i + 1
  }
}
console.log("\n◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻\n")

let tyMsg = gradient.rainbow.multiline([
    "                ▀█▀ █▄█ █▀█ █▄ █ █▄▀　█▄█ █▀█ █ █",
    "                 █  █▀█ █▀█ █ ▀█ █▀▄　 █  █▄█ █▄█",
].join('\n'))

for (var i=0; i<highScores.length; i++)
{
  if (score >= highScores[i].points)
  {
    console.log(chalk.bgHex('#8E3E45').hex('#ffffff')("                                                                   "))
    console.log(chalk.bgHex('#8E3E45').hex('#ffffff').bold("⬜  Congratulations!🎉  Looks like you made a new High Score ✨       \n⬜  Send me a screeshot, so I can update the database 😃             "))
    console.log(chalk.bgHex('#8E3E45').hex('#ffffff')("                                                                   "))
    { break; }
  }
  else if (score < highScores[highScores.length - 1].points)
  {
    console.log(chalk.bgHex('#8E3E45').hex('#ffffff').bold("⬜  Seems like you're a NOOB 😂                                       \n⬜  Anyway, thanks for playing 😁                                     "))
    {break;}
  }
}
console.log("\n◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻◻\n")
console.log(tyMsg)



// 💰⏱😟😁😃
// console.log(chalk.bgHex('#8E3E45').hex('#ffffff').bold("⬜  Click her for your REWARD 💰🤑 :      "))


