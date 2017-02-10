export default function memoriesVisible(state = false, action) {
  switch (action.type) {
    case 'SHOW_MEMORIES':
      return true;
    case 'TOGGLE_MEMORIES':
      return false;
    default:
      return state;
  }
}
