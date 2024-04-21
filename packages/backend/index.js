'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => { res.send('Backend running') })

const server = app.listen(process.env.PORT, () => { console.log('Listening on port ' + process.env.PORT)})