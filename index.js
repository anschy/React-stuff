import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import theme from '../src/utils/theme';
import {  MuiThemeProvider } from '@material-ui/core/styles';
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);



