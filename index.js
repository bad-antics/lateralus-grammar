'use strict';

const path = require('path');
const fs   = require('fs');

const GRAMMARS_DIR = path.join(__dirname, 'grammars');

function loadGrammar(name) {
  return JSON.parse(fs.readFileSync(path.join(GRAMMARS_DIR, name), 'utf8'));
}

module.exports = {
  get lateralus()        { return loadGrammar('lateralus.tmLanguage.json'); },
  get lateralusAsm()     { return loadGrammar('lateralus-asm.tmLanguage.json'); },
  get lateralusCfg()     { return loadGrammar('lateralus-cfg.tmLanguage.json'); },
  get lateralusMarkup()  { return loadGrammar('lateralus-markup.tmLanguage.json'); },
  get lateralusNotebook(){ return loadGrammar('lateralus-notebook.tmLanguage.json'); },
  grammarsDir: GRAMMARS_DIR,
  list() {
    return fs.readdirSync(GRAMMARS_DIR).filter(f => f.endsWith('.tmLanguage.json'));
  },
};
