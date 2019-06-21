export default function productsReducer(state = {data: [], isFetching: false}, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_REQUEST':
      return {
        ...state,
        isFetching: true,
      }
      break;
    case 'GET_PRODUCTS_SUCCESS':
      return {
        data: action.payload,
        isFetching: false,
      }
      break;
    default:
      return state
  }
}
