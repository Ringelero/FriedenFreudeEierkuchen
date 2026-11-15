const test=require('node:test');
const assert=require('node:assert/strict');
const {matches,filtered}=require('../assets/herz-learning-house.js');

test('learning search handles German spelling and English terms together',()=>{
 const text='Krallen Nägel schneiden nail clipping Straße';
 assert.equal(matches(text,'nagel schneiden'),true);
 assert.equal(matches(text,'NAIL clipping'),true);
 assert.equal(matches(text,'strasse'),true);
 assert.equal(matches(text,'ears'),false);
});
test('learning search requires all words and combines the selected category',()=>{
 const items=[{category:'pflege',search:'Ohren reinigen ears cleaning'},{category:'alltag',search:'Welpen beißen puppy biting'},{category:'pflege',search:'Krallen nails clipping'}];
 assert.deepEqual(filtered(items,'','pflege'),[true,false,true]);
 assert.deepEqual(filtered(items,'ears cleaning'),[true,false,false]);
 assert.deepEqual(filtered(items,'ears nails'),[false,false,false]);
 assert.deepEqual(filtered(items,'Welpen','pflege'),[false,false,false]);
 assert.deepEqual(filtered(items,'  '),[true,true,true]);
});
