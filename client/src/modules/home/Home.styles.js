import styled from 'styled-components/native';

import styles, { em } from '../../utils/Style';

export const DoneTasksTouchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${em(1)};
  margin-bottom: ${em(1)};
  padding-left: ${em(1)};
`;
