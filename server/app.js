const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');

const app = express();
const http = require('http').Server(app);
http.listen(8080, "127.0.0.1");
const io = require('socket.io')(http);

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

io.on('connection', socket => {
    console.log('New client connected');
    getApiAndEmit(socket);
    setInterval(() => getApiAndEmit(socket), 5000);
    
    socket.on('disconnect', () => console.log('client disconnected'));
})

const getApiAndEmit = async socket => {
    try {
        const res = await axios.get('http://api.openweathermap.org/data/2.5/weather?id=3452925&appid=0fefd694dfe6c0d1da0b756c7e1f5cc9');
        socket.emit('FromAPI', res.data);
    } catch(error) {
        console.error(`Error: ${error.code}`);
    }
};

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;