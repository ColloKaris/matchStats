"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_js_1 = require("./MatchReader.js");
const MatchResult_js_1 = require("./MatchResult.js");
const reader = new MatchReader_js_1.MatchReader('football.csv');
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
