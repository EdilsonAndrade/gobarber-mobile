import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import logo from '~/assets/logo.png';
import {useDispatch, useSelector} from 'react-redux';
import {signinRequest} from '~/store/modules/auth/actions'

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
  const refPassword = useRef();
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch =useDispatch();
 const loading = useSelector(state=>state.auth.loading);
  function handleSubmit() {
    dispatch(signinRequest(email, password));
  }
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
            returnKeyType="next"
            onSubmitEditing={() => refPassword.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={refPassword}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
        </Form>
        <SubmiButton onPress={handleSubmit} loading={loading}>Entrar</SubmiButton>
        <SignLink onPress={() => navigation.navigate('Signup')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

Signin.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
