'use strict';

import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout'

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Grid extends React.Component {
  constructor(props) {
    super(props);
    const layouts = getFromLS('profile1') || {}

    this.state = {
      layouts: layouts
    };
  }
  getItems() {
    var settings = [
      { key: 'a', photo: 'https://i.kinja-img.com/gawker-media/image/upload/unnbgkdbmsszmazgxkmr.jpg' },
      { key: 'b', photo: 'https://i.kinja-img.com/gawker-media/image/upload/unnbgkdbmsszmazgxkmr.jpg'
      }
    ]
    var style = function(url) {
      return {
        backgroundImage: 'url(' + url + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }
    }
    return settings.map(function(val) {
      return (
        <div 
          key={val.key}
          data-grid={val.grid}
          style={style(val.photo)}
          >
        </div>
      )
    })
  }
  change(layout, layouts) {
    saveToLS('profile1', layouts);
  }
  render() {
    return (
      <ResponsiveReactGridLayout 
        {...this.props}
        layouts={this.state.layouts}
        onLayoutChange={this.change}>
        {this.getItems()} 
      </ResponsiveReactGridLayout>
    )
  }
}

Grid.defaultProps = {
  className: "layout",
  breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
  cols: {lg: 7, md: 5, sm: 4, xs: 3, xxs: 1}
};

export default Grid

const saveToLS = (profile, layout) => {
  if (global.localStorage) {
    global.localStorage.setItem(profile, JSON.stringify({
      layouts: layout
    }));
  }
}

const getFromLS = (profile) => {
  let ls = {};

  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem(profile)) || {};
    } catch(e) { console.log(e) }
  }

  return ls['layouts'];
}
