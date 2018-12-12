
var fs = require('fs'), parseString = require('xml2js').parseString, xml2js = require('xml2js');


let sample;
module.exports.fileName ='test.xml';
module.exports.nodeValueToChange = 'Wipro.com';
module.exports.newXMLFileName = 'modifiedXMLFile.xml';
module.exports.result = '';

exports.modifyXMLData = function(callback) {
console.log('starting');
   fs.readFile(module.exports.fileName, 'utf-8', function (err, data){
    if (err) {
        throw (err);
        module.exports.result = 'false';
        callback(err);
      }
    // we log out the readFile results    
    console.log(data);
    // we then pass the data to our method here
    parseString(data, function(err, result){
        if(err) 
        console.log(err);
        console.log(result); 
        
        var json = result;
        
        json.root.graph[0].node[0].weight = module.exports.nodeValueToChange ;
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);
        
        fs.writeFile(module.exports.newXMLFileName, xml, function(err, data){
            if (err) console.log(err);
            
            console.log("successfully written our update xml to file");
        })
        module.exports.result = 'true';
        callback('true')
                  
    });
});    
    
}




