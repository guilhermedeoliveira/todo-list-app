import styled from 'styled-components/native';

import styles, { em } from '../utils/Style';

export const ScreenWrapper = styled.ScrollView``;

export const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor || styles.colors.white};
  padding-top: ${em(4)};
  padding-horizontal: ${em(2)};
`;

export const HeaderContainer = styled.View`
  margin-vertical: ${em(1)};
  padding-horizontal: ${em(1)};
`;

export const SearchBar = styled.TextInput`
  font-size: ${styles.fontSize.large};
  padding-vertical: ${em(0.5)};
  padding-horizontal: ${em(1)};
  background-color: ${styles.colors.white};

  border-width: 1.5;
  border-color: ${styles.colors.gray};
`;

// Texts

export const StyledText = styled.Text`
  color: ${({ color }) => color || styles.colors.black};
  font-size: ${({ fontSize }) => fontSize || styles.fontSize.regular};
`;

export const TextNavigate = styled(StyledText)`
  align-self: flex-start;
  text-decoration-line: underline;

  margin-top: ${em(1)};
`;
