import {createStore,combineReducers} from "redux"

import todos from "./reducer/Todo"

const rootReducer=combineReducers({
    todos
})

const store=createStore(rootReducer)

export default store;