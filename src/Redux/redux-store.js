

import {combineReducers, createStore} from "redux";
import reviewsReduser from './reviewsReduser';

let redusers = combineReducers({
    reviews: reviewsReduser,
})

let store = createStore(redusers)



export default store
