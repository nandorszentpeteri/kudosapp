// Read env variables
require("dotenv").config();

// Import database
const db = require("./database");

const { App } = require("@slack/bolt");


// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
//   socketMode: true,
});

app.command("/condor", async ({command, ack, say}) => {
    try {
        await ack()
        say("You have issued a condor")
    } catch (err) {
        console.error(err)
    }
})

app.command("/turkey", async ({command, ack, say}) => {
    try {
        await ack()
        say("You have issued a turkey")
    } catch (err) {
        console.error(err)
    }
})

// Example please remove
db.addCondor(
  { id: "user1", name: "first user" },
  {
    user: "user2",
    message: "lorem ipsum dolor sit amet",
  }
)
db.addCondor(
  { id: "user1", name: "first user" },
  {
    user: "user2",
    message: "lorem ipsum dolor sit amet second review",
  }
)

db.addTurkey(
  { id: "user1", name: "first user" },
  {
    user: "user2",
    message: "lorem ipsum dolor sit amet second review",
  }
)

console.log(db.database);

app.command('/leaderboard', async ({ command, ack, respond }) => {
  // Acknowledge command request
  await ack();

  await say(`:eagle: *Condor or Turkey LeaderBoard* :turkey:\nEfty :eagle::eagle:  \nSophie :eagle::eagle::turkey:\n Ross :eagle::turkey::turkey:`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log("⚡️ Bolt app is running!");
})();
