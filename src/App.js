import React, { PureComponent } from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import SelectField, { SelectOption } from './components/SelectField';
import Button from './components/Button';
import theme from './theme';
import WidgetsWrapper from './components/WidgetsWrapper';
import ActionsWrapper from './components/ActionsWrapper';
import { widgetList, getWidget, addWidget } from './App.Helper';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: ${props => props.theme.defaultFont};
    background: linear-gradient(to right, #007991, #78ffd6);
  }
`;

class App extends PureComponent {
  state = {
    layout: [],
    widgets: [],
    selectedWidgetValue: ''
  }

  handleSelectWidget (value = '') {
    this.setState({
      selectedWidgetValue: value
    });
  }

  addWidget (type) {
    if (!this.state.selectedWidgetValue) return;
  
    const newState = addWidget(this.state.layout, this.state.widgets, type);

    this.setState(newState);
  }

  handleLayoutChange (layout) {
    console.log(layout)
    this.setState({
      layout
    });
  }

  render() {
    const { widgets, layout, selectedWidgetValue } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <div>
          <ActionsWrapper>
            <SelectField onSelect={value => this.handleSelectWidget(value)}>
              <SelectOption selected>Select a widget</SelectOption>
              {widgetList.map((widget, i) =>
                <SelectOption value={widget.type} key={i}>
                  {widget.text}
                </SelectOption>
              )}
            </SelectField>
            <Button onClick={() => this.addWidget(selectedWidgetValue)}>Add Widget</Button>
          </ActionsWrapper>
          <WidgetsWrapper layout={layout} onLayoutChange={layout => this.handleLayoutChange(layout)}>
            {layout.map((item) => (
              <div key={item.i}>
                {getWidget(item.i, widgets)}
              </div>
            ))}
          </WidgetsWrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
