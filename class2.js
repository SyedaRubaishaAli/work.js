// Class without Method
class Blockchain{
    constructor (student= "Rubaisha", id= 27) {
    this.name = student;
    this.id = id;
    }
}

// Calling the class by making a variable
const Myid = new Blockchain()
    console.log(Myid);
    console.log(Myid.name);
    console.log(Myid.id);
    console.log("--------");


// Updating class by making new variable 
// (NOTE: we can't update constructor again with only variable)
class Me{
    constructor (name2, id2) {
        this.name = name2;
        this.id = id2;
    }
}

const Studentid = new Blockchain("Syeda",55)
     console.log(Studentid);
     console.log(Studentid.name);
     console.log(Studentid.id);


// New Variable
const Studentid1 = new Blockchain("Usman",24)
     console.log(Studentid1);
     console.log(Studentid1.name);
     console.log(Studentid1.id);
     
console.log("--------");

 //Class with method
 class BlockchainLab{
     constructor (name, occupation){
     this.name = name;
     this.field = occupation
 }

//  Method for class (Anything can be a method)
 getTeacherid(){
     console.log("The Teacher ID is");
     console.log(this.name);
     console.log(this.field);
 }
} 

// Making variable to call method
const Teacherid = new BlockchainLab("Mustafa", "Programming");
     Teacherid.getTeacherid();

console.log("--------");

// Class with method but constructor with fixed values
class BlockchainTheory{
    constructor (name1, field1){
    this.name1 = "Affan";
    this.field1 = "Software Engineering";
}

//  Method for class (Anything can be a method)
getTeacher(){
    console.log("The Teacher ID is");
    console.log(this.name1);
    console.log(this.field1);
}
} 

// Making variable to call method
const teacherID = new BlockchainTheory();
    teacherID.getTeacher();



