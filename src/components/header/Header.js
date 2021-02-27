import React from "react";
import HeaderLogo from "../../img/logo_white.svg";

import { NavLink } from "react-router-dom";
import "./Header.scss";


class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__menu">
              <NavLink className="header__items" exact to="/fit/">
                ГЛАВНАЯ
            </NavLink>
              <NavLink className="header__items" exact to="/fit/">
                УСЛУГИ
            </NavLink>
              <NavLink className="header__items" exact to="/fit/">
                ОТЗЫВЫ
            </NavLink>
              <NavLink className="header__items" exact to="/fit/">
                КОНТАКТЫ
            </NavLink>
            </div>
            <NavLink className="header__logo logo" to="/">
              <img src={HeaderLogo} alt="logo" />
            </NavLink>
            <div className="header__contacts">
              <a href="#" className="header__number">
                +7 (999) 999 - 82 - 83
            </a>
              <button className="header__btn">ОБРАТНЫЙ ЗВОНОК</button>
              <div className="header__links">
                <a className="header__link instagram" href="#"></a>
                <a className="header__link whatsapp" href="#"></a>
              </div>
            </div>
            <div className="header__burger">
              <span></span>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default Header;
