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

    this.onClick = this.onClick.bind(this);
    this.onContextMenu = this.onContextMenu.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.getDepthSize = this.getDepthSize.bind(this);
    this.getContainerStyle = this.getContainerStyle.bind(this);
    this.getNodeStyle = this.getNodeStyle.bind(this);
    this.getIcon = this.getIcon.bind(this);
  }

  componentWillUpdate() {
    this.childNodes = []
  }

  onClick() {
    if (typeof this.props.node.onClick === 'function')
      this.props.node.onClick()
  }

  onContextMenu() {
    if (typeof this.props.node.onContextMenu === 'function')
      this.props.node.onContextMenu()
  }

  toggleOpen() {
    if (this.props.node.childNodes) {
        this.props.node.opened ? this.props.node.onClose() : this.props.node.onOpen()
    }
    return;
  }

  getDepthSize(depth = this.props.depth) {
    let padding = 23 * depth

    if (!this.props.node.childNodes) {
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
    if (this.props.node.childNodes) {
      if (this.props.node.icon){
          return (
            <div className="node-icon-style">
              {
                <span className="node-caret">
                  {
                    !this.props.node.opened ?
                    <Icons.CaretRight />:
                    <Icons.CaretDown/>
                  }
                </span>
              }
              {this.props.node.icon}
            </div>
          )
      }
      return(
        <span className="node-caret">
          {
            !this.props.node.opened ?
            <Icons.CaretRight />:
            <Icons.CaretDown/>
          }
        </span>
      )
    }
    return (
      <div className="node-icon-style">
        {!this.props.node.icon ? <span className="node-caret"> <Icons.CaretRight /> </span> : this.props.node.icon}
      </div>
    )
  }

  getDropdown() {
    if (this.props.node.dropdown){
      return(
        this.props.node.dropdown
      )
    }
  }

  render() {
    return (
      <div className="node">
        <div className="node-container.node-title" style={this.getContainerStyle()}>
          <div className="node-node" style={this.getNodeStyle()}>
            <div className="node-item">
              <div className='node-item-box'>
                <div className="node-icon" onClick={this.toggleOpen}>{this.getIcon()}</div>
                <div
                  className="node-text"
                  onClick = {this.onClick}
                  onContextMenu = {this.onContextMenu}>
                    {this.props.node.name}
                  </div>
              </div>
                <div className="node-dropdown">{this.getDropdown()}</div>
            </div>
            {
              this.props.node.childNodes && this.props.node.opened && (
              <Branch
                ref={ref => ref && (this.childNodes = ref.childNodes)}
                childNodes={this.props.node.childNodes}
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
  onClick: () => {},
};

Node.propTypes = {
  node: NodeInfo.Node.isRequired,
  branch: PropTypes.instanceOf(React.Component).isRequired,
  parentNode: PropTypes.instanceOf(React.Component).isRequired,
  root: PropTypes.instanceOf(React.Component).isRequired,
  depth: PropTypes.number,
  onClick: PropTypes.func,
};

export default Node;
