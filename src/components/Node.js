import PropTypes from 'prop-types';
import React from 'react';
import Branch from './Branch';
import Icons from '../icons';
import NodeInfo from '../common/index.js';
import '../assets/node.css';

class Node extends React.Component {
  constructor(props) {
    super(props)

    this.childNodes = []

    this.state = {
      node: props.node
    }
  }

  componentWillUpdate() {
    this.childNodes = []
  }

  close() {
    this.setState({
      node: Object.assign(this.state.node, {
        opened: false
      })
    })
  }

  open() {
    this.setState({
      node: Object.assign(this.state.node, {
        opened: true
      })
    })
  }

  toggleOpen() {
    if (this.state.node.childNodes)
      this.state.node.opened ? this.close() : this.open()
    return;
  }

  getDepthSize(depth = this.props.depth) {
    let padding = 23 * depth

    if (!this.state.node.childNodes) {
      padding += 14
    }

    return padding + 'px'
  }

  getContainerStyle = () => {
    const translateX = this.getDepthSize(this.props.depth - 1)

    return {
      transform: `translateX(-${translateX})`,
      width: `calc(100% + ${translateX})`,
    }
  }

  getNodeStyle () {
    return {
      paddingLeft: this.getDepthSize(this.props.depth),
      zIndex: this.props.depth,
    }
  }

  getIcon() {
    var self = this;
    if (self.state.node.childNodes) {
      if (self.state.node.icon){ 
          return (
            <div className="node-icon-style">
              { 
                <span className="node-caret">
                  {
                    !self.state.node.opened ? 
                    <Icons.CaretRight />:
                    <Icons.CaretDown/>
                  }
                </span>
              }
              {self.state.node.icon}
            </div>
          )  
      }
      return(
        <span className="node-caret">
          {
            !self.state.node.opened ? 
            <Icons.CaretRight />:
            <Icons.CaretDown/>
          }
        </span>
      )
    }
    return (
      <div className="node-icon-style">
        {!self.state.node.icon ? <span className="node-caret"> <Icons.CaretRight /> </span> : self.state.node.icon}
      </div>
    )
  }

  render() {
    return (
      <div className="node">
        <div className="node-container.node-title" style={this.getContainerStyle()}>
          <div className="node-node" style={this.getNodeStyle()}>
            <div className="node-item">
              <div className="node-icon" onClick={() => this.toggleOpen()}>{this.getIcon()}</div>
              <div className="node-text">{this.state.node.name}</div>
            </div>
            {
              this.state.node.childNodes && this.state.node.opened && (
              <Branch
                ref={ref => ref && (this.childNodes = ref.childNodes)}
                childNodes={this.state.node.childNodes}
                parentNode={this}
                root={this.props.root}
                depth={this.props.depth}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

Node.defaultProps = {
  depth: 0,
};

Node.propTypes = {
  node: NodeInfo.Node.isRequired,
  branch: PropTypes.instanceOf(React.Component).isRequired,
  parentNode: PropTypes.instanceOf(React.Component).isRequired,
  root: PropTypes.instanceOf(React.Component).isRequired,
  depth: PropTypes.number,
};

export default Node;
