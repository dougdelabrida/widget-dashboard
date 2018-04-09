import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import './WidgetsWrapper.css';

const ResponsiveReactGridLayout = WidthProvider(RGL);

class WidgetsWrapper extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 6,
    rowHeight: 16,
    onLayoutChange: function() {},
    cols: 12
  };

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <ResponsiveReactGridLayout
        onLayoutChange={this.onLayoutChange}
        {...rest}
      >
        {children}
      </ResponsiveReactGridLayout>
    );
  }
}

export default WidgetsWrapper;
