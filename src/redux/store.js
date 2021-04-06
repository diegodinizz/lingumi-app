import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { videoReducer } from './video/video.reducer'

const store = createStore(videoReducer, applyMiddleware(thunk))

export default store