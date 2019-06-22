export default function query(state={}, action) {
  switch (action.type) {
    case 'SET_PRODUCT_NAME_QUERY':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
      break;
    default:
      return state
  }
}
