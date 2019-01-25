var express = require('express')
var aplication = express();

const net=require('net')
const server = require('http').Server(aplication)
const socket = require('socket.io')(server)
    const {StringDecoder} = require('string_decoder')
    const decoder = new StringDecoder('utf8')

var HOST = "redes-tarea-servidor.herokuapp.com"
var PORT = 4000


aplication.get("/",function(req,res){
    res.send("Servidor activo");
})

server.listen(PORT,function(){
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

ser.listen(PORT,HOST)