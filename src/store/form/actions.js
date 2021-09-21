import axios from "axios";
const url = "";

export const CHENGE_MODAL = "CHENGE_MODAL";

export const chengeStateModal = (state) => {
  return {
    type: CHENGE_MODAL,
    payload: state,
  };
};

export const CHENGE_NAME = "CHENGE_NAME";
export const CHENGE_PHONE = "CHENGE_PHONE";

export const setNameInput = (text) => ({
  type: CHENGE_NAME,
  payload: text,
});
export const setPhoneInput = (num) => ({
  type: CHENGE_PHONE,
  payload: num,
});

export const CHENGE_CLIENT = "CHENGE_CLIENT";



const instance = axios.create({
  baseURL: 'https://xway.mx-tech.org/api/v1/form/',
  withCredentials: true,

  headers: {
    // "API-KEY": '9708f55c-7c56-4108-a0bf-76b37c22e7d1',
    'Access-Control-Allow-Origin': 'https://xway.mx-tech.org/api/v1/form/'
  }
})


export const setClient = (client) => {
  console.log(client);

  instance.post('https://xway.mx-tech.org/api/v1/form/', client)
    .then(res => {
      console.log(res);
    })

  return {
    type: CHENGE_CLIENT,
    payload: client,
  };
};

export const SUCCESS_RESPONSE = "SUCCESS_RESPONSE";

export const showRsponse = (state) => ({
  type: SUCCESS_RESPONSE,
  payload: state,
});


export const setClientThunk = (client) => (dispatch) => {
  console.log('++')
  instance.post('https://xway.mx-tech.org/api/v1/form/', client)
      .then(res => {
        console.log(res);
        dispatch(setClient(client))
      })
}

