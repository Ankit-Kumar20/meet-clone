const express = require('express');
const http = require("http");
const path = require("path");
const socketIO = require('socket.io');

const app = express();

const server = http.createServer(app);

//app.use(express.static('public'));

const io = socketIO(server);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(3000, ()=>{
    console.log("server has been created at port 3000");
})

io.listen(3000);