const app = require("./app.js");
require("dotenv").config();


var PORT = process.env.port || 8080;

app.listen(
    PORT, ()=>{
        console.log(`Server listening on http://localhost:${PORT}`);
    }
)
