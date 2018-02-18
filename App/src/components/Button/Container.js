// Core
import React from 'react';
import PropTypes from 'prop-types';
// import stylePropType from 'react-style-proptype';

// Presentational
import { Platform, View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

// Assets
import styles from './styles';

const defineColor = ({ primary, secundary, success, danger, warning, info, black, white }) => {
  if(primary) return 'primary';
  if(secundary) return 'secundary';
  if(success) return 'success';
  if(danger) return 'danger';
  if(warning) return 'warning';
  if(info) return 'info';
  if(black) return 'black';
  if(white) return 'success';

  return 'default';
};

const Button = ({ children, style, ...props }) => (
  <Choose>
    <When condition={Platform.OS === 'android'}>
      <TouchableNativeFeedback
        {...props}
        style={[styles.buttonContainer, style]}
        background={styles[`button-color-${defineColor(props)}`].backgroundColor}
      >
        <View
          style={[
            styles.buttonContainer,
            styles[`button-color-${defineColor(props)}`],
            style
          ]}
        >
          {children}
        </View>
      </TouchableNativeFeedback>
    </When>
    <Otherwise>
      <TouchableOpacity
        {...props}
        style={[
          styles.buttonContainer,
          styles[`button-color-${defineColor(props)}`],
          style
        ]}
      >
        {children}
      </TouchableOpacity>
    </Otherwise>
  </Choose>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  style: View.propTypes.style,
  onPress: PropTypes.func,
  success: PropTypes.bool,
  danger: PropTypes.bool,
  warning: PropTypes.bool,
  info: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool
};

Button.defaultProps = {
  style: undefined,
  onPress: undefined,
  success: false,
  danger: false,
  warning: false,
  info: false,
  black: false,
  white: false
};

export default Button;
