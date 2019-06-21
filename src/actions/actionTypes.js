export function setProducts(products) {
  return {
    type: 'SET_PRODUCTS',
    payload: products
  }
}

export function addBrief(brief) {
  return {
    type: 'ADD_BRIEF',
    payload: brief
  }
}
