export const updateProfileRequest = (data) => {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data }
  }
}

export const updateProfileSuccess = (profile) => {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile }
  }
}

export const updateProfileFailed = () => {
  return {
    type: '@user/UPDATE_PROFILE_FAILED',
  }
}