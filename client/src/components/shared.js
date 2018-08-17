import styled from 'styled-components/native';

import styles, { em } from '../utils/Style';

export const WrapperScreen = styled.ScrollView``;

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || styles.colors.white};
  padding-top: ${em(4)};
  paddingHorizontal: ${em(2)};
`;

export const HeaderContainer = styled.View`
  paddingHorizontal: ${em(1)};
  margin-bottom: ${em(1.5)};
`;
