import { produce } from 'immer';
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false

};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGNIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGUP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGNIN_SUCCESS': {
        const { token } = action.payload;
        draft.token = token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGNIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT':{
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}