import React from 'react';

import { DoneTasksTouchable } from './Home.styles';
import StyledText from '../../components/StyledText';

import styles from '../../utils/Style';

const DoneTasksToggle = ({ onToggleDoneTasks, isShowingDoneTasks }) => (
  <DoneTasksTouchable onPress={onToggleDoneTasks}>
    <StyledText fontSize={styles.fontSize.large}>
      {isShowingDoneTasks ? 'Hide done tasks' : 'Show done tasks'}
    </StyledText>
  </DoneTasksTouchable>
);

export default DoneTasksToggle;
