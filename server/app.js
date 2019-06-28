const node_media_server = require('./media-server');

node_media_server.run();

const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))

app.listen(port, () => console.log(`Listening port ${port}!`))