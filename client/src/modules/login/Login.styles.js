import styled from 'styled-components/native';

import StyledText from '../../components/StyledText';

import styles, { em } from '../../utils/Style';

export const SocialComponentsWrapper = styled.View`
  margin-top: ${em(3)};
`;

export const WelcomeText = styled(StyledText)``;

export const SignInText = styled(StyledText)`
  margin-top: ${em(2)};
`;

export const SocialContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 5;
  background-color: ${({ color }) => color || styles.colors.white};
  
  paddingVertical: ${em(1)};
  paddingHorizontal: ${em(1)};
  margin-bottom: ${em(1)};
`;

export const DoNotSyncText = styled(StyledText)`
  align-self: flex-end;
  textDecorationLine: underline;

  margin-top: ${em(1)};
`;

export const styledTextStyles = {
  marginLeft: em(1)
};
