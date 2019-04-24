import PropTypes from 'prop-types'
import React from 'react'
import Node from './Node';
import NodeInfo from '../common/index'
import '../assets/branch.css';

class Branch extends React.Component {
  constructor(props) {
    super(props)

    this.childNodes = []
  }

  componentWillUpdate() {
    this.childNodes = []
  }

  render() {
    const {
      childNodes,
      parentNode,
      root,
      depth,
      onClick,
    } = this.props;

    return (
      <div className="branch">
        <ul className="branch-node-list">
          {
            childNodes.map((node, i) => (
              <li key={`${i}_${node.name}`} className="branch-node-list-item">
                <Node
                  ref={ref => ref && this.childNodes.push(ref)}
                  node={node}
                  branch={this}
                  parentNode={parentNode}
                  root={root}
                  depth={depth + 1}
                  onClick={onClick}
                />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

Branch.defaultProps = {
  depth: 0,
  onClick: () => {},
};

Branch.propTypes = {
    childNodes: PropTypes.arrayOf(NodeInfo.Node).isRequired,
    parentNode: PropTypes.instanceOf(React.Component).isRequired,
    root: PropTypes.instanceOf(React.Component).isRequired,
    depth: PropTypes.number,
    onClick: PropTypes.func,
};

export default Branch;
