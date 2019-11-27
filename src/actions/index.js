import {
  API,
  DELETE_EVENT_START,
  DELETE_EVENT_FAILURE,
  LOAD_CLASSES_SUCCESS,
  LOAD_CLASSES_START,
  LOAD_CLASSES_FAILURE,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_START,
  LOAD_EVENTS_FAILURE,
  ADD_CLASS_START,
  ADD_CLASS_FAILURE,
  ADD_CLASS_SUCCESS,
  SCHEDULE_EVENT_START,
  SCHEDULE_EVENT_FAILURE,
  SCHEDULE_EVENT_SUCCESS,
  DELETE_EVENT_SUCCESS
} from "../actionTypes"

export const addNewClass = title => {
  return apiAction({
    url: '/admin/class/add',
    data: title,
    method: 'POST',
    onSuccess: () => {
      loadClasses()
      addNewClassSuccess()
    },
    onFailure: addNewClassFailure,
    label: ADD_CLASS_START
  })
}

export const deleteClassEvent = id => {
  return apiAction({
    url: `/event/delete/${id}`,
    method: 'POST',
    onSuccess: deleteEventSuccess,
    onFailure: deleteEventFailure,
    label: DELETE_EVENT_START
  });
}

export function loadClasses() {
  return apiAction({
    url: "/classes/all",
    onSuccess: loadClassesSuccess,
    onFailure: loadClassesFailure,
    label: LOAD_CLASSES_START
  });
}

export function loadEvents() {
  return apiAction({
    url: "/class/events/all",
    onSuccess: loadEventsSuccess,
    onFailure: loadEventsFailure,
    label: LOAD_EVENTS_START
  });
}

export const scheduleEvent = payload => {
  return apiAction({
    url: '/admin/event/add',
    data: payload,
    method: 'POST',
    onSuccess: () => {
      loadClasses()
      scheduleEventSuccess()
    },
    onFailure: scheduleEventFailure,
    label: SCHEDULE_EVENT_START
  })
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}

/* THUNKS */
// export const deleteClassEvent = id => {
//   return dispatch => {
//     let x = 0
//     dispatch({ type: DELETE_EVENT_START })

//     const request = fetch("/event/delete", {
//       method: 'post',
//       body: JSON.stringify({"class_event_id":id})
//     })

//     return request
//       .then(
//         response => dispatch(loadClasses()),
//         error => dispatch(deleteEventFailure(error.message))
//       )
//   }
// }

// export function loadClasses() {
//   return function (dispatch, getState) {
//     dispatch({ type: LOAD_CLASSES_START })

//     const request = fetch("/classes/all")

//     return request
//       .then(resp => resp.json())
//       .then(
//         response => dispatch(loadClassesSuccess(response)),
//         err => dispatch(loadClassesFailure(err))
//       )
//   }
// }

// export function loadEvents() {
//   return function (dispatch) {
//     dispatch({ type: LOAD_EVENTS_START })

//     const request = fetch("/class/events/all")

//     return request
//       .then(resp => resp.json())
//       .then(
//         response => dispatch(loadEventsSuccess(response)),
//         err => dispatch(loadEventsFailure(err))
//       )
//   }
// }

// export function addNewClass(payload) {
//   return function (dispatch) {
//     dispatch({ type: ADD_CLASS_START })
//     fetch("/admin/class/add", {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(payload)
//     })
//       .then(res => {
//         dispatch(loadClasses())
//         dispatch(addNewClassSuccess())
//       })
//       .catch(err => {
//         dispatch(addNewClassFailure(err.message))
//       })
//   }
// }

// export function scheduleEvent(payload) {
//   return function (dispatch) {
//     dispatch({ type: SCHEDULE_EVENT_START })
//     fetch("/admin/event/add", {
//       method: 'post',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(payload)
//     })
//       .then(res => {
//         dispatch(scheduleEventSuccess())
//         dispatch(loadEvents())
//       })
//       .catch(err => {
//         dispatch(scheduleEventFailure(err.message));
//       })
//   }
// }


/* PLAIN OBJECTS */
export function loadClassesSuccess(classes) {
  return {
    type: LOAD_CLASSES_SUCCESS,
    payload: classes
  };
}

export function loadClassesFailure(error) {
  return {
    type: LOAD_CLASSES_FAILURE,
    payload: error
  };
}

export function loadEventsSuccess(classEvents) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    payload: classEvents
  };
}

export function loadEventsFailure(error) {
  return {
    type: LOAD_EVENTS_FAILURE,
    payload: error
  }
}

export function deleteEventFailure(error) {
  return {
    type: DELETE_EVENT_FAILURE,
    error
  }
}

export function deleteEventSuccess() {
  return {
    type: DELETE_EVENT_SUCCESS
  }
}

export function addNewClassFailure(error) {
  return {
    type: ADD_CLASS_FAILURE,
    error
  }
}

export function addNewClassSuccess() {
  return {
    type: ADD_CLASS_SUCCESS
  }
}

export function scheduleEventFailure(error) {
  return {
    type: SCHEDULE_EVENT_FAILURE,
    error
  }
}

export function scheduleEventSuccess() {
  return {
    type: SCHEDULE_EVENT_SUCCESS
  }
}

