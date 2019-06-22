import { combineReducers } from 'redux';

import products from './products'
import briefs from './briefs'
import query from './query'

export default combineReducers({
  products,
  briefs,
  query,
});
