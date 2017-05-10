import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import AccountDataStep from '../AccountDataStep';
import AnimalsStep from '../AnimalsStep';
import App from '../App';
import TagsStep from '../TagsStep';
import Steps from '../Steps';

import MockWrapper from './MockWrapper';

const decorator = story => (
  <MockWrapper>
    {story()}
  </MockWrapper>
);

const setState = action('setState');

storiesOf('App', module)
  .add('default entry', () => <App />);

storiesOf('Step 1: AccountData', module)
  .addDecorator(decorator)
  .add('empty form', () => (
    <AccountDataStep
      state={{}}
      setState={setState}
    />
  ))
  .add('with email', () => (
    <AccountDataStep
      state={{ email: 'jonas@keinholz.com' }}
      setState={setState}
    />
  ))
  .add('with email and passwords', () => (
    <AccountDataStep
      state={{
        email: 'jonas@keinholz.com',
        password: 'secure',
        passwordRepeat: 'secure'
      }}
      setState={setState}
    />
  ));

storiesOf('Step 2: Animals', module)
  .addDecorator(decorator)
  .add('none selected', () => <AnimalsStep state={{}} setState={setState} />)
  .add('cat selected', () => (
    <AnimalsStep state={{ favedImages: { 0: true } }} setState={setState} />
  ));

storiesOf('Step 3: Tags', module)
  .addDecorator(decorator)
  .add('none selected', () => <TagsStep state={{}} setState={setState} />)
  .add('cute selected', () => (
    <TagsStep state={{ selectedTags: { 0: true } }} setState={setState} />
  ));
