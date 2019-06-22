export function requestProducts() {
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

export function requestBriefs() {
  return {
    type: 'GET_BRIEFS_REQUEST',
  }
}

export function successBriefs(briefs) {
  return {
    type: 'GET_BRIEFS_SUCCESS',
    payload: briefs
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

export function setProductNameQueryAction(q) {
  return {
    type: 'SET_PRODUCT_NAME_QUERY',
    payload: {
      key: 'productName',
      value: q
    }
  }
}
