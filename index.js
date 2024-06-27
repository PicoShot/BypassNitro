const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Your bot token
const token = 'YOUR_BOT_TOKEN';

// Path to your GIF files
const profilePicPath = path.join(__dirname, 'example-pp.gif');
const bannerPath = path.join(__dirname, 'example-banner.gif');

// Login to Discord with your app's token
client.login(token);

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        // Update profile picture
        await client.user.setAvatar(profilePicPath);
        console.log('Profile picture updated successfully!');

        // Update banner
        await client.user.setBanner(bannerPath);
        console.log('Banner updated successfully!');
    } catch (error) {
        console.error('Error updating profile picture or banner:', error);
    }

    // Log out after updating
    client.destroy();
});
