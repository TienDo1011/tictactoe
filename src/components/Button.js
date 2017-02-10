import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <button className={this.props.klass}
              onClick={this.props.onClick}>
              <span className="title">{this.props.text}</span></button>
        );
    }
}

export default Button
