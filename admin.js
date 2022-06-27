// module.exports = {
//     userMiddleware: function(req, res, next){
//         if(req.params.username == "ali"){
//             next()
//         } else {
//             return res.send("Invalid User")
//         }
//        }
//     }

    module.exports = {
        userMiddleware: function(req, res, next){
            if(req.params.id == "27" && req.params.login == "Rubaisha"){
                next()
            } else {
                return res.send("Invalid ID Login Denied")
            }
           }
        }

        //  module.exports = {
        //     userloginMiddleware: function(req, res, next){
        //         if(req.params.login == "Ahmed"){
        //             next()
        //         } else {
        //             return res.send("Invalid User")
        //         }
        //        }
        //     }


