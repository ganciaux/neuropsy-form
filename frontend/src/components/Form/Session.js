import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Box, Grid, Paper, Skeleton, Typography } from '@mui/material';
import MUITextField from './MUITextField';
import MUIDatePicker from './MUIDatePicker';
import MUISelect from './MUISelect';
import MUIButton from './MUIButton';
import { getClients } from '../../features/clients/clientSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const types = [
  {
    value: 'bilan',
    label: 'Bilan',
  },
  {
    value: 'remdediation',
    label: 'Remédiation',
  },
];

const status = [
  {
    value: 'ok',
    label: 'Ok',
  },
  {
    value: 'canceled',
    label: 'Annulé',
  },
];

const YupValidation = yup.object().shape({
  client: yup
    .string('Renseignez le client')
    .required('Le client est obligatoire'),
  type: yup.string('Renseignez le type').required('Le type est obligatoire'),
  date: yup
    .string('Renseignez la date')
    .required('La date est obligatoire')
    .nullable(true),
  status: yup
    .string('Renseignez le statut')
    .required('Le statut est obligatoire'),
  comment: yup.string('Renseignez le commentaire'),
});

function Session() {
  const { clients, isLoading, isSuccess, clientOptions } = useSelector(
    (store) => store.client,
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, []);

  const handleSubmit = (values, formik) => {
    console.log(values);
    formik.resetForm();
    navigate('/clients');
  };

  const initialValues = {
    client: '',
    type: '',
    date: null,
    status: '',
    comment: '',
  };

  return (
    <Grid container>
      <Grid item sm={3} xs={false}></Grid>
      <Grid item sm={6} xs={12}>
        <Paper>
          <Box m={5} p={3}>
            <Typography variant="h5">Rendez-vous</Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={YupValidation}
              onSubmit={handleSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    {isLoading && (
                      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    )}
                    {!isLoading && (
                      <MUISelect
                        id="client"
                        label="Client"
                        formik={formik}
                        options={clientOptions}
                      />
                    )}
                    <MUIDatePicker
                      id="date"
                      label="Date du rendez-vous"
                      formik={formik}
                    />
                    <MUISelect
                      id="type"
                      label="Type"
                      formik={formik}
                      options={types}
                    />
                    <MUISelect
                      id="status"
                      label="Status"
                      formik={formik}
                      options={status}
                    />
                    <MUITextField
                      id="comment"
                      label="Commentaire"
                      formik={formik}
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

export default Session;
