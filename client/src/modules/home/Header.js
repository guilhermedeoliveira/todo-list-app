import React from 'react';
import { Text, View } from 'react-native';
import { string } from 'prop-types';

const Header = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Header.propTypes = {
  title: string.isRequired
};

export default Header;
