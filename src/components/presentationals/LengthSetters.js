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
            <Col xsOffset={2} xs={4}>
              <Setter length={p.pomodoroLength} setLength={p.setPomodoroLength}
                setActivityType={p.setActivityType} min={60}
              >
                Pomodoro
              </Setter>
            </Col>
            <Col xs={4}>
              <Iteration length={p.iteration} setLength={p.setIteration}
                setActivityType={p.setActivityType} iterated={p.iterated}
                min={2}
              >
                Repeat
              </Iteration>
            </Col>
          </Row>
          <Row>
            <Col xsOffset={2} xs={4}>
              <Setter length={p.breakLength} setLength={p.setBreakLength}
                setActivityType={p.setActivityType} min={60}
              >
                Break
              </Setter>
            </Col>
            <Col xs={4}>
              <Setter length={p.longBreakLength} setLength={p.setLongBreakLength}
                setActivityType={p.setActivityType} min={60}
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
