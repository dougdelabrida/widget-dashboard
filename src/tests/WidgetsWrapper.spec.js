import React from 'react';
import ReactDOM from 'react-dom';
import WidgetsWrapper from '../components/WidgetsWrapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WidgetsWrapper></WidgetsWrapper>, div);
  ReactDOM.unmountComponentAtNode(div);
});
