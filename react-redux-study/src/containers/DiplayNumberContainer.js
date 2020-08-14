// import React from 'react';
import DisplayNumber from '../components/DisplayNumber';
import { connect } from 'react-redux';

const stateProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(stateProps, null)(DisplayNumber);
