import React, { Component } from 'react';


import { SafeContainer, ScreenWrapper, SearchBar } from '../../components/shared';
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
    searchBarValue: '',
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

  onUpdateSearch = searchBarValue =>
    this.setState({ searchBarValue });

  onCreateTask = () => {
    const { searchBarValue } = this.state;
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        { id: 'dasd', text: searchBarValue.trim(), isChecked: false }
      ]
    }));
  };

  render() {
    const {
      searchBarValue, tasks, isShowingDoneTasks
    } = this.state;

    return (
      <SafeContainer>
        <ScreenWrapper
          keyboardShouldPersistTaps="always"
          // keyboardShouldPersistTaps="never"
          keyboardDismissMode="on-drag"
        >
          <SearchBar
            value={searchBarValue}
            placeholder="Create task"
            onChangeText={q => this.onUpdateSearch(q)}
            onSubmitEditing={this.onCreateTask}
          />

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
        </ScreenWrapper>
      </SafeContainer>
    );
  }
}

export default HomeScreen;
