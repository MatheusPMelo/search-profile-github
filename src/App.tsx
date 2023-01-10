import React from 'react';
import { ThemeProvider } from 'styled-components';

//styles
import theme from './styles/theme';
import Global from './styles/global';

//Components
import SearchEngine from './components/searchEngine';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Global />

        <SearchEngine />

      </ThemeProvider>
    </div>
  );
}

export default App;
