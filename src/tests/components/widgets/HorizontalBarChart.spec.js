import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalBarChart from '../../../components/widgets/HorizontalBarChart';

it('HorizontaBarChart renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HorizontalBarChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
