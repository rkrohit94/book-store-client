import React from 'react';
import ReactDOM from 'react-dom';
import GoogleBookApi from './GoogleBookApi';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoogleBookApi />, div);
});