const path = require('path');
const fs = require('fs');// import fs from 'fs';

let chirpPath = path.join(__dirname, "../chirps/chirps.json");

let chirpArray = [
    {
        author: "Hanna",
        chirp: "January is the first month",
    },
    {
        author: "Lily",
        chirp: "Febuary is the second month",
    },
    {
        author: "Helen",
        chirp: "March is the third month",
    },
    {
        author: "Martha",
        chirp: "April is the fourth month",
    },
    {
        author: "Fanu",
        chirp: "May is the fifth month",
    },
    {
        author: "Hiwi",
        chirp: "June is the sixth month",
    },
];

fs.writeFile(chirpPath, JSON.stringify(chirpArray, null, 2), (err) => {
    if (err) console.log(`Something happened writing file: ${err}`);

    console.log('Great Job!');
});