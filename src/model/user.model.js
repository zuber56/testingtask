// const mongoose = require('mongoose')

// module.exports = () => {
//     const userSchema = new mongoose.Schema( {

//         FirstName: {
//             type: String,
//         },
//         Email: {
//             type: String
//         },
//         Password: {
//             type: String
//         },
//         Phone: {
//             type: String
//         },
//     });

//     // return userSchema;
// };
// const User = mongoose.model('User', userSchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    // image: {
    //     type: String,
    // },
    // tokens: [{
    //     token: {
    //         type: String,
    //     }
    // }],
})

//--------------------------------------------
const User = mongoose.model('User', userSchema)
module.exports = User