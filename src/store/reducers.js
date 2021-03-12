import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { headerReducer } from "./header/reducer";
import { baseReducer } from "./base/reducer";
import { formReducer } from "./form/reducer";
import { modalReducer } from "./madal/reducer";


export const rootReducer = combineReducers({
    header: headerReducer,
    base: baseReducer,
    form: formReducer,
    modal: modalReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
window.store = store







