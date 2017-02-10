import React, { Component } from 'react';
import Button from './Button';

class TotalRecall extends Component {
  render() {
    let classNames = `memory-bank ${this.props.memoriesVisible ? 'visible' : ''}`
    return (
      <section className={classNames}>
        <Button text="+" onClick={this.props.close} klass="toggle-close" />
        {this.props.memories.map((mem) => {
          return (
            <Button klass="block memory transparent" text={mem} />
          )
        })}
      </section>
    )
  }
}

export default TotalRecall
