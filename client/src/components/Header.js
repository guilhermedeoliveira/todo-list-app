import React from 'react';
import { string } from 'prop-types';

import { HeaderContainer, StyledText } from './shared';

import styles from '../utils/Style';

const Header = ({ title }) => (
  <HeaderContainer>
    <StyledText fontSize={styles.fontSize.huge}>
      {title}
    </StyledText>
  </HeaderContainer>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;
