import React from 'react';
import { ThemeProvider } from 'styled-components';

//styles
import theme from './styles/theme';
import Global from './styles/global';
import Main from './components/main';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Global />

        <Main />

      </ThemeProvider>
    </div>
  );
}

export default App;
