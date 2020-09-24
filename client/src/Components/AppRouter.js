import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Control from './Control';

import useTheme from '../hooks/useTheme'

export default function AppRouter() {

    const [ theme, setTheme] = useTheme(true)
    
    return (
        <div>
            <Control />
            {/* <h1>
                {theme ? 'Light Mode' : 'Dark Mode'}
            </h1> */}
            {/* <button
                onClick={() => {
                    setTheme( prevTheme => {return !prevTheme})
                }}
            >
            {!theme ? 'Switch To Light Mode' : 'Switch To Dark Mode'}
            </button> */}
            <Switch>
                <Route
                exact path='/'
                >
                        <Home />
                </Route>
                <Route
                    exact path='/login'
                    >
                        <Login />
                    </Route>
                    <Route
                    exact path='/register'
                    >
                        <Register />
                    </Route>
                    <Route
                path='/'
                >
            
            <div>
                <h1>
                    404
                </h1>
            </div>
                    <Home />
            </Route>
        </Switch>
        </div>
    )

}