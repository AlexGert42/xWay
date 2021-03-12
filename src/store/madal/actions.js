export const CHENGE_MODAL = "CHENGE_MODAL"


export const chengeStateModal = state => {
    return {
        type: CHENGE_MODAL,
        payload: state
    }
} 

export const CHENGE_NAME = 'CHENGE_NAME'
export const CHENGE_PHONE = 'CHENGE_PHONE'


export const setNameInput = text => ({
    type: CHENGE_NAME,
    payload: text
})
export const setPhoneInput = num => ({
    type: CHENGE_PHONE,
    payload: num
})

export const CHENGE_CLIENT = 'CHENGE_CLIENT'

export const setClient = client => {

    return {
        type: CHENGE_CLIENT,
        payload: client
    }
}
