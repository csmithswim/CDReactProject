import React from 'react';
import Button from './Button';

import {useTheme} from '../hooks/ThemeContext'

export default function Home() {

    const loginLink = window.location.origin  + '/login';
    const regLink = window.location.origin  + '/register';

    // const [theme] = useTheme()

    return (
      
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <h2>
                { useTheme() ? 'Light mode' : 'darkmode'}
            </h2>
            <br/>
            <Button
            onClick = {() => {window.location = loginLink}}
            text='Login button'
            style={{color: 'white', backgroundColor: 'black'}}
            />
            <br/>
            <Button
            onClick = {() => {window.location = regLink}}
            text='Register button'
            />
            
        </div>
    )
}

