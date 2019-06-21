export default function briefsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_BRIEF':
      return state.concat(action.payload)
      break;
    default:
      return state
  }
}
