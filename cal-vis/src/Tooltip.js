import React, { Component, PureComponent } from 'react'
import { Popper, Arrow, Manager, Target } from 'react-popper'
import './popper.css';

class StandaloneExample extends PureComponent {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
      isOpen: false,
    };
    this.targetRef = React.createRef()
  }
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
  openPopper = () => {
    if (!this.state.isOpen) {
      this.setState({isOpen:true})
    }
    //this.setState(prevState => ({ isOpen: !prevState.isOpen, }))
  }
  closePopper = () => {
    if (this.state.isOpen) {
      this.setState({isOpen:false})
    }
    //this.setState(prevState => ({ isOpen: !prevState.isOpen, }))
  }
  render() {
    let {targetContent, popperContent, targetProps, popperProps} = this.props
    targetProps = Object.assign({
      //placement: "top",
      //isOpen: this.state.tooltipOpen,
      //autohide: false,
      //toggle: this.toggle,
    }, targetProps)
    // put the ref on the target itself?
    return (
      <div>
        <h2>Toggleable Popper Example</h2>
        <Manager>
          <Target {...targetProps}
            onMouseEnter={this.openPopper}
            //onMouseLeave={this.closePopper}
          >
            {targetContent}
            Click {this.state.isOpen ? 'to hide' : 'to show'} popper
          </Target>
          {this.state.isOpen && (
            <Popper className="popper" {...popperProps}
                eventsEnabled={true}
                //target={this.target} from standalone example https://github.com/FezVrasta/react-popper/blob/master/demo/standaloneObject.jsx
            >
              {popperContent}
              <Arrow className="popper__arrow" />
            </Popper>
          )}
        </Manager>

        {/*
        <h2>my popper test</h2>
        <span>
          <span ref={this.targetRef}>
            {target}
          </span>
          <Popper className="popper" target={this.target}>
            Popper Content for Standalone example
            <Arrow className="popper__arrow" />
          </Popper>
          //<Tooltip {...targetProps}>{popperContent}</Tooltip>
        </span>
        */}
      </div>
    );
  }
}
export default StandaloneExample
/*
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
    const REACT_VERSION = React.version;
    //console.log(REACT_VERSION, React.createRef, createRef)
    //this.targetRef = React.createRef()
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    let {target, popperContent, targetProps} = this.props
    targetProps = Object.assign({
      placement: "top",
      isOpen: this.state.tooltipOpen,
      autohide: false,
      target: "DisabledAutoHideExample",
      toggle: this.toggle,
    }, targetProps)
    // put the ref on the target itself?
    return (
      <span>
        <span ref={this.targetRef}>
          {target}
        </span>
        <Popper {...targetProps}>{popperContent}</Popper>
      </span>
    );
  }
}
*/

/*
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Somewhere in here is a <a href="#" id="TooltipExample">tooltip</a>.</p>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Hello world!
        </Tooltip>
      </div>
    );
  }
}
*/

