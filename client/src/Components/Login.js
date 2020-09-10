import React from 'react';

export default function Login() {

    const loginLink = window.location.origin  + '/register';

    return (
        <div>
            <h1>
                Login To Your Account
            </h1>
            <br/>
            <a
                href={loginLink}           
            >
                Need An Account? Register Today!
            </a>

        </div>
    )

}

