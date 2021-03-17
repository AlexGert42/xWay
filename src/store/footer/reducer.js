
import logoWhite from '../../img/logo_text_white.png'
import logoBlack from '../../img/logo_text.png'


const initialState = {
    menuFitZone: [ 
        {id: 0, item: 'ГЛАВНАЯ', link: "/fit/"},
        {id: 1, item: 'УСЛУГИ', link: "/fit/"},
        {id: 2, item: 'ОТЗЫВЫ', link: "/fit/"},
        {id: 3, item: 'КОНТАКТЫ', link: "/fit/"},
             
    ],
    logoFit: { item: 'LogoFit', logoItem: logoWhite, link: "/"},
    menuBeautyZone: [ 
        {id: 0, item: 'ГЛАВНАЯ', link: "/beauty/"},
        {id: 1, item: 'УСЛУГИ', link: "/beauty/"},
        {id: 2, item: 'ОТЗЫВЫ', link: "/beauty/"},
        {id: 3, item: 'КОНТАКТЫ', link: "/beauty/"},
        
    ],
    logoBeauty: { item: 'LogoBeauty', logoItem: logoBlack, link: "/"},     
    
}

export const footerReducer = (state = initialState, action) => {
   

    return state
}