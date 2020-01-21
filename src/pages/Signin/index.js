import React from 'react';
import {Container, Text} from './styles';
import Background from '~/components/Background';

export default function Signin() {
  return (
    <Background>
      <Container>
        <Text>Login page</Text>
      </Container>
    </Background>
  );
}

Signin.navigationOptions = () => ({
  title: 'Login',
});
