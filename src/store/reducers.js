import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { navReducer } from "./nav/reducer";
import { baseReducer } from "./base/reducer";
import { formReducer } from "./form/reducer";




export const rootReducer = combineReducers({
    nav: navReducer,
    base: baseReducer,
    form: formReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
window.store = store







