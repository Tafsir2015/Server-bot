const express = require('express');
const mineflayer = require('mineflayer');
const cors = require('cors');

const app = express();
app.use(cors());


const PORT = process.env.PORT || 3000; 

app.get('/start-bot', (req, res) => {
    const bot = mineflayer.createBot({
        host: 't-survivalmc.aternos.me',
        port: 46894,
        username: 'HopWeb_Bot'
    });

    bot.on('spawn', () => {
        res.send('Bot Joined The Game');
    });

    bot.on('error', (err) => {
        res.status(500).send('Failed To Join');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

