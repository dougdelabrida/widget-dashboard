import React from 'react';
import ReactDOM from 'react-dom';
import PolarAreaChart from '../../../components/widgets/PolarAreaChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PolarAreaChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
