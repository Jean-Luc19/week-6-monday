require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import PersonList from './components/person-list';
import Person from './components/person';
document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(<PersonList />, document.getElementById('app'))
);
