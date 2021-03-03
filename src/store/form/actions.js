export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_PHONE = 'CHANGE_PHONE';
export const SET_USER = 'SET_USER';

export const setChangeName = text => ({
    type: CHANGE_NAME,
    payload: text
})
export const setChangePhone = number => ({
    type: CHANGE_PHONE,
    payload: number
})


export const setUserThunkCreator = () => {
    console.log('++++');
    return {
        type: SET_USER,
    }
}