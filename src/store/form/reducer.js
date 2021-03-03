import { CHANGE_NAME, CHANGE_PHONE } from "./actions"

const initialState = {
    name: '',
    phone: '',
}
export const formReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case CHANGE_PHONE:
            return {
                ...state,
                phone: action.payload
            }
            
    }
    return state
}