const express = require('express')
const app     = express();

const http = require('http');

const  socket = require('socket.io');

const server = http.createServer(app)

const io      = require('socket.io')(server)


app.set('views', 'views')

app.use(express.static('views'))


app.get('/', (req, res) => {
    return res.render('index.html')
})

io.on('connection', socket => {
    
    socket.on('send-message', data=> {
       console.log(socket.broadcast.emit('send-message', data))
    })

})

// io.on('connection', socket => {
    
//     socket.on('send-message', data=> {
//         // socket.emit('send-message', data)
//         io.sockets.emit('send-message', data)
//         // socket.broadcast.emit('send-message', data)
//     })

// })





server.listen('5000')