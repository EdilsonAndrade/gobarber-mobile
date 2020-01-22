import {produce} from 'immer';
const INITIAL_STATE ={
  profile: null
};

export default function auth(state= INITIAL_STATE, action){
  return produce(state, draft=>{
  switch (action.type) {
    case '@auth/SIGNIN_SUCCESS': {
      const {user} = action.payload;
      
      draft.profile = user;
      break;
    }
    case '@user/UPDATE_PROFILE_SUCCESS': {
      draft.profile = action.payload.profile;
      break;
    }
    case '@auth/SIGN_OUT':{
      draft.profile = null;
      break;
    }
    default:
  }
   
})
    
}