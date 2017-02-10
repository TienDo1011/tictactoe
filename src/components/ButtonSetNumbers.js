import React, { Component } from 'react';
import Button from './Button';

class ButtonSetNumbers extends Component {
  render() {
    return (
      <section className="button-set--numbers">
        <Button text="1" onClick={this.props.handleAdd} />
        <Button text="2" onClick={this.props.handleAdd} />
        <Button text="3" onClick={this.props.handleAdd} />
        <Button text="4" onClick={this.props.handleAdd} />
        <Button text="5" onClick={this.props.handleAdd} />
        <Button text="6" onClick={this.props.handleAdd} />
        <Button text="7" onClick={this.props.handleAdd} />
        <Button text="8" onClick={this.props.handleAdd} />
        <Button text="9" onClick={this.props.handleAdd} />
        <Button text="0" onClick={this.props.handleAdd} />
      </section>
    )
  }
}

export default ButtonSetNumbers;
