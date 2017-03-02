export const setPomodoroLength = (l) => ({ type: 'SET_POMODORO_LENGTH', length: l})
export const setBreakLength = (l) => ({ type: 'SET_BREAK_LENGTH', length: l})
export const setActivityType = (t) => ({type: 'SET_ACTIVITY_TYPE', activity_type: t})

export const startTimer = (t) => ({
  type: 'START_TIMER',
  timer: {
    is_active: true,
    time: t
  }
})

export const pauseTimer = (t) => ({
  type: 'PAUSE_TIMER',
  timer: {
    paused: true,
    is_active: false,
    time: t
  }
})

export const clearTimer = () => ({
  type: 'CLEAR_TIMER',
  timer: {
    is_active: false,
    is_finished: false,
    paused: false,
    time: 0
  }
})

export const tickTimer = (t) => ({
  type: 'TICK_TIMER',
  timer: {
    time: t
  }
})


export const finishTimer = () => ({
  type: 'FINISH_TIMER',
  timer: {
    is_finished: true,
    time: 0
  }
})
