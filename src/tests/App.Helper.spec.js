import {
  widgetList,
  getWidget,
  addWidget,
  removeWidget,
  defaultLayout,
  defaultWidgets
} from '../App.Helper';

describe('App.Helper', function () {
  describe('addWidget(layout, widgets, type)', function () {
    const mockState = {
      layout: [],
      widgets: []
    }

    const nextState = addWidget(mockState.layout, mockState.widgets, 'barChart');

    it('should return Object', () => {
      expect(nextState.layout.length).toEqual(1);
      expect(nextState.widgets.length).toEqual(1);
    });

    it('should create barChart widget', function () {
      expect(nextState.widgets[0].type).toEqual('barChart');
    });
  });
});
