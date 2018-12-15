import { combineReducers } from 'redux'
import { POST_ACTIVITY } from '../actions/actionTypes'
import ReduxHelpers from '../utils/ReduxHelpers'

const postActivityReducer = ReduxHelpers.createReducer(POST_ACTIVITY)

export default combineReducers({
  postActivityReducer
})