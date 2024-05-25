const express = require("express");
const app = express();
var port = process.env.port || 8080

const path = require("path")
const Publication = require('./App/lib/data.json');
const { title } = require("process");

app.use(express.static(path.join(__dirname, "App")))

app.get('/', (req, res) => {
        return res.sendFile('/index.html', {root: path.join(__dirname, 'App')})
    }
)

app.get('/DevBlog', (req,res) =>{
    return res.render('DevBlog', {title:'DevBlog', menssage:"DevBlog page"})
})

app.listen(
    port, ()=>{
        console.log(`Server listening on http://localhost:${port}`);
    }
)

