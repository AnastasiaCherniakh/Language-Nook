const express = require('express');
const app = express();

app.use(express.static('public'))

app.route("/").get(function (req, res) {
    res.sendFile(process.cwd() + "/public/views/index.html");
  });


const port = process.env.PORT || 3000
const server = app.listen(port,listening)
function listening (){
    console.log(`server running on ${port}`)
  }