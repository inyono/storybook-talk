import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import React from 'react';

import AccountDataStep from './AccountDataStep';
import AnimalsStep from './AnimalsStep';
import TagsStep from './TagsStep';
import Steps from './Steps';

const steps = [AccountDataStep, AnimalsStep, TagsStep];

import './index.css';

const App = () => (
  <MuiThemeProvider>
    <div>
      <img
        src="./logo.png"
        style={{ width: '50px', float: 'left', margin: '10px' }}
      />
      <span
        style={{
          fontFamily: "'Architects Daughter', cursiv",
          lineHeight: '70px',
          fontSize: '30px',
          color: '#03A9F4'
        }}
      >
        Cuteify
      </span>
      <Steps steps={steps} />
    </div>
  </MuiThemeProvider>
);

export default App;
