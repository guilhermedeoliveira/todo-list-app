import React from 'react';
import { number, string, func } from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'; /* eslint-disable-line */

import { SocialContainer, styledTextStyles } from './Login.styles';
import StyledText from '../../components/StyledText';

import styles from '../../utils/Style';

const SocialButton = ({
  iconName,
  socialName,
  color,
  iconSize,
  onPress
}) => (
  <SocialContainer color={color} onPress={onPress} activeOpacity={0.9}>
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

SocialButton.propTypes = {
  iconName: string.isRequired,
  socialName: string.isRequired,
  color: string.isRequired,
  iconSize: number,
  onPress: func
};

SocialButton.defaultProps = {
  iconSize: 32,
  onPress: () => {}
};

export default SocialButton;
