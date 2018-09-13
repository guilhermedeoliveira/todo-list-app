import React, { Component } from 'react';

import { SafeContainer } from '../../components/shared';
import Header from '../../components/Header';
import TaskList from '../task/TaskList';
import DoneTasksToggle from './DoneTasksToggle';

import tasks from './Home.data';
import { filterTaskList, getfilteredListLength } from '../../utils/helpers/array';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    tasks,
    isShowingDoneTasks: false
  }

  onToggleDoneTasks = () =>
    this.setState(prevState => ({
      isShowingDoneTasks: !prevState.isShowingDoneTasks
    }));

  onPressTask = taskId =>
    this.setState(prevState => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isChecked: !task.isChecked };
        }

        return task;
      })
    }));

  render() {
    const { tasks, isShowingDoneTasks } = this.state;

    return (
      <SafeContainer>
        <Header title="My tasks" />

        <TaskList
          tasks={filterTaskList(tasks, false)}
          onPressTask={this.onPressTask}
        />

        <DoneTasksToggle
          onToggleDoneTasks={this.onToggleDoneTasks}
          isShowingDoneTasks={isShowingDoneTasks}
          numberOfDoneTasks={getfilteredListLength(tasks, true)}
        />

        {isShowingDoneTasks && (
          <TaskList
            tasks={filterTaskList(tasks, true)}
            onPressTask={this.onPressTask}
          />
        )}

      </SafeContainer>
    );
  }
}

export default HomeScreen;
