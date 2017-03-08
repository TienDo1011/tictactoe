import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

class Setter extends Component {

  constructor() {
    super()
    this._increment = this._increment.bind(this)
    this._decrement = this._decrement.bind(this)
  }

  _increment() {
    const p = this.props
    if(p.children.charAt(0).toLowerCase() !== "b"
        && p.children.charAt(0).toLowerCase() !== "p") {
          p.setActivityType("p")
    } else {
      p.setActivityType(p.children.charAt(0).toLowerCase())
    }
    p.setLength(p.length + 60)
  }

  _decrement() {
    const p = this.props
    if(p.children.charAt(0).toLowerCase() !== "b"
        && p.children.charAt(0).toLowerCase() !== "p") {
          p.setActivityType("p")
    } else {
      p.setActivityType(p.children.charAt(0).toLowerCase())
    }
    p.setLength(p.length - 60)
  }

  render() {
    const p = this.props
    const length = p.length / 60
    return (
      <section>
        <h3>{p.children}:</h3>
        <ButtonGroup>
          <Button bsStyle="info" onClick={this._increment}>+</Button>
          <Button bsStyle="info" onClick={this._decrement}>-</Button>
        </ButtonGroup>
        <span> {length} mins</span>
        </section>
    )
  }
}

export default Setter
