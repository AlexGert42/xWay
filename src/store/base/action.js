
export const COLOR_THEME = "COLOR_THEME"

export const setTheme = theme => {
    sessionStorage.setItem('ThemeHeader', theme);
    return {
        type: COLOR_THEME,
        payload: theme
    }
    
}