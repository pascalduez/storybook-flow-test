import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Test', module);

// declare type React$Node =
//   | null
//   | boolean
//   | number
//   | string
//   | React$Element<any>
//   | React$Portal
//   | Iterable<?React$Node>;

stories.add('null', () => null);

stories.add('boolean', () => true);

stories.add('number', () => 99);

stories.add('string', () => 'test string');

stories.add('React$Element', () => <p>test</p>);

stories.add('React$Portal', () =>
  ReactDOM.createPortal(<p>test</p>, document.getElementById('root'))
);

stories.add('Array<string>', () => ['string1', 'string2']);

stories.add('Array<React$Element>', () => [
  <p key="one">test</p>,
  <p key="two">test</p>,
]);
