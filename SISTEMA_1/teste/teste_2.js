var fs = require("fs");
var data = fs.readFileSync('input.txt');


console.log(data.toString());
console.log("Program ended");
console.log("the program blocks until it reads the file and then only it proceeds to end the program.");


var fs2 = require("fs");

fs2.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
	console.log("The second example shows that the program does not wait for file reading and proceeds to print Program Ended and at the same time, the program without blocking continues reading the file.")});

console.log("Program Ended");

console.log("Thus, a blocking program executes very much in sequence. From the programming point of view, it is easier to implement the logic but non-blocking programs do not execute in sequence. In case a program needs to use any data to be processed, it should be kept within the same block to make it sequential execution.");



