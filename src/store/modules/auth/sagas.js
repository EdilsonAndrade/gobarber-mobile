import {Alert} from 'react-native';
import { takeLatest, put, call, all } from 'redux-saga/effects';
import api from '~/services/api';
//import history from '~/services/history';
import { signinSuccess, signinFailure } from './actions'

export function* signin({ payload }) {
  try {
    
    const { email, password } = payload;
    const response = yield call(api.post, '/sessions', {
      email,
      password
    });
    const { token, user } = response.data;
    if (!token) {
      Alert.alert('Erro no login','Usuário inválido');
      return;
    }
    if (user.provider) {
      Alert.alert('Erro no login','Usuário não pode ser prestador de serviço');
    }
    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signinSuccess(token, user));
  //  history.push('/dashboard');

  } catch (error) {
    Alert.alert('Falha na autentição','Usuário ou senha inválidos');
    yield put(signinFailure());
  }

}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/users', {
      name,
      email,
      password,
    })

    //history.push('/');
  } catch (error) {
    Alert.alert('Erro no login','Usuário ou senha inválidos');
    yield put(signinFailure());
  }
}
export function setToken({payload}) {
  if (!payload) return;
  
  const { token } = payload.auth;
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export function signOut(){
  //history.push('/');
}
export default all(
  [
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGNIN_REQUEST', signin),
    takeLatest('@auth/SIGNUP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut)
  ]);