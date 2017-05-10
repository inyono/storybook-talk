import TextField from 'material-ui/TextField';
import React from 'react';

const AccountDataStep = ({ setState, state = {} }) => {
  const setValueToStateKey = key => e => setState({ [key]: e.target.value });

  return (
    <div>
      <TextField
        hintText="E-Mail"
        floatingLabelText="E-Mail"
        type="email"
        onChange={setValueToStateKey('email')}
        value={state.email || ''}
        fullWidth
      />
      <TextField
        hintText="Password"
        floatingLabelText="Password"
        type="password"
        onChange={setValueToStateKey('password')}
        value={state.password || ''}
        fullWidth
      />
      <br />
      <TextField
        hintText="Password (repeat)"
        floatingLabelText="Password (repeat)"
        type="password"
        onChange={setValueToStateKey('passwordRepeat')}
        value={state.passwordRepeat || ''}
        fullWidth
      />
    </div>
  );
};

export default AccountDataStep;
