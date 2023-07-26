/*1.ders 

const fs = require("fs");

fs.writeFileSync("notes.txt","abdulhalim acar");

fs.appendFileSync("notes.txt"," hi..."); //eskisinin üzerine yazar

*/

/*2.not 
const name = require("./utils");

console.log(name);
*/

/*3.not  

const add = require("./utils");

console.log(add(4,-2));


*/

/*
const fs require ile ad verdik
fs.writefilesync ile içine yazdık
node app.js komutunu terminale yaz
*/

/*
app.js 1.olarak oluşturuldu 
utils.js 2.olarak oluşturuldu
notes.js 3.olarak oluşturuldu
*/

const fs = require("fs");

fs.writeFileSync("notes2.txt", "that file was not created for nothing");

const getNotes = require("./notes");
const msg = getNotes();
console.log(msg);
