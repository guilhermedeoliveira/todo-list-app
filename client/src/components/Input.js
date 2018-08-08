import React, { PureComponent } from 'react';
import { func, string, bool } from 'prop-types';
import styled from 'styled-components/native';

import {
  FormInput,
  FormValidationMessage,
  FormLabel
} from 'react-native-elements';
// TODO: update `react-native-elements` to 1.0.0 when releases

import styles from '../utils/Style';

class Input extends PureComponent {
  static propTypes = {
    onChange: func,
    onTouch: func,
    name: string.isRequired,
    label: string.isRequired,
    error: bool
  };

  static defaultProps = {
    onChange: () => { },
    onTouch: () => { },
    error: false
  };

  _handleChange = (value) => {
    const { onChange, name } = this.props;

    onChange(name, value);
  };

  _handleTouch = () => {
    const { onTouch, name } = this.props;

    onTouch(name);
  };

  render() {
    const { label, error, ...rest } = this.props;

    return (
      <InputContainer>
        <FormLabel>{label}</FormLabel>
        <FormInput
          onChangeText={this._handleChange}
          onBlur={this._handleTouch}
          placeholder={label}
          underlineColorAndroid={error ? styles.colors.red : styles.colors.gray}
          {...rest}
        />
        {error && <FormValidationMessage>{error}</FormValidationMessage>}
      </InputContainer>
    );
  }
}

const InputContainer = styled.View`
  width: 100%;
  align-self: center;
`;

export default Input;
