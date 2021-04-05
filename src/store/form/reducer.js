import { CHENGE_MODAL, CHENGE_NAME, CHENGE_PHONE, CHENGE_CLIENT, SUCCESS_RESPONSE} from "./actions"

const initialState = {
    name: '',
    phone: '',
    showModal: false,
    success: false,
    client: {}
}
export const formReducer = (state = initialState, action) => {
   
    switch (action.type) {
        
        case CHENGE_MODAL:
            return {
                ...state,
                showModal: action.payload
            }
        case CHENGE_NAME: 
            return {
                ...state,
                name: action.payload
            }
        case CHENGE_PHONE: 
            return {
                ...state,
                phone: action.payload
            }
        case CHENGE_CLIENT: 
            return {
                ...state,
                client: action.payload
            }
        case SUCCESS_RESPONSE: 
            return {
                ...state,
                success: action.payload
            }
            
    }
    return state
}