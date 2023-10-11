import { MatchReader } from './MatchReader.js';
import { MatchResult } from './MatchResult.js';

const reader = new MatchReader('football.csv');
reader.read();



let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man united won ${manUnitedWins} games`)

