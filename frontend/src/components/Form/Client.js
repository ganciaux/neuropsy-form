import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Box, Grid, Paper, Typography } from '@mui/material';
import MUITextField from './MUITextField';
import MUIDatePicker from './MUIDatePicker';
import MUISelect from './MUISelect';
import MUIButton from './MUIButton';
import { createClient } from '../../features/clients/clientSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const country = [
  {
    value: 'france',
    label: 'France',
  },
  {
    value: 'luxembourg',
    label: 'Luxembourg',
  },
  {
    value: 'belgique',
    label: 'Belgique',
  },
];

const YupValidation = yup.object().shape({
  name: yup.string('Renseignez le nom').required('Le nom est obligatoire'),
  firstname: yup
    .string('Renseignez le prénom')
    .required('Le prénom est obligatoire'),
  birthdate: yup
    .string('Renseignez la date')
    .required('La date est obligatoire')
    .nullable(true),
  phone: yup.string('Renseignez la date de numero de téléphone'),
  email: yup.string('Enter your email').email('Renseignez un email valide'),
  gsm: yup.string('Renseignez le numéro de portable'),
  address: yup.string(`Renseignez l'adresse`),
  city: yup.string('Renseignez la ville'),
  country: yup.string('Renseignez le pays').required('Le pays est obligatoire'),
  zip: yup.string('Renseignez le code postal'),
});

function Client() {
  const { isLoading } = useSelector((state) => state.client);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, formik) => {
    console.log(values);
    dispatch(createClient(values));
    formik.resetForm();
    navigate('/clients');
  };

  const initialValues = {
    name: 'test',
    firstname: 'test',
    birthdate: null,
    email: 'test@test.fr',
    phone: 'test',
    gsm: 'test',
    address: 'test',
    city: 'test',
    country: 'france',
    zip: 'test',
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Client</Typography>

            <Formik
              initialValues={initialValues}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(formik) => {
                console.log(formik.errors);
                return (
                  <Form>
                    <MUITextField
                      id="name"
                      label="Nom"
                      formik={formik}
                      required
                    />
                    <MUITextField
                      id="firstname"
                      label="Prénom"
                      formik={formik}
                      required
                    />
                    <MUIDatePicker
                      id="birthdate"
                      label="Date de naissance"
                      formik={formik}
                    />
                    <MUITextField id="phone" label="Tél." formik={formik} />
                    <MUITextField id="gsm" label="Portable" formik={formik} />
                    <MUITextField id="email" label="Email" formik={formik} />
                    <MUITextField
                      id="address"
                      label="Adresse"
                      formik={formik}
                    />
                    <MUITextField id="city" label="Ville" formik={formik} />
                    <MUITextField
                      id="zip"
                      label="Code postal"
                      formik={formik}
                    />
                    <MUISelect
                      id="country"
                      label="Pays"
                      formik={formik}
                      options={country}
                    />
                    <MUIButton label="Submit" />
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={3} xs={false}></Grid>
    </Grid>
  );
}

export default Client;
