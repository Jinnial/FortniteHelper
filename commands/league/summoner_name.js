const dotenv = require('dotenv').config();
var http = require('http');
const request = require('request');

//League API
var lol = require('node-of-legends');
lol.setConfig({
    region: lol.REGION.NORTH_AMERICA,
    apikey: 'RGAPI-ab5befbc-caf7-4675-b526-437f942d3ade'
});

//MUST HAVE
exports.run = (client, msg, args) => {
    if(args[2] == null)
        args[2] = "I AFK 4 Butts"
    //Grab User ID
    request(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${args[2]}?api_key=RGAPI-ab5befbc-caf7-4675-b526-437f942d3ade`, { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
        msg.reply(body.name);
    });
}