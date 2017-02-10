import React, { Component } from 'react';
import Button from './Button';

class ButtonSetEquations extends Component {
  render() {
    const input = this.props.input;
    return (
      <section className="button-set--equations">
        <Button text="+" onClick={this.props.handleAdd} />
        <Button text="-" onClick={this.props.handleAdd} />
        <Button text="*" onClick={this.props.handleAdd} />
        <Button text="/" onClick={this.props.handleAdd} />
        <Button text="=" onClick={this.props.handleFunc.bind(null, input)} />
      </section>
    )
  }
}

export default ButtonSetEquations;
