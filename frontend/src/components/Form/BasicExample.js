import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { confirm } from '../Confirm/ConfirmGlobal';
import { useFormik } from 'formik';

function BasicExample() {
  const formik = useFormik({
    initialValues: { email: '' },
  });

  console.log(formik.values);

  const modal = async () => {
    if (await confirm({ title: 'Title', body: 'Body' })) {
      console.log('confirm OK');
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" name="email">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <Stack direction="horizontal">
        <Form.Control className="me-auto" placeholder="Add your item here..." />
        <Button variant="secondary">Submit</Button>
        <div className="vr" />
        <Button variant="outline-danger">Reset</Button>
      </Stack>
      <Button variant="primary" onClick={() => modal()}>
        modal
      </Button>
    </Form>
  );
}

export default BasicExample;
