import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {signupRequest} from '~/store/modules/auth/actions'
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

export default function Signup({navigation}) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch =useDispatch();
  const loading = useSelector(state=>state.auth.loading);
  
 function handleSubmit() {
    dispatch(signupRequest(name, email, password));
  }
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Seu senha"
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
        </Form>
        <SubmiButton onPress={handleSubmit} loading={loading}>Cadastrar</SubmiButton>
        <SignLink onPress={() => navigation.navigate('Signin')}>
          <SignLinkText>Ja tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
Signup.propTypes = {
  navigation: PropTypes.shape().isRequired,
};
