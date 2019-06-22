export default function briefsReducer(state = {data: [], isFetching: false, isAdding: false}, action) {
  switch (action.type) {
    case 'ADD_BRIEF_REQUEST':
      return {
        ...state,
        isAdding: true,
      }
      break;
    case 'ADD_BRIEF_SUCCESS':
      return {
        data: state.data.concat(action.payload),
        isAdding: false,
      }
      break;
    case 'GET_BRIEFS_REQUEST':
      return {
        ...state,
        isFetching: true,
      }
      break;
    case 'GET_BRIEFS_SUCCESS':
      return {
        data: action.payload,
        isFetching: false,
      }
      break;
    default:
      return state
  }
}
