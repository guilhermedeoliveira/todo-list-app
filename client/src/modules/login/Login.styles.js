import styled from 'styled-components/native';

import styles, { em } from '../../utils/Style';

export const SocialContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 5;
  background-color: ${({ color }) => color || styles.colors.white};
  
  paddingVertical: ${em(1)};
  paddingHorizontal: ${em(1)};
  margin-bottom: ${em(1)};
`;

export const styledTextStyles = {
  marginLeft: em(1)
};
