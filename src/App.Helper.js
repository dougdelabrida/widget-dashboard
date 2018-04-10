import React from 'react';
import HorizontalBarChart from './components/widgets/HorizontalBarChart';
import BarChart from './components/widgets/BarChart';
import PolarAreaChart from './components/widgets/PolarAreaChart';

const itemLayout = {
  h: undefined,
  i: undefined,
  isDraggable: undefined,
  isResizable: undefined,
  maxH: undefined,
  maxW: undefined,
  minH: undefined,
  minW: undefined,
  moved: false,
  static: false,
  w: undefined,
  x: undefined,
  y: undefined,
};

export const widgetList = [
  {
    type: 'horizontalBarChart',
    text: 'Horizontal Bar',
    component: HorizontalBarChart,
    "w": 4,
    "h": 9
  },
  {
    type: 'barChart',
    text: 'Bar Chart',
    component: BarChart,
    "w": 4,
    "h": 7,
    "maxH": 7,
    "minH": 7 
  },
  {
    type: 'polarAreaChart',
    text: 'Polar Area Chart',
    component: PolarAreaChart,
    "w": 4,
    "h": 13,
    "minW": 4,
    "minH": 13
  }
];

export const getWidget = (i, widgets) => {
  const widget = widgets.find(widget => widget.indexes.includes(i));
  if (!widget) return <span>Not found</span>;
  return <widget.component key={i} />;
}

export const addWidget = (layout, widgets, type) => {
  const widget = widgetList.find(widget => widget.type === type);

  const item = Object.assign({}, itemLayout, widget);
  // TODO: Set X Y dynamic
  item.x = 0;
  item.y = 0;
  item.i = String(layout.length);

  const nextLayout = [...layout, item];

  const nextWidgets = [...widgets, widget];

  const existingWidget = nextWidgets.find(w => w.type === type);

  if (existingWidget.indexes) {
    existingWidget.indexes.push(item.i);
  } else {
    widget.indexes = [item.i];
  }

  return {
    layout: nextLayout,
    widgets: nextWidgets
  }
}
