import React from "react";
import Deposit from "../../deposit/DepositContainer"

import Form from "../../form/FormContainer";

import { chengeStateModal } from "../../../store/form/actions";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import ScrollableAnchor from "react-scrollable-anchor";
import foneVideo from "../../../img/vid/ems_fone_min.mp4";
import about_ems from "../../../img/vid/about_ems.mp4";
import about_poster from "../../../img/ems/ems_fone.jpg";

class Ems extends React.Component {
  render() {
    sessionStorage.setItem("ThemeForm", "fitEms");
    return (
      <section className="ems">
        <ScrollableAnchor id={"ems-start"}>
          <section className="ems__fone">
            <div className="ems__vidio">
              <video src={foneVideo} autoPlay muted loop></video>
            </div>
            <div className="container">
              <div className="ems__promo">
                <div className="ems__promo_inner">
                  <h1 className="ems__title">EMS</h1>
                  <p className="ems__discription">
                    Фитнес будущего, красивое тело в кратчайшие сроки, <br />{" "}
                    индивидуальный подход к каждому клиенту
                  </p>
                  <button
                    className="ems__king_btn"
                    onClick={() => this.props.chengeStateModal(true)}
                  >
                    ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ
                  </button>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
        <section className="ems_about">
          <div className="container">
            <div className="ems_about__inner">
              <div className="ems_about__text">
                <h2 className="ems_about__title">Что такое EMS-тренировки</h2>
                <p className="ems_about__abstract">
                  Тренировки проходят в специальных костюмах, которые во время
                  занятия посылают импульс прямо к мышцам. Такая тренировка
                  длится всего 40 минут и за счет повышенной плотности занятия,
                  она по эффективности равна трехчасовой тренировке в обычном
                  тренажерном зале + в разы легче вписывается в Ваш график.
                </p>
                <p className="ems_about__abstract">
                  Во время занятий мышцы получают дополнительные импульсы
                  напряжения и расслабления, повышается их метаболизм
                  и улучшается электролитный обмен. EMS костюм сам по себе
                  не нагружает суставы, а воздействует только на мышцы, поэтому
                  такие тренировки подойдут людям любого возраста и подготовки.
                  Наши специалисты подбирают программу под каждого человека
                  индивидуально, в зависимости от целей и физического состояния.
                </p>
              </div>
              <div className="ems_about__video">
                <video src={about_ems} poster={about_poster} controls></video>
              </div>
            </div>
          </div>
        </section>
        <section className="ems_prices">
          <div className="container">
            <div className="ems_prices__inner">
              <h2 className="ems_prices__title">Наши абонементы и цены</h2>
              <div className="ems_prices__cards">
                <div className="ems_card">
                  <div className="ems_card__img ems_card__img_1"></div>
                  <div className="ems_card__discription">
                    <p className="ems_card__num">4 ТРЕНИРОВКИ</p>
                    <p className="ems_card__cost">18000 ₽</p>
                    <p className="ems_card__one_session">1 ТРЕНИРОВКА 4500 ₽</p>
                  </div>
                </div>
                <div className="ems_card">
                  <div className="ems_card__img ems_card__img_2"></div>
                  <div className="ems_card__discription">
                    <p className="ems_card__num">8 ТРЕНИРОВОК</p>
                    <p className="ems_card__cost">30600 ₽</p>
                    <p className="ems_card__one_session">1 ТРЕНИРОВКА 3825 ₽</p>
                  </div>
                </div>
                <div className="ems_card">
                  <div className="ems_card__img ems_card__img_3"></div>
                  <div className="ems_card__discription">
                    <p className="ems_card__num">12 ТРЕНИРОВОК</p>
                    <p className="ems_card__cost">40500 ₽</p>
                    <p className="ems_card__one_session">1 ТРЕНИРОВКА 3375 ₽</p>
                  </div>
                </div>
              </div>
              <div className="prices__one">Стоимость одной тренировки <span>5000 ₽</span></div>
              
            </div>
          </div>
        </section>
        <Deposit/>
        <section className="ems_res">
          <div className="ems_res__inner">
            <h3 className="ems_res__title">До После</h3>
            <div className="ems_res__text">
              Персональные EMS тренировки могут включать в себя: "Бокс, табата,
              workout, TRX, работу с железом, функциональные тренировки". Мы
              подберем идеальную тренировочную систему для Вас, исходя из Ваших
              целей: хотите похудеть, приобрести красивое рельефное тело или
              наработать качественную мышечную массу, благодаря тренажеру Вы
              достигните результата в разы быстрее.
            </div>
          </div>
          <Carousel
            className="ems_res__slider"
            showThumbs={false}
            autoPlay
            showStatus={false}
            showIndicators={false}
            infiniteLoop
          >
            <div className="ems_res__back img_1" />
            <div className="ems_res__back img_2" />
            <div className="ems_res__back img_3" />
            <div className="ems_res__back img_4" />
            <div className="ems_res__back img_5" />
            <div className="ems_res__back img_6" />
          </Carousel>
        </section>

        <Form />
      </section>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  chengeStateModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ems);
