import {
  LOAD_CLASSES_SUCCESS,
  LOAD_CLASSES_FAILURE,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAILURE,
  ADD_CLASS_FAILURE,
  ADD_CLASS_SUCCESS,
  SCHEDULE_EVENT_START,
  SCHEDULE_EVENT_FAILURE,
  SCHEDULE_EVENT_SUCCESS
} from '../actionTypes/index'

const reducer = (state, action) => {
  console.info(action.type,action)
  switch (action.type) {
    case LOAD_EVENTS_FAILURE:
        return Object.assign({}, state, { classes: state.classEvents= [] })
    case LOAD_EVENTS_SUCCESS:
        return Object.assign({}, state, { classEvents: action.payload })
    case LOAD_CLASSES_FAILURE:
        return Object.assign({}, state, { classes: state.classes= [] })
    case LOAD_CLASSES_SUCCESS:
        return Object.assign({}, state, { classes: action.payload })
    case ADD_CLASS_SUCCESS:
    case ADD_CLASS_FAILURE:
    case SCHEDULE_EVENT_FAILURE:
    case SCHEDULE_EVENT_SUCCESS:
    default:
      return state
  }
}

export default reducer