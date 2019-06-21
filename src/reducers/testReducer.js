export default function defaultReducer(state = 'HELLO FROM REDUCER', action) {
  switch (action.type) {
    case 'CHANGE_TEST':
      return 'TEXT CHANGED'
      break;
    default:
      return state
  }
}
