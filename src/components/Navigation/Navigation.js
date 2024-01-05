import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/user/selectors';
import { Link, Nav } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
}
