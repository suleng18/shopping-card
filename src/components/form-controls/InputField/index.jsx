import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, lable, disabled } = props;
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      fullWidth
      label={lable}
      disabled={disabled}
    />
  );
}

export default InputField;
