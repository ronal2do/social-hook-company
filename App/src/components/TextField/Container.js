// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Field } from 'redux-form';

// Services
import { t } from 'services';

// Assets
import styles from './styles';

const TextFieldComponent = ({
  password,
  light,
  label,
  input: { onChange },
  meta: { touched, error },
  ...custom
}) => (
  <View style={styles.item}>
    <Text
      style={StyleSheet.flatten([
        styles.label,
        light && styles.lightColorLabel,
        touched && error !== undefined && styles.errorLabel
      ])}
    >
      {t(label)}
    </Text>
    <TextInput
      onChange={onChange}
      secureTextEntry={password}
      style={StyleSheet.flatten([
        styles.input,
        light && styles.lightInput,
        touched && error !== undefined && styles.errorInput
      ])}
      {...custom}
    />
    <If condition={touched && error !== undefined}>
      <Text style={styles.error}>{error}</Text>
    </If>
  </View>
);

const TextField = ({ password, light, label, name, validations, ...custom }) => (
  <Field
    password={password}
    light={light}
    label={label}
    name={name}
    component={TextFieldComponent}
    validate={validations}
    {...custom}
  />
);

TextFieldComponent.propTypes = {
  password: PropTypes.bool.isRequired,
  light: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired
};

TextField.propTypes = {
  password: PropTypes.bool,
  light: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  validations: PropTypes.arrayOf(PropTypes.func)
};

TextField.defaultProps = {
  password: false,
  light: false,
  validations: []
};

export default TextField;
