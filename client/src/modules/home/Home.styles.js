import styled from 'styled-components/native';

import { em } from '../../utils/Style';

export const DoneTasksTouchable = styled.TouchableOpacity`
  flex-direction: row;

  margin-top: ${em(1)};
  margin-bottom: ${em(1)};
  padding-left: ${em(1)};
`;

export const doneTasksTextStyle = {
  marginRight: em(1)
};
