import { Formik, Form, useField, useFormikContext } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import MUITextFiel from './MUITextFiel';
import { TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const YupValidation = yup.object().shape({
  name: yup.string('Renseignez le nom').required('Le nom est obligatoire'),
  birthdate: yup
    .string('Renseignez la date')
    .required('La date est obligatoire'),
  firstname: yup
    .string('Renseignez le prénom')
    .required('Le prénom est obligatoire'),
  phone: yup.string('Renseignez la date de numero de téléphone'),
  email: yup.string('Enter your email').email('Renseignez un email valide'),
  gsm: yup.string('Renseignez le numéro de portable'),
  address: yup.string(`Renseignez l'adresse`),
  city: yup.string('Renseignez la ville'),
  country: yup.string('Renseignez le pays'),
  zip: yup.string('Renseignez le code postal'),
});

const handleSubmit = (values, props) => {
  console.log(values);
  alert(JSON.stringify(values));
  props.resetForm();
};

function Client() {
  const initialValues = {
    name: '',
    firstname: '',
    birthdate: '',
    email: '',
    phone: '',
    gsm: '',
    address: '',
    city: '',
    country: '',
    zip: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={YupValidation}
      onSubmit={handleSubmit}
    >
      {(props) => {
        return (
          <Form>
            <MUITextFiel id="name" label="Nom" formik={props} required />
            <MUITextFiel
              id="firstname"
              label="Prénom"
              formik={props}
              required
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={props.values.birthdate}
                onChange={(value) => {
                  props.setFieldValue('birthdate', Date.parse(value));
                }}
                renderInput={(params) => (
                  <MUITextFiel
                    {...params}
                    id="birthdate"
                    label="Date de naissance"
                    formik={props}
                  />
                )}
              />
            </LocalizationProvider>

            <MUITextFiel id="phone" label="Tél." formik={props} />
            <MUITextFiel id="gsm" label="Portable" formik={props} />
            <MUITextFiel id="address" label="Adresse" formik={props} />
            <MUITextFiel id="city" label="Ville" formik={props} />
            <MUITextFiel id="zip" label="Code postal" formik={props} />
            <MUITextFiel id="country" label="Pays" formik={props} />
            <Button variant="contained" type="submit" color="primary" fullWidth>
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Client;
