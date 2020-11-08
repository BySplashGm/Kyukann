const { Client, Collection } = require("discord.js");
const { loadCommands, loadEvents } = require("./util/loader");
const { TOKEN } = require("./config");

const client = new Client();
client.commands = new Collection();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());

loadCommands(client);
loadEvents(client);

client.login(TOKEN);
