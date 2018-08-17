import React from 'react';
import { shape, string, bool, func } from 'prop-types';

import { CheckBox } from 'react-native-elements';

const Task = ({
  task: { id, text, isChecked }, onPressTask
}) => (
  <CheckBox
    title={text}
    checked={isChecked}
    checkedColor="green"
    onPress={() => onPressTask(id)}
  />
);

Task.propTypes = {
  task: shape({
    id: string.isRequired,
    text: string.isRequired,
    isChecked: bool.isRequired
  }).isRequired,
  onPressTask: func
};

Task.defaultProps = {
  onPressTask: () => {}
};

export default Task;
