import { useSelector } from 'react-redux';

import { FaRegAddressBook } from 'react-icons/fa';

import { selectIsLoggedIn } from '../../redux/user/selectors';

import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import {
  AppBarTitle,
  AppBarTitleText,
  AppBarWrapper,
  Container,
  Header,
} from './AppBar.styled';
import React from 'react';

export function AppBarComponent() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Container>
        <AppBarWrapper>
          <AppBarTitle>
            <FaRegAddressBook />
            <AppBarTitleText>Phonebook</AppBarTitleText>
          </AppBarTitle>
          <Navigation />
        </AppBarWrapper>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
}

export const AppBar = React.memo(AppBarComponent);
