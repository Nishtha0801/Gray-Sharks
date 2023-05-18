const fs = require("fs");

console.log("Before");

// Asynchronously ==================
// fs.readFile('file.txt', function(err, data){
//     if(err){
//         return console.error(err);
//     }
//     console.log("I am trying to read file asynchronously" + " " + data.toString());
// });

// console.log("After");

// Synchronouslyyy
// let data = fs.readFileSync('file.txt');
// console.log("Data read in a synchronous manner: " + data.toString());

// Create a file =================
// fs.appendFile('myFile.txt', 'Heyy, I am the new file created', function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log('New file created');
// });

// Synchronouslyy =====================

// fs.appendFileSync('mySyncFile.txt', 'Heyy, I am synchronously created');

// fs.appendFileSync('mySyncFile.txt', 'Heyy, I am the appended text');

// console.log("File created");

// fs.writeFile('file.txt', 'Heyy, I am the replaced text!', function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log("Data replaced, Saved!")
// })

// delete a file

fs.unlink('myFile.txt', function(err){
    if(err){
        console.error(err);
    }
    console.log("File deleted!");
})

