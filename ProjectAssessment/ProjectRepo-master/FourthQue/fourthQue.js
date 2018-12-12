var assert = require(‘assert’);
var request = require('sync-request');
var options = {};
var res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1', options);
var output = res.getBody('utf8');
var jsonContent = JSON.parse(output);
console.log(output);
console.log(jsonContent.userId);

assert.equal(1, jsonContent.userId);
console.log("User ID value is "+jsonContent.userId+" ==> Hence, Validation success...");

assert.equal(200, res.statusCode);
console.log("Status code is "+res.statusCode+ " ==> Hence, Status code Validation success...");




