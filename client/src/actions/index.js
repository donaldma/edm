import { POST_ACTIVITY } from './actionTypes'
import ReduxHelpers from '../utils/ReduxHelpers'

export const postActivity = () => ReduxHelpers.createAction(POST_ACTIVITY, 'post', '/api/activity')