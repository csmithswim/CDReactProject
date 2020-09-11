import React from 'react';
import Button from './Button';

export default function Home() {

    const loginLink = window.location.origin  + '/login';
    const regLink = window.location.origin  + '/register';

    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <br/>

            <Button
            onClick = {() => {window.location = loginLink}}
            text='Login button'
            style={{color: 'white', backgroundColor: 'black'}}

            />

            {/*<a
                href={loginLink}           
            >
            Login
            </a> */}

            <br/>
            <Button
            onClick = {() => {window.location = regLink}}
            text='Register button'

            />
            {/*<a
                href={regLink}
            >

            Register

            </a> */}

        </div>
    )

}

