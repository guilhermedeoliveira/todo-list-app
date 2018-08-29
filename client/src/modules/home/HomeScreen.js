import React, { Component } from 'react';

import { SafeContainer } from '../../components/shared';
import Header from '../../components/Header';
import TaskList from '../task/TaskList';
import DoneTasksContainer from './DoneTasksContainer';

import tasks from './Home.data';
import { filterTaskList } from '../../utils/helpers/array';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    tasks,
    isShowingDoneTasks: false
  }

  onToggleDoneTasks = () => {
    this.setState(prevState => ({
      isShowingDoneTasks: !prevState.isShowingDoneTasks
    }));
  }

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
    console.log('state', this.state);

    return (
      <SafeContainer>
        <Header title="My tasks" />

        <TaskList
          tasks={filterTaskList(tasks, false)}
          onPressTask={this.onPressTask}
        />

        <DoneTasksContainer
          onPressDoneTasks={this.onToggleDoneTasks}
        >
          {isShowingDoneTasks && <TaskList
            tasks={filterTaskList(tasks, true)}
            onPressTask={this.onPressTask}
          />}
        </DoneTasksContainer>
      </SafeContainer>
    );
  }
}

export default HomeScreen;
