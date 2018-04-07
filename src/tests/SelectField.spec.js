import React from 'react';
import ReactDOM from 'react-dom';
import SelectField from '../components/SelectField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectField />, div);
  ReactDOM.unmountComponentAtNode(div);
});
