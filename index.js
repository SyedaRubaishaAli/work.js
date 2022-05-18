users= [
        {
            id: "Ali",
            pass:12345
        },
        {
            id: "Ahmed",
            pass:6789
        },
        {
            id: "Ahmer",
            pass:1604
        }
    ]

    // addUser Function

    // function addUser(name, pass01) {
    //     data = {
    //         id01: name , 
    //         pass: pass01
    //     }
    //     users.push(data)
    //     console.log("ID Added");
    //     console.log(users);
    // }
    //   addUser("Urooj",54769)

    //   getUser Function

    // function getUser() {
    //     console.log(
    //         {
    //         id: "Ahmed",
    //         pass:6789
    //     },
    //     );
    // users.forEach(id01 => {
    //     console.log(id01);
    // });
    // }
    // getUser()

    //  Login Function

    function login(id04, pass04){
        console.log("Login");
        logindata = [
            {
                name: false, 
                pass: false
            }
        ]
        users.forEach((user, i) => {
            if (user.id == id04) {
                if (user.pass == pass04) {
                    logindata[0].pass = true;                
                }
                logindata[0].name = true;
            }
        });
    
        // Then results will be

        if (logindata[0].name === true) {
            if (logindata[0].pass === true) {
                console.log("login successfully");
    
            } else {
                console.log("password not match");
            }
            
        } else {
            console.log("Username not match"); 
        }
    
    }
    login()