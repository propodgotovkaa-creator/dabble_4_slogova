const assert = require('node:assert/strict');
const {create,validate}=require('./rounds.js');
for(let n=0;n<10000;n++)assert.equal(validate(create()),true);
assert.notDeepEqual(create(),create());
console.log('10 000 игр: 8 раундов, 5 картинок в круге, одно совпадение, 8 разных ответов, все 14 предметов. OK');
