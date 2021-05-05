import React from "react";
import { NavLink } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuPopap: this.props.style.footer__list,
      menuCross: this.props.style.footer__popap,

      contactsPopap: this.props.style.footer__contacts,
      contactsCross: this.props.style.footer__popap,
    };
  }

  openPopap = (e) => {
    if (e.target.title === "menu") {
      if (this.state.menuPopap === this.props.style.footer__list) {
        this.setState({
          menuCross: `${this.props.style.footer__popap} ${this.props.style.active}`,
          menuPopap: `${this.props.style.footer__list} ${this.props.style.active}`,
        });
      } else if (
        this.state.menuPopap ===
        `${this.props.style.footer__list} ${this.props.style.active}`
      ) {
        this.setState({
          menuPopap: this.props.style.footer__list,
          menuCross: this.props.style.footer__popap,
        });
      }
    } else if (e.target.title === "contacts") {
      if (this.state.contactsPopap === this.props.style.footer__contacts) {
        this.setState({
          contactsCross: `${this.props.style.footer__popap} ${this.props.style.active}`,
          contactsPopap: `${this.props.style.footer__contacts} ${this.props.style.active}`,
        });
      } else if (
        this.state.contactsPopap ===
        `${this.props.style.footer__contacts} ${this.props.style.active}`
      ) {
        this.setState({
          contactsPopap: this.props.style.footer__contacts,
          contactsCross: this.props.style.footer__popap,
        });
      }
    }
  };

  render() {
    return (
      <footer className={this.props.style.footer}>
        <div className="container">
          <div className={this.props.style.footer__inner}>
            <div className={this.props.style.footer__menu}>
              <div className={this.props.style.footer__nav}>
                <NavLink
                  className={this.props.style.footer__logo}
                  to={this.props.logo.adresse}
                >
                  <img
                    src={this.props.logo.logoItem}
                    alt={this.props.logo.item}
                  />
                </NavLink>
                <div className={this.props.style.footer__social}>
                  <a
                    className={`${this.props.style.footer__link} ${this.props.style.instagram}`}
                    href="https://instagram.com/xway.st?igshid=13dknte6dlzw4"
                  ></a>
                  <a
                    className={`${this.props.style.footer__link} ${this.props.style.whatsapp}`}
                    href="https://wa.me/79999998283"
                  ></a>
                </div>
              </div>

              <div className={this.props.style.footer__cross}>
                <span
                  className={this.state.menuCross}
                  title="menu"
                  onClick={this.openPopap}
                ></span>
                Меню
              </div>
              <nav className={this.state.menuPopap}>
                {this.props.menuList.map((el) => {
                  return (
                    <a
                      className={this.props.style.footer__item}
                      key={el.id}
                      href={el.adresse}
                    >
                      {el.item}
                    </a>
                  );
                })}
              </nav>

              <div className={this.props.style.footer__cross}>
                <span
                  className={this.state.contactsCross}
                  title="contacts"
                  onClick={this.openPopap}
                ></span>
                Контакты
              </div>
              <div className={this.state.contactsPopap}>
                <a
                  href="tel:+79999998283"
                  className={this.props.style.footer__number}
                >
                  +7 (999) 999 - 82 - 83
                </a>
                <p className={this.props.style.footer__adresse}>
                  Метро Тульская, Москва,{" "}
                  <span>ул. Серпуховский Вал, 21/1</span>
                </p>
              </div>
            </div>
            <p className={this.props.style.footer__order}>© 2021 X-WAY</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
