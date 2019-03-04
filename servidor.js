const path = require('path') //#
var express = require('express')
var LCD = require('lcdi2c');
var lcd = new LCD( 1, 0x27, 20, 4);
var aplicacion = express()
const os = require('os');
const net = require('net');
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} = require('string_decoder')
const decoder = new  StringDecoder('utf8')
var interface = os.networkInterfaces();
var ipDinamic;
for(var k in interface){
    for(var k2 in interface[k]){
        var address = interface[k][k2]
        if(address.family == 'IPv4' && !address.internal ){
            ipDinamic = address.address.toString();
            console.log(ipDinamic);
        }
    }
}

aplicacion.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });

var HOST = ipDinamic;
var PORT = server.listen(process.env.PORT || 4000);

console.log(path.join(__dirname,'public','index.html'))

var ser = socket.on('connection',function(so){

    so.on('datos', function (data) {
        console.log(data);        
        lcd.clear();
        lcd.print('data');
      });

})