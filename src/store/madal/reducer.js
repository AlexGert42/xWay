import { CHENGE_MODAL, CHENGE_NAME, CHENGE_PHONE, CHENGE_CLIENT} from "./actions"

const initialState = {
    name: '',
    phone: '',
    showModal: false,
    client: {}
}
export const modalReducer = (state = initialState, action) => {
   
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
            
    }
    return state
}