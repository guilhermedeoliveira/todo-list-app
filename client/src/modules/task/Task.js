import React from 'react';
import { string, bool, func } from 'prop-types';

import { CheckBox } from 'react-native-elements';

const Task = ({
  id, text, isChecked, onPressTask
}) => (
  <CheckBox
    title={text}
    checked={isChecked}
    checkedColor="green"
    onPress={() => onPressTask(id)}
  />
);

Task.propTypes = {
  id: string.isRequired,
  text: string.isRequired,
  isChecked: bool.isRequired,
  onPressTask: func
};

Task.defaultProps = {
  onPressTask: () => {}
};

export default Task;
