
import logoWhite from '../../img/logo_white.svg'
import logoBlack from '../../img/logo_black.png'

import logoFooterWhite from '../../img/logo_text_white.png'
import logoFooterBlack from '../../img/logo_text.png'


const initialState = {
    menuFitZone: [ 
        {id: 0, item: 'ГЛАВНАЯ', adresse: "/fit/#home-fit"},
        {id: 1, item: 'УСЛУГИ', adresse: "/fit/#prace-fit"},
        {id: 2, item: 'ОТЗЫВЫ', adresse: "/fit/#quate-fit"},
        {id: 3, item: 'КОНТАКТЫ', adresse: "/fit/#contacts-fit"},
             
    ],
    logoFit: { item: 'LogoFit', logoItem: logoWhite, adresse: "/#base"},
    logoFooterFit: { item: 'LogoFit', logoItem: logoFooterWhite, adresse: "/#base"},
    menuBeautyZone: [ 
        {id: 0, item: 'ГЛАВНАЯ', adresse: "/beauty/#home-beauty"},
        {id: 1, item: 'УСЛУГИ', adresse: "/beauty/#price-beauty"},
        {id: 2, item: 'ОТЗЫВЫ', adresse: "/beauty/#quate-beauty"},
        {id: 3, item: 'КОНТАКТЫ', adresse: "/beauty/#contacts-beauty"},
        
    ],
    logoBeauty: { item: 'LogoBeauty', logoItem: logoBlack, adresse: "/#base"}, 
    logoFooterBeauty: { item: 'LogoFit', logoItem: logoFooterBlack, adresse: "/#base"},    
}

export const navReducer = (state = initialState, action) => {
    return state
}