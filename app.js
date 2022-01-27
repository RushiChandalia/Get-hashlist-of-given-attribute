const fs = require("fs");
const getMetadataFromTokenAddress = require('./getMetadataFromTokenAddress.js');
const getAndCheckJsonFromURI = require('./getAndCheckJsonFromURI.js');


//KEY and VALUE to check on Metadata
const keyToCheck = "body";
const valueToCheck = "Golden";


//Read complete hashlist of the collection
let completeHashlist = JSON.parse( 
    fs.readFileSync('./input/hashlist.json') 
);


//To store matched hashes
let withAttributeHashlist = [];


//Prepare promise
var promise = new Promise((resolve, reject) => {
    counter = 0;

    completeHashlist.forEach(token_address => {
        getMetadataFromTokenAddress(token_address).then( metadata => {
            const uri = metadata.uri;
    
            getAndCheckJsonFromURI(uri, keyToCheck, valueToCheck).then( result => {
    
                if(result){
                    withAttributeHashlist.push(token_address)
                    console.log("Found: " + metadata.name + " | Count: " + withAttributeHashlist.length);
                }
                
                counter++;
                if(counter === completeHashlist.length-1) resolve();
            });
        });  
    });
});



promise.then(() => {
    //No need to go further if no token found
    if(withAttributeHashlist.length == 0){
        throw Error("No token found with given attribute. Please double check variable names.")
    }

    //Creating/Writing output file
    fs.writeFileSync('./output/output_hashlist.json', JSON.stringify(withAttributeHashlist));

    console.log("Program completed succesfully\nOutput file: output/output_hashlist.json");
});















