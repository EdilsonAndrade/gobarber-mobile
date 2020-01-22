import { call, put, takeLatest, all } from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailed } from '~/store/modules/user/actions';


function* updateProfileRequest({ payload }) {

  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email},
      rest.oldPassword ? rest : {}
    )
      
    const response = yield call(api.put, '/users', profile);
    Alert.alert("Sucesso", "Pefil atualizado com sucesso");
    
    
    yield put(updateProfileSuccess(response.data));

  } catch (error) {
    Alert.alert("Erro", `Ocorreu um erro verifique os dados ${error}`);
    yield put(updateProfileFailed());
    
  }

}
export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest)
])