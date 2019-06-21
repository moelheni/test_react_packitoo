import axios from 'axios'

import {
  requestProducts,
  successProducts,
  requestAddBrief,
  successAddBrief,
} from './actionTypes'

import { buildRestUrl } from '../utils/rest'


export function loadProducts() {
  return async dispatch => {
    dispatch(requestProducts())
    try {
      const { data: products } = await axios.get(buildRestUrl('/products'))
      dispatch(successProducts(products))
    } catch (e) {
      // handle error in server
    }
  }
}

export function createBrief(brief) {
  return async dispatch => {
    dispatch(requestAddBrief())
    try {
      const { data: createdBrief } = await axios.post(buildRestUrl('/briefs'), brief)
      dispatch(successAddBrief(createdBrief))
    } catch (e) {
      // handle error in server
      console.warn(e)
    }
  }
}
