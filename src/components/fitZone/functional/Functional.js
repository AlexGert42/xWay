import React from "react";
import Form from "../../form/FormContainer";
import Deposit from "../../deposit/DepositContainer";
import { chengeStateModal } from "../../../store/form/actions";
import { connect } from "react-redux";
import ScrollableAnchor from "react-scrollable-anchor";
import foneVideo from "../../../img/vid/functional_fone_min.mp4";

import imgAdvantage1 from "../../../img/functional/icon_1.png";
import imgAdvantage2 from "../../../img/functional/icon_2.png";
import imgAdvantage3 from "../../../img/functional/icon_3.png";
import imgAdvantage4 from "../../../img/functional/icon_4.png";
import imgAdvantage5 from "../../../img/functional/icon_5.png";

class Functional extends React.Component {
  render() {
    sessionStorage.setItem("ThemeForm", "fitFunctional");
    return (
      <section className="functional">
        <ScrollableAnchor id={"functional-start"}>
          <section className="functional__fone">
            <div className="functional__vidio">
              <video src={foneVideo} autoPlay muted loop playsInline/>
            </div>
            <div className="container">
              <div className="functional__promo">
                <div className="functional__promo_inner">
                  <h1 className="functional__title">
                    ФУНКЦИОНАЛЬНЫЕ ТРЕНИРОВКИ
                  </h1>
                  <p className="functional__discription">
                    Наскучил тренажерный зал? Фитнес не дает желаемых
                    результатов? Тренеры студии X-WAY разработывают
                    индивидуальные программы для взрослых и детей, мужчин и
                    женщин. Смешивают стили борьбы, создавая новые универсальные
                    практики.
                  </p>
                  <button
                    className="functional__king_btn"
                    onClick={() => this.props.chengeStateModal(true)}
                  >
                    ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ
                  </button>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>

        <section className="functional_advantage">
          <div className="container">
            <div className="functional_advantage__inner">
              <div className="functional_advantage__title">
                Преимущества занятий функциональным тренингом
              </div>
              <div className="functional_advantage__list">
                <div className="functional_advantage__item">
                  <img
                    src={imgAdvantage1}
                    alt="img_1"
                    className="functional_advantage__img"
                  />
                  <p className="functional_advantage__subtitle">
                    МОЩНАЯ ПРОКАЧКА
                  </p>
                  <p>
                    Равномерная нагрузка на все группы мышц и даже
                    мышцы-стабилизаторы. Это возможно благодаря сложной
                    биомеханике и разнообразию выполняемых упражнений.
                  </p>
                </div>
                <div className="functional_advantage__item">
                  <img
                    src={imgAdvantage2}
                    alt="img_2"
                    className="functional_advantage__img"
                  />
                  <p className="functional_advantage__subtitle">РАЗНООБРАЗИЕ</p>
                  <p>
                    Разнообразный выбор упражнений и спортивных снарядов, что
                    делает функциональный тренинг похожим на кроссфит. Для
                    занятий не требуется дорогостоящих тренажеров и особых
                    спортзалов.
                  </p>
                </div>
                <div className="functional_advantage__item">
                  <img
                    src={imgAdvantage3}
                    alt="img_3"
                    className="functional_advantage__img"
                  />
                  <p className="functional_advantage__subtitle">
                    СИЛА И СКОРОСТЬ
                  </p>
                  <p>
                    Занятия «функционалкой» тренируют и развивают одновременно
                    несколько физических качеств спортсмена. Среди них сила,
                    скорость, гибкость, координация движений и аэробная
                    выносливость.{" "}
                  </p>
                </div>
                <div className="functional_advantage__item">
                  <img
                    src={imgAdvantage4}
                    alt="img_4"
                    className="functional_advantage__img"
                  />
                  <p className="functional_advantage__subtitle">
                    АТЛЕТИЧНОЕ ТЕЛО
                  </p>
                  <p>
                    Результатом становится красивое атлетичное тело, поскольку
                    жир сжигается, а мускулатура растет. Помимо этого общий
                    благоприятный эффект оказывается на весь организм:
                    ускоряется обмен веществ, улучшается настроение, исчезает
                    постоянная усталость.
                  </p>
                </div>
                <div className="functional_advantage__item">
                  <img
                    src={imgAdvantage5}
                    alt="img_5"
                    className="functional_advantage__img"
                  />
                  <p className="functional_advantage__subtitle">
                    ПОСТРЕАБИЛИТАЦИЯ
                  </p>
                  <p>
                    Постреабилитация — специально разработанный тренировочный
                    комплекс по восстановлению мышечной и нервной систем.
                    С использованием EMS-костюма и без.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="functional_prices">
          <div className="container">
            <div className="functional_prices__inner">
              <div className="functional_prices__title">
                Наши абонементы и цены
              </div>
              <div className="functional_prices__cards">
                <div className="functional_card">
                  <div className="functional_card__img functional_card__img_1"></div>
                  <div className="functional_card__discription">
                    <p className="functional_card__num">4 ТРЕНИРОВКИ</p>
                    <p className="functional_card__cost">16200 ₽</p>
                    <p className="functional_card__one_session">
                      1 ТРЕНИРОВКА 4500 ₽
                    </p>
                  </div>
                </div>
                <div className="functional_card">
                  <div className="functional_card__img functional_card__img_2"></div>
                  <div className="functional_card__discription">
                    <p className="functional_card__num">8 ТРЕНИРОВОК</p>
                    <p className="functional_card__cost">30600 ₽</p>
                    <p className="functional_card__one_session">
                      1 ТРЕНИРОВКА 3825 ₽
                    </p>
                  </div>
                </div>
                <div className="functional_card">
                  <div className="functional_card__img functional_card__img_3"></div>
                  <div className="functional_card__discription">
                    <p className="functional_card__num">12 ТРЕНИРОВОК</p>
                    <p className="functional_card__cost">40500 ₽</p>
                    <p className="functional_card__one_session">
                      1 ТРЕНИРОВКА 3375 ₽
                    </p>
                  </div>
                </div>
              </div>
              <div className="prices__one">Стоимость одной тренировки <span>5000 ₽</span></div>
            </div>
          </div>
        </section>
       <Deposit/>
        <Form />
      </section>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  chengeStateModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Functional);
