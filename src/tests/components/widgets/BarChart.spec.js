import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from '../../../components/widgets/BarChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BarChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
