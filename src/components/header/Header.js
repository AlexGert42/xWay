import React from "react";

import { NavLink } from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stateBurger: this.props.style.header__burger,
      stateMenu: this.props.style.header__menu,
      stateContact: this.props.style.header__contacts,


    }
  }

  clickBurger = (e) => {

    e.target.className === this.props.style.header__burger ? this.setState({
      stateBurger: `${this.props.style.header__burger} ${this.props.style.active}`,
      stateMenu: `${this.props.style.header__menu} ${this.props.style.active}`,
      stateContact: `${this.props.style.header__contacts} ${this.props.style.active}`,
    }) : this.setState({
      stateBurger: this.props.style.header__burger,
      stateMenu: this.props.style.header__menu,
      stateContact: this.props.style.header__contacts,
    })
  }


  render() {
    return (
      <header className={this.props.style.header}>
        <div className="container">
          <div className={this.props.style.header__inner}>
            <div className={this.state.stateMenu}>
              {this.props.menuList.map(el => {
                return (
                  <a className={this.props.style.header__items} key={el.id} href={el.adresse} >
                    {el.item}
                  </a>
                )
              })}
            </div>
            <NavLink className={this.props.style.header__logo} to={this.props.logo.adresse}>
              <img src={this.props.logo.logoItem} alt={this.props.logo.item} />
            </NavLink>
            <div className={this.state.stateContact}>
              <a href="tel:+79999998283" className={this.props.style.header__number}>
                +7 (999) 999 - 82 - 83
            </a>
              <button className={this.props.style.header__btn} onClick={() => this.props.openModal(true)}>ОБРАТНЫЙ ЗВОНОК</button>
              <div className={this.props.style.header__links}>
                <a className={`${this.props.style.header__link} ${this.props.style.instagram}`} href="#"></a>
                <a className={`${this.props.style.header__link} ${this.props.style.whatsapp}`} href="#"></a>
              </div>
            </div>
            <div className={this.state.stateBurger} onClick={this.clickBurger}>
              <span></span>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default Header;


// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       stateBurger: style.header__burger,
//       stateMenu: style.header__menu,
//       stateContact: style.header__contacts,


//     }
//     // console.log(this.props);
//   }

//   clickBurger = (e) => {

//     e.target.className === style.header__burger ? this.setState({
//       stateBurger: `${style.header__burger} ${style.active}`,
//       stateMenu: `${style.header__menu} ${style.active}`,
//       stateContact: `${style.header__contacts} ${style.active}`,
//     }) : this.setState({
//       stateBurger: style.header__burger,
//       stateMenu: style.header__menu,
//       stateContact: style.header__contacts,
//     })
//   }


//   render() {
//     return (
//       <header className={style.header}>
//         <div className="container">
//           <div className={style.header__inner}>
//             <div className={this.state.stateMenu}>
//               <NavLink className={style.header__items} exact to="/fit/">
//                 ГЛАВНАЯ
//             </NavLink>
//               <NavLink className={style.header__items} exact to="/fit/">
//                 УСЛУГИ
//             </NavLink>
//               <NavLink className={style.header__items} exact to="/fit/">
//                 ОТЗЫВЫ
//             </NavLink>
//               <NavLink className={style.header__items} exact to="/fit/">
//                 КОНТАКТЫ
//             </NavLink>
//             </div>
//             <NavLink className={style.header__logo} to="/">
//               <img src={HeaderLogo} alt="logo" />
//             </NavLink>
//             <div className={this.state.stateContact}>
//               <a href="#" className={style.header__number}>
//                 +7 (999) 999 - 82 - 83
//             </a>
//               <button className={style.header__btn}>ОБРАТНЫЙ ЗВОНОК</button>
//               <div className={style.header__links}>
//                 <a className={`${style.header__link} ${style.instagram}`} href="#"></a>
//                 <a className={`${style.header__link} ${style.whatsapp}`} href="#"></a>
//               </div>
//             </div>
//             <div className={this.state.stateBurger} onClick={this.clickBurger}>
//               <span></span>
//             </div>

//           </div>
//         </div>
//       </header>
//     );
//   }
// }

// export default Header;


