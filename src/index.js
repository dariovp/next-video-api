import express from 'express';
import fs from 'fs';
import path from 'path';

var app = express();

let __dirname = path.resolve();

console.log(__dirname)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/src/resources/034 Idiot Boxes.mp4');
});

app.listen(5000, () => {
	console.log(`Example app listening at http://localhost:5000`)
})