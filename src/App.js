import React, { Component } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './theme';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  body {
    font-family: ${props => props.theme.defaultFont};
    background: linear-gradient(to right, #007991, #78ffd6);
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
