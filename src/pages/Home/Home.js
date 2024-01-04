import { SiHellofresh } from 'react-icons/si';
import Box from 'Box';
import { Container } from 'components/AppBar/AppBar.styled';
import { Text } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <Box ml="auto" mr="auto" pt="32px" pb="32px">
        <div>
          <Text>
            Welcome in our Phonebook Application!
            <SiHellofresh size="42px" color="#188CE8" />
          </Text>
        </div>
      </Box>
    </Container>
  );
};
