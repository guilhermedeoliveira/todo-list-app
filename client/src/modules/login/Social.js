import React from 'react';
import { number, string } from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'; /* eslint-disable-line */

import { SocialContainer, styledTextStyles } from './Login.styles';
import StyledText from '../../components/StyledText';

import styles from '../../utils/Style';

const Social = ({
  iconName,
  socialName,
  color,
  iconSize
}) => (
  <SocialContainer color={color}>
    <FontAwesome name={iconName} size={iconSize} color={styles.colors.white} />
    <StyledText
      fontSize={styles.fontSize.large}
      color={styles.colors.white}
      style={styledTextStyles}
    >
      Login with {socialName}
    </StyledText>
  </SocialContainer>
);

Social.propTypes = {
  iconName: string.isRequired,
  socialName: string.isRequired,
  color: string.isRequired,
  iconSize: number
};

Social.defaultProps = {
  iconSize: 32
};

export default Social;
