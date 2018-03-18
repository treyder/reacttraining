import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import artists from './artists'

export default combineReducers({
  todos,
  visibilityFilter,
    artists
})
