import axios from 'axios'

import {
  setProducts,
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
