export function requestProducts(products) {
  return {
    type: 'GET_PRODUCTS_REQUEST',
  }
}

export function successProducts(products) {
  return {
    type: 'GET_PRODUCTS_SUCCESS',
    payload: products
  }
}

export function requestAddBrief() {
  return {
    type: 'ADD_BRIEF_REQUEST'
  }
}

export function successAddBrief(brief) {
  return {
    type: 'ADD_BRIEF_SUCCESS',
    payload: brief
  }
}
