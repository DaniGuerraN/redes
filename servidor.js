var express = require('express')
var aplication = express();

const net=require('net')
const server = require('http').Server(aplication)
const socket = require('socket.io')(server)
    const {StringDecoder} = require('string_decoder')
    const decoder = new StringDecoder('utf8')

var HOST = "192.168.43.150"
var PORT = 4000

var PORT2 =process.env.PORT || 4000


server.listen(PORT2,function(){
    console.log('Servidor Activo')
})

var ser = net.createServer(function(so){

    
    so.on('connect',function(){

        console.log('Nuevo Usuario ' + so.remoteAddress + ':' + so.remotePort)
        
    })

    so.on('data',function(data){
        var cent = data

        so.write("servidor 1");
    })

    so.on('close',function(){
        console.log('usuario desconectado')
    })
})

