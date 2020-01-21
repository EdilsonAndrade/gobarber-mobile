import React from 'react';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';
import {
  Container,
  Form,
  FormInput,
  SubmiButton,
  SignLink,
  SignLinkText,
} from './styles';
import Background from '~/components/Background';

export default function Signin({navigation}) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite seu e-mail"
          />
        </Form>
        <SubmiButton onPress={() => {}}>Entrar</SubmiButton>
        <SignLink
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

Signin.navigationOptions = () => ({
  title: 'Login',
});
