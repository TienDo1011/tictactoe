import React from 'react';
import { Button, Col } from 'react-bootstrap';

function ButtonComponent(props) {
  return (
    <section>
      <Col xs={4}>
        <Button
          bsStyle="primary" bsSize="large" key={props.key}
          onClick={props.onClick}
        >{props.player}</Button>
      </Col>
    </section>
  );
}

ButtonComponent.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  player: React.PropTypes.number.isRequired,
  key: React.PropTypes.number.isRequired,
};

export default ButtonComponent;
