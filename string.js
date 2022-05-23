// Substring
// *same as slice*
note = "ham aj kya kry gy"
console.log(note.substring(0,3));

// Length
console.log(note.length);

// Trim
note2 = "   Well Come   "
console.log(note2.trim());

// Split 
// *for single space*
note3 = " Ap kya kry gy "
console.log(note3.split(" "));

// *for any value*
console.log(note3.split("k"));

// *for any character*
note4 = "Ap esy,wesy,kam mat krain"
// console.log(note4.split(","));
// *if we wanna call any index
console.log(note4.split(",")[2]);