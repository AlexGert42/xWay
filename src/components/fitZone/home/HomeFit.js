import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../img/logo_text_white.png"
import {chengeStateModal} from "../../../store/madal/actions"
import { connect } from "react-redux";



import Contacts from "../contacts/Contacts"


class HomeFit extends React.Component {
  render() {
    return (
      <section className="home-fit">
        <div className="home-fit__fone" >
          <div className="home-fit__promo">
            <h1 className="home-fit__title">
              ДОБРО ПОЖАЛОВАТЬ В<span><img src={logo} alt="logo" /></span>
            </h1>
            <div className="home-fit__discription">
              это не просто новая концепция фитнеса, <br />
              это инновационный подход к Вашему телу. <br />
              Персональные тренировки, нацеленные на 100% результат <br />
            </div>
            <button className="home-fit__king-btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
          </div>
        </div>

        
        <div className="container">
          <div className="services">

            <div className="services__card card">
              <div className="card__img ems"></div>
              <div className="card__text">
                <h2 className="card__title">EMS</h2>
                <p className="card__dicription">
                  Импыльсы EMS-костюма позволяют провести <br />
                   максимально эффективную тренировку <br />
                    и прокачать все группы мышц за считанные минуты.
                </p>
                <NavLink className="card__link" to="/fit/ems">ПОДРОБНЕЕ</NavLink>
              </div>
            </div>
            <div className="services__card card">
              <div className="card__text">
                <h2 className="card__title">BMS</h2>
                <p className="card__dicription">
                  Уверены, что сесть на шпагат могут только гуру <br />
                  фитнеса? Уже пробовали, но было больно и ничего не вышло? <br />
                    На тренажере «Бизон-вибро» вы сможете растянуться <br />
                     быстро и практически безболезненно. <br />
                      Приходите и прокачивайте растяжку!
                </p>
                <NavLink className="card__link" to="/">ПОДРОБНЕЕ</NavLink>
              </div>
              <div className="card__img bms"></div>
            </div>
            <div className="services__card card">
              <div className="card__img mma"></div>
              <div className="card__text">
                <h2 className="card__title">БОЕВЫЕ ЕДИНОБОРСТВА</h2>
                <p className="card__dicription">
                  Лучшие программы единоборств<br />
                  (бокс, муай тай, айкидо, грэпплинг, <br /> смешанные единобоства и  т.д.) <br />
                  Тренировки для взростых и детей, <br /> профессиональных спортсменов и новичков. <br />
                  Мы ждем вас в нашей студии! <br />
                  Время быть сильным!
                </p>
                <NavLink className="card__link" to="/">ПОДРОБНЕЕ</NavLink>
              </div>
            </div>
            <div className="services__card card">
              <div className="card__text">
                <h2 className="card__title">ЙОГА  И АЭРОСТРЕТЧИНГ</h2>
                <p className="card__dicription">
                  Йога, растяжка, МФР и релааксация на гамаках. <br />
                  Подтянутое гибкое тело без целлюлита, <br />
                  здоровые суставы, шпагат без боли и избавление от стресса.
                  </p>

                <NavLink className="card__link" to="/">ПОДРОБНЕЕ</NavLink>
              </div>
              <div className="card__img str"></div>
            </div>


          </div>
        </div>
        <Contacts />
      </section>
    );
  }
}


const mapStateToProps = state => {}

const mapDispatchToProps = {
  chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(HomeFit)
