import React, { useState, useEffect } from 'react';

import { BrowserRouter} from 'react-router-dom';
import AppRouter from './AppRouter';

import { ThemeProvider } from '../hooks/ThemeContext';

function App() {

  const [theme, setTheme] = useState(true);

  useEffect( () => {
console.log(theme)

  }, [theme])

  return ( 
    <div>    
        <BrowserRouter>  
        <ThemeProvider>
          <AppRouter />
          </ThemeProvider>     
      </BrowserRouter>     
    </div>    
  );
}

export default App;
