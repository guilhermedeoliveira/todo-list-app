import styled from 'styled-components/native';

import styles from '../utils/Style';

const StyledText = styled.Text`
  color: ${({ color }) => color || styles.colors.black};
  font-size: ${({ fontSize }) => fontSize || styles.fontSize.regular};
`;

export default StyledText;
