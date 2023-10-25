const net = require('net');

const client = new net.Socket();

const PORT = 3000;
const HOST = '127.0.0.1';

client.connect(PORT, HOST, () => {
    console.log('Connected to server.');

    const fileName = 'example.txt';
    client.write(fileName);
});

client.on('data', (data) => {
    console.log('Received data: ' + data);
});

client.on('close', () => {
    console.log('Connection closed.');
});