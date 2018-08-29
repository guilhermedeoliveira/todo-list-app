import React from 'react';
import { func, bool, number } from 'prop-types';

import { DoneTasksTouchable, doneTasksTextStyle } from './Home.styles';
import StyledText from '../../components/StyledText';

import styles from '../../utils/Style';

const DoneTasksToggle = ({
  onToggleDoneTasks, isShowingDoneTasks, numberOfDoneTasks
}) => (
  <DoneTasksTouchable onPress={onToggleDoneTasks}>
    <StyledText fontSize={styles.fontSize.large} style={doneTasksTextStyle}>
      {isShowingDoneTasks ? 'Hide done tasks' : 'Show done tasks'}
    </StyledText>
    <StyledText fontSize={styles.fontSize.large}>
      {`(${numberOfDoneTasks})`}
    </StyledText>
  </DoneTasksTouchable>
);

DoneTasksToggle.propTypes = {
  onToggleDoneTasks: func,
  isShowingDoneTasks: bool,
  numberOfDoneTasks: number
};

DoneTasksToggle.defaultProps = {
  onToggleDoneTasks: () => {},
  isShowingDoneTasks: false,
  numberOfDoneTasks: 0
};

export default DoneTasksToggle;
