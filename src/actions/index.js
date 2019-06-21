import {
  CHANGE_TEST,
} from './actionTypes'

export function changeTest() {
  return dispatch => {
    dispatch(CHANGE_TEST)
  }
}
