const express = require("express");
const server = express();
const Publication = require('./lib/data.json')

server.get('/DevBlog', (req, res) => {
        return res.json(Publication)
    }
)

server.listen(
    3000, ()=>{
        console.log("ele vive");
    }
)