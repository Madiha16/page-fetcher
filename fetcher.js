//to use fs.write
const fs = require('fs');
//to read (the request?
const request = require('request');

//get input
const input = process.argv.slice(2);

//request input[0] which is the url
//nest fs.write into the request to write file AFTER (it has been read?
//console.log body.length for byte size to input[1] (local file path)
//did not have to save a  index.html file, will be created automatically once this is ran
request(input[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(input[1], body, err => {

    if (err) {
      console.error(err);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${input[1]}`);
  });
});