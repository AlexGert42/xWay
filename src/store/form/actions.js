import axios from "axios"
const url = ''

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
    console.log(client);
    axios.post(url, client)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    return {
        type: CHENGE_CLIENT,
        payload: client
    }
}

export const SUCCESS_RESPONSE = 'SUCCESS_RESPONSE'

export const showRsponse = state => ({
    type: SUCCESS_RESPONSE,
    payload: state
})



