import PropTypes from 'prop-types'
import React from 'react';

import Branch from './components/Branch';
import NodeInfo from './common/index';
import './assets/root.css';

export class Root extends React.Component {
  componentWillUpdate() {
    this.childNodes = []
  }

  render() {
    return (
      <div className="root-container">
        <Branch
          {...this.props}
          ref={ref => ref && (this.childNodes = ref.childNodes)}
          parentNode={this}
          root={this}
        />
      </div>
    )
  }
}

Root.propTypes = {
  childNodes: PropTypes.arrayOf(PropTypes.shape(NodeInfo.node)),
};

export default Root
