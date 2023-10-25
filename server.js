const net = require('net');

const connection = net.createServer((socket) => {
    console.log('Client connected.');

    socket.on('data', (data) => {
        const fileName = data.toString().trim();
        console.log(`Requested file: ${fileName}`);

        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                socket.write('File not found.');
            } else {
                socket.write(data);
            }
            socket.end();
        });
    })

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
})

const PORT = 3000;
const HOST = '127.0.0.1';

connection.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});