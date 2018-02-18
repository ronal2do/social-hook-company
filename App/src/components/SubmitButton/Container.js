// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { Button } from 'components';

const SubmitButton = ({ children, onPress, ...props }) => (
  <Button onPress={onPress} {...props}>{children}</Button>
);

SubmitButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  onPress: PropTypes.func.isRequired
};

export default SubmitButton;
