import React from 'react';
import ReactDOM from 'react-dom';
import ActionsWrapper from '../components/ActionsWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionsWrapper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
