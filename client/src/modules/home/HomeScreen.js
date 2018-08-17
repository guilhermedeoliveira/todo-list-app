import React, { Component } from 'react';

import { SafeContainer } from '../../components/shared';
import Header from '../../components/Header';
import Task from '../task/Task';

import tasks from './Home.data';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    tasks
  }

  onPressTask = (taskId) =>
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isChecked: !task.isChecked };
        }

        return task;
      })
    }));

  render() {
    return (
      <SafeContainer>
        <Header title="My tasks" />
        {this.state.tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onPressTask={this.onPressTask}
          />
        ))}
      </SafeContainer>
    );
  }
}

export default HomeScreen;
