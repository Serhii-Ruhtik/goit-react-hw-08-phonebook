import { Link } from 'components/Navigation/Navigation.styled';
import { AuthWrapper } from './AuthNav.styled';

export function AuthNav() {
  return (
    <AuthWrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthWrapper>
  );
}
