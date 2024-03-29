import TextField from '@mui/material/TextField';
import { ErrorMessage } from 'formik';

function MUITextField({ id, label, formik, ...rest }) {
  return (
    <TextField
      id={id}
      name={id}
      label={label}
      value={formik.values[id]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[id] && Boolean(formik.errors[id])}
      helperText={<ErrorMessage name={id} />}
      variant="outlined"
      margin="dense"
      fullWidth
      {...rest}
    />
  );
}

export default MUITextField;
