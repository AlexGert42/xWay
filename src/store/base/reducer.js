import { COLOR_THEME } from "./action"

const initialState = {
    zoneTheme: ''
}

export const baseReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case COLOR_THEME:
            return {
                ...state,
                zoneTheme: action.payload
            }
            
    }
    return state
}