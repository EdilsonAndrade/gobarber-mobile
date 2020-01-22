export const signinRequest = (email, password) =>{
  return {
    type: '@auth/SIGNIN_REQUEST',
    payload:{ email, password}
  }
}

export const signinSuccess = (token, user) =>{
  return {
    type: '@auth/SIGNIN_SUCCESS',
    payload:{ token, user}
  }
}

export const signupRequest = (name, email, password) =>{
  return {
    type: '@auth/SIGNUP_REQUEST',
    payload: {name, email, password}
  }
}
export const signinFailure = () =>{
  return {
    type: '@auth/SIGNIN_FAILURE',
  }
}

export const signOut = () =>{
  return {
    type: '@auth/SIGN_OUT',
  }
}

