const axios = require('axios');
const baseURL = 'http://localhost:4000';
// const validator = require('validator');

module.exports = {
    loginReq: (form) => {
        const reqBody = {};

        for (const input of form){

            const val = input.value;

            if (val !== ''){
                reqBody[input.name] = val;
            }
        }

        //frontend validation eeded: [] make sure all fields are present, [] email is an email, lengths of inputs (match schema)

        const loginURL = `${baseURL}/user/login`   

        axios.put(loginURL, reqBody)
        .then( res => {
            console.log(res);
        })
        .catch( err => {
            if (err) {
                console.log(err);
            }
        })
    }, 

    regReq: (form) => { 
        const reqBody = {};

        for (const input of form){

            const val = input.value;  
            
            if (val !== ''){
                reqBody[input.name] = val;
            }
        }

        const regURL = `${baseURL}/user/register`

        axios.post(regURL, reqBody)
        .then(res => {
            console.log(res);
        })
        .catch( err => {
            if (err) {
                console.log(err)
            }
        })
    }

}

