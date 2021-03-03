
import logoWhite from '../../img/logo_white.svg'
import logoBlack from '../../img/logo_black.svg'


const initialState = {
    menuFitZone: [ 
        {id: 0, item: 'ГЛАВНАЯ', adresse: "/fit/"},
        {id: 1, item: 'УСЛУГИ', adresse: "/fit/"},
        {id: 2, item: 'ОТЗЫВЫ', adresse: "/fit/"},
        {id: 3, item: 'КОНТАКТЫ', adresse: "/fit/"},
             
    ],
    logoFit: { item: 'LogoFit', logoItem: logoWhite, adresse: "/"},
    menuBeautyZone: [ 
        {id: 0, item: 'ГЛАВНАЯ', adresse: "/beauty/"},
        {id: 1, item: 'УСЛУГИ', adresse: "/beauty/"},
        {id: 2, item: 'ОТЗЫВЫ', adresse: "/beauty/"},
        {id: 3, item: 'КОНТАКТЫ', adresse: "/beauty/"},
        
    ],
    logoBeauty: { item: 'LogoBeauty', logoItem: logoBlack, adresse: "/"},     
    
}

export const headerReducer = (state = initialState, action) => {
   

    return state
}