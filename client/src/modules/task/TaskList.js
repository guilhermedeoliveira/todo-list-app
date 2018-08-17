import React from 'react';
import { arrayOf, shape } from 'prop-types';

import Task from './Task';

const TaskList = ({ tasks, ...rest }) => (
  tasks.map(task => (
    <Task
      key={task.id}
      id={task.id}
      text={task.text}
      isChecked={task.isChecked}
      {...rest}
    />
  ))
);

TaskList.propTypes = {
  tasks: arrayOf(shape(Task.propTypes))
};

export default TaskList;
