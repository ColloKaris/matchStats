"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_js_1 = require("./MatchReader.js");
const CsvFileReader_js_1 = require("./CsvFileReader.js");
const Summary_js_1 = require("./Summary.js");
// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader_js_1.CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader_js_1.MatchReader(csvFileReader);
matchReader.load();
//const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary = Summary_js_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
