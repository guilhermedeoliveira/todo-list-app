import styled from 'styled-components/native';

import styles from '../../utils/Style';

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor || styles.colors.white};
`;
