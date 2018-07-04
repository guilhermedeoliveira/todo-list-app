import React from 'react';
import { string } from 'prop-types';

import { HeaderContainer } from './Home.styles';
import StyledText from '../../components/StyledText';

import styles from '../../utils/Style';

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
