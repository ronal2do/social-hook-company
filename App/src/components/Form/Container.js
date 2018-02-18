// Core
import React from 'react';
import PropTypes from 'prop-types';

// Presentational
import { View } from 'react-native';

// Redux
import { reduxForm } from 'redux-form';

const Form = ({
  children,
  name,
  onSubmit,
  initialValues,
  destroyOnUnmount,
  touchOnChange,
  ...custom
}) => {
  const ReduxForm = reduxForm({
    form: name,
    initialValues,
    destroyOnUnmount,
    touchOnChange
  })(() => (
    <View {...custom}>{children}</View>
  ));

  return (<ReduxForm onSubmit={onSubmit} />);
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}),
  destroyOnUnmount: PropTypes.bool,
  touchOnChange: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

Form.defaultProps = {
  initialValues: undefined,
  destroyOnUnmount: true,
  touchOnChange: true
};

export default Form;
