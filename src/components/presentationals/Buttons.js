import React, { Component } from 'react'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';

class Buttons extends Component {
  constructor() {
    super()
    this._startTimer = this._startTimer.bind(this)
    this._pauseTimer = this._pauseTimer.bind(this)
    this._clearTimer = this._clearTimer.bind(this)
  }

  _startTimer() {
    const p = this.props
    let activityType = (p.activity_type == "p") ? p.pomodoroLength : p.breakLength
    let time = p.timer.time || activityType
    p.startTimer(time)
  }

  _pauseTimer() {
    const p = this.props
    p.pauseTimer(p.timer.time)
  }

  _clearTimer() {
    const p = this.props
    p.clearTimer()
    p.sounds.alarm.pause()
  }

  render() {
    const p = this.props
    const is_active = this.props.timer.is_active
    const callback = (is_active) ? this._pauseTimer : this._startTimer
    const text = (is_active) ? 'Pause' : 'Start'
    return (
      <section>
        <Row>
          <Col>
            <h1>Pomodore Clock as your wish</h1>
            <br />
            <hr />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup>
              <Button bsStyle="primary" bsSize="large" onClick={callback}>{text}</Button>
              <Button bsStyle="danger" bsSize="large" onClick={this._clearTimer}>Clear</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </section>
    )
  }
}


export default Buttons
