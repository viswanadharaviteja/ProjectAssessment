var asset = require(‘assert’);
var request = require('sync-request');
var fs = require('fs');
var json= fs.readFileSync('FifthQue.json','utf8');
var options = {
    headers: {
        "content-type": 'application/json'
    } ,
    body:json
};
console.log("You am here....");
var res = request('POST', 'https://jsonplaceholder.typicode.com/posts',options);
var output = res.getBody('utf8');
var jsonContent = JSON.parse(output);
console.log(output);
console.log(jsonContent.id);

assert.equal(200, response.statusCode);
console.log("Status code Validation success...");

assert.equal(200, parseInt(jsonContent.id));
console.log("User ID value is "+jsonContent.userId+”.Hence, Validation success...");
