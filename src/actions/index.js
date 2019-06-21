import axios from 'axios'

import {
  setProducts,
  addBrief,
} from './actionTypes'

import { buildRestUrl } from '../utils/rest'


export function loadProducts() {
  return async dispatch => {
    try {
      const { data: products } = await axios.get(buildRestUrl('/products'))
      dispatch(setProducts(products))
    } catch (e) {
      // handle error in server
    }
  }
}

export function createBrief(brief) {
  return async dispatch => {
    try {
      const { data: createdBrief } = await axios.post(buildRestUrl('/briefs'), brief)
      dispatch(addBrief(createdBrief))
    } catch (e) {
      // handle error in server
    }
  }
}
