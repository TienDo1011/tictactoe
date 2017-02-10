import React, { Component } from 'react';
import Button from './Button';

class ButtonSetFunctions extends Component {
  render() {
    return (
      <section className="button-set--functions">
        <Button text="recal" onClick={this.props.handleRecal} />
        <Button text="clear" onClick={this.props.handleClear} />
        <Button text="&larr;" onClick={this.props.handleBack} />
      </section>
          )
  }
}

export default ButtonSetFunctions;
