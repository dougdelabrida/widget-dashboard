import React from 'react';
import ReactDOM from 'react-dom';
import SelectField from '../../components/SelectField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SelectField onSelect={() => null} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
