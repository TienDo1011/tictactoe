import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Setter from './Setter'
import Iteration from './Iteration'

class LengthSetters extends Component {
  render() {
    const p = this.props
    return (
      <section>
          <Row>
            <Col xs={12} md={6}>
              <Setter length={p.pomodoroLength} setLength={p.setPomodoroLength}
                setActivityType={p.setActivityType}
              >
                Pomodoro
              </Setter>
            </Col>
            <Col xs={12} md={6}>
              <Iteration length={p.iteration} setLength={p.setIteration}
                setActivityType={p.setActivityType} iterated={p.iterated}
              >
                Repeat
              </Iteration>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Setter length={p.breakLength} setLength={p.setBreakLength}
                setActivityType={p.setActivityType}
              >
                Break
              </Setter>
            </Col>
            <Col xs={6}>
              <Setter length={p.longBreakLength} setLength={p.setLongBreakLength}
                setActivityType={p.setActivityType}
              >
                Long Break
              </Setter>
            </Col>
          </Row>
      </section>
    )
  }
}

export default LengthSetters
