import { combineReducers } from "redux";

import events from '../reducers/Events'
import course from '../reducers/Courses'

export default combineReducers({
    events: events,
    course,
})