import React from 'react';
import { string, bool } from 'prop-types';

import { CheckBox } from 'react-native-elements';

const Task = ({ text, isChecked }) => (
  <CheckBox
    title={text}
    checked={isChecked}
    checkedColor="green"
  />
);

Task.propTypes = {
  text: string.isRequired,
  isChecked: bool
};

Task.defaultProps = {
  isChecked: true
};

export default Task;
