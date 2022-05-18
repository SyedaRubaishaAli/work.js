 marks = [10, 20,  123,    431,  3243 , "aqsa", true, 40, 87, 678768]
      //  0   1     2      3    4         5     6      7   8   9

//  index = 0
//  index = index + 1 => index++

// For Loop
// for (i = 0; i < marks.length; i++) {
//     console.log(marks [i] );   
// }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// forEach Loop
// marks.forEach((item) => {
//     console.log(item);
// });

// marks.forEach((item, i)=> {
//     if (i < 5){
//         console.log(item);
//     }
//     console.log("i" + i);
// });

// OBJECT
student = {
//  key     values
    name : "Syeda",
    course : "Blockchain",
    Section : "A",
    result : marks,
    data : [10, 20, "aqsa", true, 40]
}

// FOR IN LOOP
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(element);
    }
}
