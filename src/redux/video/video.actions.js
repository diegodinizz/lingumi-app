import { VideoActionTypes } from './video.types'

import { handleErrors } from './video.utils'

export const fetchVideoStart = () => ({
  type: VideoActionTypes.FETCH_VIDEOS_START
})

export const fetchVideoSuccess = videos => ({
  type: VideoActionTypes.FETCH_VIDEOS_SUCCESS,
  payload: videos
})

export const fetchVideoFailure = errorMessage => ({
  type: VideoActionTypes.FETCH_VIDEOS_FAILURE,
  payload: errorMessage
})

export const filterVideoTags = videos => ({
  type: VideoActionTypes.FILTER_VIDEOS_TAGS,
  payload: videos
})

export const fetchVideoStartAsync = () => {
  return async dispatch => {
    dispatch(fetchVideoStart())

    try {
      const response = await fetch(
        'https://lingumi-take-home-test-server.herokuapp.com/videoTutorials'
      )
      const data = await handleErrors(response)
      dispatch(fetchVideoSuccess(data))
      dispatch(filterVideoTags(data))
    } catch (error) {
      return dispatch(fetchVideoFailure(error.message))
    }
  }
}
