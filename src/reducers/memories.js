export default function memories(state = [], action) {
  switch (action.type) {
    case 'CALCULATE':
      const value = action.inputData + ' = ' + eval(action.inputData);
      return [...state, value]
    default:
      return state;
  }
}
