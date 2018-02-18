// Core
import React from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import { Text as RNText } from 'react-native';

// Services
import { t } from 'services';

// Assets
import styles from './styles';

const Text = ({
  phrase,
  values,
  upper,
  lower,
  light,
  bold,
  disabled,
  children,
  style,
  ...props
}) => (
  <RNText
    style={[
      styles[light ? 'light' : 'dark'],
      styles[bold ? 'bold' : ''],
      styles[disabled ? 'disabled' : ''],
      style
    ]}
    {...props}
  >
    <Choose>
      <When condition={upper}>
        {(phrase ? t(phrase, values) : children).toUpperCase()}
      </When>
      <When condition={lower}>
        {(phrase ? t(phrase, values) : children).toLowerCase()}
      </When>
      <Otherwise>
        {phrase ? t(phrase, values) : children}
      </Otherwise>
    </Choose>
  </RNText>
);

Text.propTypes = {
  phrase: PropTypes.string,
  values: PropTypes.shape({}),
  upper: PropTypes.bool,
  lower: PropTypes.bool,
  light: PropTypes.bool,
  bold: PropTypes.bool,
  disabled: PropTypes.bool,
  style: RNText.propTypes.style,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

Text.defaultProps = {
  phrase: undefined,
  values: undefined,
  upper: false,
  lower: false,
  light: false,
  bold: false,
  disabled: false,
  style: undefined,
  children: ''
};

export default Text;
