// FUNCTIONS
function Rubaisha () {
    console.log("Well Come");
}

function rubaisha(index1, index2) {
    console.log(index1);
    console.log(index2);

    Ali()
}

//          1       2
rubaisha("right","wrong")

function Ali() {
    console.log("Well Come Again");

function Ahmed() {
    console.log("Hi");
}
Ahmed()

}

users = [
    {
        name: "Sana", 
        pass: 5678
    },
    {
        name: "Ali", 
        pass: 1234
    },
    {
        name: "Ahmer", 
        pass: 3147
    },
]

// AddUser Function
function addUser(id1, pass1){
    data = {
        name: id1, 
        pass: pass1
    }
    users.push(data)
    console.log("New user added");
}
addUser("Sana",4563)

// GetUser Function
function getUser(){
    console.log("Well Come");
    users.forEach(id => {
        console.log(id);
    });
}
getUser()

// Login Function
function login(id1, pass1){
    console.log("Loging In");
    loginData = [
        {
            name: false, 
            pass: false
        }
    ]

    // forEach Start
    users.forEach((user, i) => {
        if (user.name == id1) {
            if (user.pass == pass1) {
                loginData[0].pass = true;                
            }
            loginData[0].name = true;
        }
    });
    // foreach end

    if (loginData[0].name === true) {
        if (loginData[0].pass === true) {
            console.log("User login successfully.\n");

        } else {
            console.log("User password not match.\n");
        }
        
    } else {
        console.log("User name not match.\n"); 
    }

}
login("Sana",5678)