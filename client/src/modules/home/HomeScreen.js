import React, { Component } from 'react';

import { SafeContainer } from './Home.styles';
import Header from './Header';
import Task from './Task';

import tasks from './Home.data';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeContainer>
        <Header title="My tasks" />
        {tasks.map((task) => (
          <Task key={task.id} text={task.text} isChecked={task.isChecked} />
        ))}
      </SafeContainer>
    );
  }
}

export default HomeScreen;
