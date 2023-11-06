const { Client, Intents } = require('discord.js-selfbot-v13');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const client = new Client({
    checkUpdates: false,
});

const wordlist = [
    "Dobrý den! Jsem automatický bot a právě jsem přijal vaši zprávu. Postarám se o ni co nejdříve.",
    "Tato zpráva byla přijata automatickým botem. Vaše dotazy budou brzy zodpovězeny.",
    "Zdravím! Toto je automatická odpověď. Vaše zprávy budou přečteny a zpracovány.",
    "Automatický bot tady. Zprávu mám, brzy se jí budu věnovat.",
    "Vaše zpráva byla přijata automatickým botem. Prosím, buďte trpěliví.",
    "Jsem program, který vám zprávy zpracovává. Na vaši otázku brzy odpovím.",
    "Automatický bot je zde. Zajistím, že se vaše zprávy dostanou ke správné osobě.",
    "Dobrý den! Toto je automatická odpověď. Vaše zpráva je na řadě.",
    "Přijetí zprávy potvrzeno. Automatický bot je na řadě pro odpověď.",
    "Toto je automatický bot, který zpracovává vaše zprávy. Na řadě je ta vaše.",
    "Vaše zpráva byla zaznamenána automatickým botem. Brzy se jí budeme věnovat.",
    "Automatický bot zde! Vaše zpráva bude zpracována co nejdříve.",
    "Dobrý den! Toto je automatická odpověď. Vaše zprávy jsou na seznamu k zodpovězení.",
    "Zprávu přijal automatický bot. Zpracování proběhne brzy.",
    "Automatický bot má vaši zprávu. Nyní bude věnovat pozornost vašim otázkám.",
    "Jsem bot a vaše zprávy budou brzy zpracovány. Děkujeme za trpělivost.",
    "Toto je automatická odpověď. Vaše zpráva je v řadě k vyřízení.",
    "Přijal jsem vaši zprávu. Zpracování bude dokončeno co nejdříve.",
    "Automatický bot zaznamenal vaši zprávu. Odpověď bude brzy připravena.",
    "Dobrý den! Jsem bot a vaše zprávy budou brzy zpracovány.",
    "Toto je automatická odpověď. Na vaši zprávu se brzy dostaneme.",
    "Zprávu přijal automatický bot. Postaráme se o ni co nejdříve.",
    "Automatický bot tady. Vaše zpráva je v procesu zpracování.",
    "Vaše zpráva byla přijata automatickým botem. Prosím, buďte trpěliví.",
    "Jsem program, který zpracovává zprávy. Odpovím co nejdříve."
  ];

  const mentionCooldown = new Map();
  
  rl.question("Enter your Discord token: ", (token) => {
    rl.close();
    client.login(token);
  
    client.on('ready', async () => {
      console.log("Ready");
    });
  
    client.on('messageCreate', async (message) => {
      if (message.author.bot) return;
  
      if (message.mentions.has(client.user)) {
        const authorId = message.author.id;
  
        if (!mentionCooldown.has(authorId) || mentionCooldown.get(authorId) < Date.now() - 30000) {
          if (!message.mentions.everyone) {
            const randomMessage = wordlist[Math.floor(Math.random() * wordlist.length)];
            message.reply(randomMessage);
  
            mentionCooldown.set(authorId, Date.now());
          }
        }
      }
    });
  });