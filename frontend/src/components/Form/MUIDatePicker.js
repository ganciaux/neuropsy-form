import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MUITextField from './MUITextField';
import { ErrorMessage } from 'formik';

function MUIDatePicker({ id, label, formik, ...rest }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={formik.values[id]}
        onChange={(value) => {
          formik.setFieldValue(id, Date.parse(value));
        }}
        inputFormat="DD/MM/YYYY"
        renderInput={(params) => (
          <MUITextField
            {...params}
            id={id}
            label={label}
            formik={formik}
            error={formik.touched[id] && Boolean(formik.errors[id])}
            helperText={<ErrorMessage name={id} />}
            {...rest}
          />
        )}
      />
    </LocalizationProvider>
  );
}

export default MUIDatePicker;
