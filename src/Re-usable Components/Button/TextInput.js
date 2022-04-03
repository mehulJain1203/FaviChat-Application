import React from 'react'
import Grid from '@mui/material/Grid';

export const TextInput = ({
  fieldName,
  register,
  errors,
  placeHolder,
  isRequired,
  maximLength,
  minimLength,
  type
}) => {
  return (
    <>
    <Grid item xs={12}>
      <input
      className="input-field"
      type={type}
        placeholder={placeHolder}
        {...register(fieldName, {
          required: {
            value: isRequired,
            message: "This is required",
          },
          maxLength: {
            value: maximLength,
            message: `Value must be maximum ${maximLength}`,
          },
          minLength: {
            value: minimLength,
            message: `Value must be minimum ${minimLength}`,
          },
        })}
      />

      <p>
        {" "}
        {
          //Shows if error exist
          errors[fieldName] && errors[fieldName].message
        }{" "}
      </p>
    </Grid>
    </>
  );
};
