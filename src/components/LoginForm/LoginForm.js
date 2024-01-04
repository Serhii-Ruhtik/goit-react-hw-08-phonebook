import React from 'react';
import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../redux/user/operations';
import {
  selectError,
  selectIsLoading,
  selectIsLoggedIn,
} from '../../redux/user/selectors';
import { Container } from 'components/AppBar/AppBar.styled';
import { AddBtn } from 'components/AddContact/AddContact.styled';
import { Input, Label } from 'components/RegisterForm/RegisterForm.styled';

const initialValues = {
  password: '',
  email: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuthentificationError = useSelector(selectError);

  const isLoading = useSelector(selectIsLoading);
  const submitHandler = ({ email, password }, actions) => {
    dispatch(logInUser({ email, password }));
    if (isLoggedIn && isAuthentificationError === null) {
      actions.resetForm();
    }
  };
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
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
            Log In
          </AddBtn>
        </Form>
      </Formik>
    </Container>
  );
};
