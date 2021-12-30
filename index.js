const express = require('express');
const path = require('path');
const app = express();
const redditData = require('./data.json');

// Set EJS path to ./views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if (data) {
        res.render('subreddit', { ...data });
    }
    else {
        res.render('error', {subreddit});
    }
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})