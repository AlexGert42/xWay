import React from "react";
import { NavLink } from "react-router-dom";

class Base extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="fone">
          <div className="fone__left">
            <NavLink className="fit-zone" exact to="/fit">
              Fit Zone
            </NavLink>
          </div>
          <div className="fone__right">
            <NavLink className="beauty-zone" exact to="/beauty">
              Beauty Zone
            </NavLink>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="about__inner">
              <div className="about__text">
                <h1 className="about__title">О нас</h1>
                <div className="about__discription">
                  «X-WAY» — это не просто новая концепция фитнеса, <br />
                  это инновационный подход к Вашему телу. <br />
                  Персональные тренировки, нацеленные на 100% результат <br />
                  <br />
                  Благодаря EMS костюму, Вы в 3 раза быстрее сбросите <br />
                  лишние килограммы, проработаете все мышцы, придав<br />
                  рельеф Вашему телу <br />
                  <br />
                  С BMS «Бизон-вибро» Вы в 5 раз быстрее сядете<br />
                  на заветный шпагат и улучшите осанку.
                  <br />
                  Окунетесь в другую атмосферу фитнеса. <br />
                </div>
              </div>
              <div className="about__img"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
