var express = require('express')
var aplication = express();

const net=require('net')
const server = require('http').Server(aplication)
const socket = require('socket.io')(server)
    const {StringDecoder} = require('string_decoder')
    const decoder = new StringDecoder('utf8')

var HOST = ""
var PORT = 4000


server.listen(PORT,function(){
    console.log('Servidor Activo ' + HOST + ':' + PORT)
})

var ser = net.createServer(function(so){

HOST=ser.address().address();


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

ser.listen(PORT,HOST)