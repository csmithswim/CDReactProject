import React from 'react';
import Button from './Button';

// import Input from './Input';

import Form from './Form';
import { regInputs } from '../utils/userInputs'
import { regReq } from '../utils/userRequests'

export default function Register() {

    const regLink = '/register';

    return (
        <div>
            <h1>
                Register Today
            </h1>
            <br/>

            <Form
                id = 'registerForm'
                title='Register'
                inputs={regInputs}
                submitFunc={regReq}
            />

            <Button
            onClick = {() => {window.location = regLink}}
            text='Register An Account'
            style={{color: 'white', backgroundColor: 'black'}}
            />

         

        </div>
    )

}

