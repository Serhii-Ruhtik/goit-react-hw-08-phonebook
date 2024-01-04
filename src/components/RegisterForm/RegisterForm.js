import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/user/operations';
import { selectIsLoading } from '../../redux/user/selectors';

import { Container } from 'components/AppBar/AppBar.styled';
import { AddBtn } from 'components/AddContact/AddContact.styled';
import { Input, Label } from './RegisterForm.styled';

const initialValues = {
  name: '',
  password: '',
  email: '',
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleSubmit = ({ name, password, email }, actions) => {
    dispatch(registerUser({ name, email, password }));
    actions.resetForm();
  };
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              autoComplete="on"
            />
          </Label>
          <Label>
            Login
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your login"
              autoComplete="on"
            />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              autoComplete="on"
            />
          </Label>
          <AddBtn type="submit" disabled={isLoading}>
            Sign Up
          </AddBtn>
        </Form>
      </Formik>
    </Container>
  );
};
export default RegisterForm;
