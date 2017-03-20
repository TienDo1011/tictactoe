import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class ButtonComponent extends Component {
  constructor() {
    super();
    this.getMoving = this.getMoving.bind(this);
  }

  getMoving() {
    this.props.onClick(this.props.index);
  }

  render() {
    const props = this.props;
    return (
      <section>
        <Col xs={4}>
          <Button
            bsStyle="primary" bsSize="large" key={props.key}
            onClick={this.getMoving}
          >{props.player}</Button>
        </Col>
      </section>
    );
  }
}

ButtonComponent.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default ButtonComponent;
