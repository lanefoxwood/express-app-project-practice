const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST')
//     res.send('<h1>this is my webpage!</h1>')
// })

app.get('/', (req,res) => {
    res.send('<h1>this is my homepage!</h1>')
})

app.get('/r/:subreddit', (req,res) => {
    const { subreddit } =  req.params;
    res.send(`<h1>you are now browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postID', (req,res) => {
    const { subreddit, postID } =  req.params;
    res.send(`<h1>you are now viewing postID: ${postID} on the ${subreddit} subreddit</h1>`);
})

app.post('/cats', (req,res) => {
    res.send("this is a post request to /cats")
})

app.get('/cats', (req,res) => {
    res.send('meow!')
})
app.get('/dogs', (req,res) => {
    res.send('woof!')
})

// /r/SOMETHINGHERE

//cats => "meow"
//dogs => "woof"
// '/' => "welceome to home page"

app.get('/search',(req,res) => {
    // console.log(req.query); // req object makes a query object... assume its q
    const { q } = req.query;
    if(!q) {
        res.send(`nothing found if nothing searched!`)
    }
    res.send(`<h1>search results for: ${q}</h1>`)
})

app.get('*',(req,res) => {
    res.send(`I dont know that path!`)
})



app.listen(8080, () => {
console.log('LISTENING ON PORT 8080')
})