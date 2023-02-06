import { TextField, MenuItem } from '@mui/material';
import { ErrorMessage } from 'formik';

function MUISelect({ id, label, formik, options, ...rest }) {
  return (
    <TextField
      select
      id={id}
      label={label}
      value={formik.values[id]}
      onChange={(e) => {
        formik.setFieldValue(id, e.target.value);
      }}
      margin="dense"
      variant="outlined"
      fullWidth
      error={formik.touched[id] && Boolean(formik.errors[id])}
      helperText={<ErrorMessage name={id} />}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

export default MUISelect;
