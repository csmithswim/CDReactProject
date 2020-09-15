import React from 'react';
import Button from './Button';

// import Input from './Input';
import Form from './Form';
import { loginInputs } from '../utils/userRequests'
import userInputs from '../utils/userInputs';

export default function Login() {

    const loginLink = '/login';

    return (
        <div>
            <h1>
                Login To Your Account
            </h1>
            <br/>

            <Form

                id='loginForm'
                inputs={userInputs}
                title='Login!'      
                submitFunc={() => {
                    console.log(document.getElementById('loginform'));
                }}         
            />
            
            <Button
            onClick = {() => {window.location = loginLink}}
            text='Already Have An Account? Login'
            style={{color: 'white', backgroundColor: 'black'}}
            />

        </div>
    )

}

