import React from 'react';
import { connect } from 'react-redux';

import { changeTest } from '../actions'

function App({ test, changeTest }) {
  return (
    <div className="App">
      <h1 onClick={changeTest}>{test}</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  test: state.testReducer
})

const mapDispatchToProps = dispatch => ({
  changeTest: () => dispatch(changeTest())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
