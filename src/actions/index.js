function addOperation(operation) {
    return { type: 'ADD_OPERATION', operation }
}

function addNumber(number) {
    return { type: 'ADD_NUMBER', number }
}

function calculate(input) {
  return { type: 'CALCULATE' , inputData: input}
}

function showMemories() {
  return { type: 'SHOW_MEMORIES' }
}

function clear() {
  return { type: 'CLEAR' }
}

function undo() {
  return { type: 'UNDO' }
}

function toggleMemories() {
  return { type: 'TOGGLE_MEMORIES' }
}

export {
    addOperation,
    addNumber,
    calculate,
    showMemories,
    clear,
    undo,
    toggleMemories
}
