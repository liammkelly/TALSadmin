import { createStore, applyMiddleware } from "redux"
import rootReducer from '../reducers/index'
// import ReduxThunk from 'redux-thunk'
// import thunk from 'redux-thunk';
import apiMiddleware from "../middleware/api";

const initialState = {
  classes: [],
  classEvents: []
}

// Add the reducer to your store on the `routing` key
const store = createStore(rootReducer, initialState, applyMiddleware(apiMiddleware))

export default store