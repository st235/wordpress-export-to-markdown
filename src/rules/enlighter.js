'use strict';

const MARKDOWN_CODE_BLOCK = '```';

const rules = {};

rules.enlighter = {
    filter: node => node.nodeName === 'PRE' && node.getAttribute('class') === 'EnlighterJSRAW',
    replacement: (_, node) => `${MARKDOWN_CODE_BLOCK}\n${node.textContent}\n${MARKDOWN_CODE_BLOCK}`
}

function enlighter(turndownService) {
    turndownService.keep(function (node) {
      return node.nodeName === 'PRE' && node.getAttribute('class') === 'EnlighterJSRAW';
    });

    for (var key in rules) turndownService.addRule(key, rules[key]);
}

module.exports = enlighter;
