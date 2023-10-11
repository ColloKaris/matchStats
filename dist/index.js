"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_js_1 = require("./MatchReader.js");
const MatchResult_js_1 = require("./MatchResult.js");
const CsvFileReader_js_1 = require("./CsvFileReader.js");
// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader_js_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader_js_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_js_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_js_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
