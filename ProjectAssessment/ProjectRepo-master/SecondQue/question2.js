'use strict';

const fs = require('fs');

let company ;
module.exports.fileName =‘company.json';
module.exports.nodeValueToChange = ‘Wipro Ltd’;
module.exports.newJsonFileName = 'modifiedCompany.json';
module.exports.result = '';

exports.modifyXMLData = function(callback) {
    fs.readFile(module.exports.fileName, (err, data) => {  
        if (err) {
        throw (err);
        module.exports.result = 'false';
        callback(err); return ;
      }
        company = JSON.parse(data);
        company.name = module.exports.nodeValueToChange ;
        console.log('reading file '+module.exports.fileName);  
        let data1 = JSON.stringify(company);  
        fs.writeFile(module.exports.newJsonFileName, data1, (err) => {  
            if (err) 
                module.exports.result = 'false';
                callback(false);
            console.log('Data written to file');
            console.log('This is after the write call');  

        });
        module.exports.result = 'true';
    callback(true);
    });
    
}
