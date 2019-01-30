var express = require('express')
var aplication = express();
var os = require('os')

var interface = os.networkInterfaces();

var ipDinamic 
for(var k in interface){
    for(var k2 in interface[k]){
        var address = interface[k][k2]
        if(address.family == 'IPv4' && !address.internal){
            ipDinamic = address.address.toString();
            console.log(ipDinamic);
        }
    }
}

const net=require('net')
const server = require('http').Server(aplication)
const socket = require('socket.io')(server)
    const {StringDecoder} = require('string_decoder')
    const decoder = new StringDecoder('utf8')

var HOST = ipDinamic
var PORT = process.env.PORT || 5000
var PORT2 = 80



var ser = net.createServer(function(so){

    
    so.on('connect',function(){

        console.log('Nuevo Usuario ' + so.remoteAddress + ':' + so.remotePort)
        
    })

    so.on('data',function(data){
        var cent = data

        
        so.write("servidor 1");
        console.log(decoder.write(cent))
    })

    so.on('close',function(){
        console.log('usuario desconectado')
    })
})

ser.listen(PORT2,HOST)