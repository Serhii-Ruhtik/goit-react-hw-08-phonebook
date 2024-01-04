import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/user/operations';
import { selectIsLoading, selectUser } from 'redux/user/selectors';
import { ExtraText, SubmitBtn, Text, Wrapper } from './UserMenu.styled';

export function UserMenu() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleClick = () => {
    dispatch(logOutUser());
  };
  return (
    <Wrapper>
      <Text>
        Welcome, <ExtraText>{`${name}`}</ExtraText>
      </Text>
      <SubmitBtn type="button" onClick={handleClick} disabled={isLoading}>
        Log Out
      </SubmitBtn>
    </Wrapper>
  );
}
