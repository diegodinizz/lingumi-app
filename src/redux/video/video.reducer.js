import { VideoActionTypes } from './video.types'

const INITIAL_STATE = {
  videoData: null,
  isFetching: true,
  errorMessage: undefined
}

export const videoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VideoActionTypes.FETCH_VIDEOS_START:
      return {
        ...state,
        isFetching: true
      }
    case VideoActionTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        videoData: action.payload
      }
    case VideoActionTypes.FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
