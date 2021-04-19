export const VARAIBLE_HEADER = "VARAIBLE_HEADER";
export const COLOR_THEME = "COLOR_THEME";

export const setMenuHeader = (menuList) => ({
  type: VARAIBLE_HEADER,
  payload: menuList,
});

export const setColorHeader = (theme) => ({
  type: COLOR_THEME,
  payload: theme,
});
