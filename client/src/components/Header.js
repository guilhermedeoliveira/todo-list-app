import React from 'react';
import { string } from 'prop-types';

import { HeaderContainer } from './shared';
import StyledText from './StyledText';

import styles from '../utils/Style';

const Header = ({ title }) => (
  <HeaderContainer>
    <StyledText fontSize={styles.fontSize.extraHuge}>
      {title}
    </StyledText>
  </HeaderContainer>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;
