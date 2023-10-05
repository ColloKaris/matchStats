"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_js_1 = require("./CsvFileReader.js");
const MatchResult_js_1 = require("./MatchResult.js");
const reader = new CsvFileReader_js_1.CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_js_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_js_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
