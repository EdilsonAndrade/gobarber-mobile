import AsynctStorage from '@react-native-community/async-storage'
import {persistReducer} from 'redux-persist'
export default reducers =>{
  const persistedReducer = persistReducer({
    key:'gobarber',
    storage:AsynctStorage,
    whitelist: ['auth', 'user']

  }, reducers)

  return persistedReducer;
}