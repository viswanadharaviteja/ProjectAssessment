var request = require('sync-request');
var fs = require('fs');
var xml= fs.readFileSync('thirdQue.xml','utf8');
var options = {
    headers: {
        "content-type": 'application/xml'
    } ,
    body: xml
};

var res = request('POST', 'https://example.com', options);
var output = res.getBody('utf8');
console.log(output);

if (res.statusCode === 200) {
    console.log("Status code is "+res.statusCode+ " ==> Hence, Status code Validation success...");
}





