import React from "react";
import Deposit from "../../deposit/DepositContainer"
import Form from "../../form/FormContainer";

import { chengeStateModal } from "../../../store/form/actions";
import { connect } from "react-redux";
import ScrollableAnchor from "react-scrollable-anchor";
import foneVideo from "../../../img/vid/stretching_fone_min.mp4";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../img/stretching/bms.png";
import img2 from "../../../img/stretching/pilates.png";
import img3 from "../../../img/stretching/ioga.png";
import img4 from "../../../img/stretching/aero.png";

import imgAdvantage1 from "../../../img/stretching/icon_1.png";
import imgAdvantage2 from "../../../img/stretching/icon_2.png";
import imgAdvantage3 from "../../../img/stretching/icon_3.png";
import imgAdvantage4 from "../../../img/stretching/icon_4.png";
import imgAdvantage5 from "../../../img/stretching/icon_5.png";

class Stretching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [
        { id: 0, name: "bms", title: "stretching_about__menu_title active" },
        { id: 1, name: "pilates", title: "stretching_about__menu_title" },
        { id: 2, name: "yoga", title: "stretching_about__menu_title" },
        { id: 3, name: "aero", title: "stretching_about__menu_title" },
      ],
      blocks: [
        { id: 0, block: "stretching_about__block active" },
        { id: 1, block: "stretching_about__block" },
        { id: 2, block: "stretching_about__block" },
        { id: 3, block: "stretching_about__block" },
      ],
    };
  }

  chengeBlock = (e) => {
    let title = this.state.titles;
    let count = 0;
    title.map((el) => {
      if (el.name === e.target.title) {
        count = el.id;
        return (el.title = "stretching_about__menu_title active");
      } else {
        return (el.title = "stretching_about__menu_title");
      }
    });
    this.setState({ titles: title });
    let block = this.state.blocks;
    block.map((el) => {
      if (el.id === count) {
        return (el.block = "stretching_about__block active");
      } else {
        return (el.block = "stretching_about__block");
      }
    });
  };

  render() {
    sessionStorage.setItem("ThemeForm", "fitStretching");
    return (
      <section className="stretching">
        <ScrollableAnchor id={"stretching-start"}>
          <section className="stretching__fone">
            <div className="stretchind__vidio">
              <video src={foneVideo} autoPlay muted loop></video>
            </div>
            <div className="container">
              <div className="stretching__promo">
                <div className="stretching__promo_inner">
                  <h1 className="stretching__title">STRETCHING</h1>
                  <p className="stretching__discription">
                    Быстрая безболезненная растяжка и гибкость всего тела <br />{" "}
                    на тренажере «Бизон-вибро», добиваемся результатов уже{" "}
                    <br /> после первого занятия!
                  </p>
                  <button
                    className="stretching__king_btn"
                    onClick={() => this.props.chengeStateModal(true)}
                  >
                    ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ
                  </button>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
        <section className="stretching_about">
          <div className="container">
            <div className="stretching_about__inner">
              <div className="stretching_about__menu">
                <h2
                  className={this.state.titles[0].title}
                  onClick={this.chengeBlock}
                  title="bms"
                >
                  BMS
                </h2>
                <h2
                  className={this.state.titles[1].title}
                  onClick={this.chengeBlock}
                  title="pilates"
                >
                  Пилатес
                </h2>
                <h2
                  className={this.state.titles[2].title}
                  onClick={this.chengeBlock}
                  title="yoga"
                >
                  Йога
                </h2>
                <h2
                  className={this.state.titles[3].title}
                  onClick={this.chengeBlock}
                  title="aero"
                >
                  Аэростретчинг
                </h2>
              </div>
              <ul className="stretching_about__list">
                <li className={this.state.blocks[0].block}>
                  <div className="stretching_about__text">
                    <p>
                      Если вы хотите поработать над эстетикой тела, изящностью
                      движений, гибкостью, а также улучшить состояние суставов
                      и сухожилий, быстро сесть на шпагат без боли и получить
                      +100 500 к сексуальности, то вам определенно подойдут наши
                      тренировки по растяжке Инновационные БМС тренировки
                      с использованием тренажера «Бизон-вибро» дают потрясающий
                      результат в увеличении растяжки, скульптурировании тела
                      и в реабилитации тела человека.
                    </p>
                    <p>
                      Тренажер использует вибрацию с частотой, такой же, как
                      в человеческом организме (20 — 32Гц). При передаче
                      вибрации на мышцу, она начинает усиленно сокращаться
                      и расслабляться, создавая эффект очень интенсивной
                      тренировки.
                    </p>
                    <p>
                      БМС тренировки помогают привести мышцы в тонус, снять
                      отёчность, убрать мышечные зажимы, восстановиться после
                      травм, а также осуществить свою давнюю мечту — сесть
                      на шпагат в 5 раз быстрее без боли!
                    </p>
                  </div>
                  <div className="stretching_about__vid">
                    <img src={img1} alt="img" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className={this.state.blocks[1].block}>
                  <div className="stretching_about__text">
                    <p>
                      Пилатес — это система физических упражнений, направленная
                      на совершенствование тела через движение.
                    </p>
                    <p>
                      Эта замечательная система упражнений, развитая Джозефом
                      Пилатесом, укрепляет мышцы всего тела, развивает гибкость,
                      улучшает координацию, здоровье и самочувствие. Жизнь — это
                      Движение, а ПИЛАТЕС — это движение для Жизни! Пилатес
                      каждый день помогает тысячам людей двигаться лучше,
                      чувствовать себя лучше и выглядеть на все сто.
                    </p>
                    <p>
                      Каждый из видов упражнений в пилатесе направлен
                      на достижение определенного оздоровительного
                      и эстетического результата для организма. Комплексы
                      упражнений в пилатесе не являются однотипными, так как
                      постоянно совершенствуются и комбинируются.
                    </p>
                  </div>
                  <div className="stretching_about__vid">
                    <img src={img2} alt="img" style={{ width: "100%" }} />
                  </div>
                </li>
                <li className={this.state.blocks[2].block}>
                  <div className="stretching_about__text">
                    <p>
                      Йога для нас — не только то, что происходит на коврике,
                      но и то, каким человеком вы становитесь за его пределами.
                    </p>
                    <p>
                      Поступательное движение к гармонии тела и ума через
                      равномерное неагрессивное вытяжение одних частей тела
                      и расслабление других; управление дыханием.
                    </p>
                    <p>
                      Поступательное движение к гармонии тела и ума через
                      равномерное неагрессивное вытяжение одних частей тела
                      и расслабление других; управление дыханием.
                    </p>
                  </div>
                  <div className="stretching_about__vid">
                    <img
                      src={img3}
                      alt="img"
                      style={{ width: "65%", margin: "0 0 0 100px" }}
                    />
                  </div>
                </li>
                <li className={this.state.blocks[3].block}>
                  <div className="stretching_about__text">
                    <p>
                      Аэрострейчинг, является смесью йоги, растяжки и воздушной
                      гимнастики. Занятия проходят в специальной материи,
                      которая крепится в виде петли к потолку с помощью
                      альпинистских карабинов. Чем-то это петля напоминает
                      гамак, отсюда и второе название направления — йога
                      в гамаках.
                    </p>
                    <p>
                      Уровень нагрузки при аэрострейчинге может быть совершенно
                      разный: от ненапряжных провисаний и мягкого растяжения
                      мышц, до сложных упражнений наравне с серьезным силовым
                      тренингом.
                    </p>
                    <p>
                      Кроме того, некоторые тренера по аэрострейчингу включают
                      в программу занятий элементы медитаций, как в классической
                      йоге, и кардионагрузок, позволяющих хорошо пропотеть
                      и похудеть.
                    </p>
                  </div>
                  <div className="stretching_about__vid">
                    <img
                      src={img4}
                      alt="img"
                      style={{ width: "70%", margin: "0 0 0 100px" }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="stretching_prices">
          <div className="container">
            <div className="stretching_prices__inner">
              <div className="stretching_prices__title">
                Наши абонементы и цены
              </div>
              <div className="stretching_prices__cards">
                <div className="stretching_card">
                  <div className="stretching_card__img stretching_card__img_1"></div>
                  <div className="stretching_card__discription">
                    <p className="stretching_card__num">4 ТРЕНИРОВКИ</p>
                    <p className="stretching_card__cost">16200 ₽</p>
                    <p className="stretching_card__one_session">
                      1 ТРЕНИРОВКА 4500 ₽
                    </p>
                  </div>
                </div>
                <div className="stretching_card">
                  <div className="stretching_card__img stretching_card__img_2"></div>
                  <div className="stretching_card__discription">
                    <p className="stretching_card__num">8 ТРЕНИРОВОК</p>
                    <p className="stretching_card__cost">30600 ₽</p>
                    <p className="stretching_card__one_session">
                      1 ТРЕНИРОВКА 3825 ₽
                    </p>
                  </div>
                </div>
                <div className="stretching_card">
                  <div className="stretching_card__img stretching_card__img_3"></div>
                  <div className="stretching_card__discription">
                    <p className="stretching_card__num">12 ТРЕНИРОВОК</p>
                    <p className="stretching_card__cost">40500 ₽</p>
                    <p className="stretching_card__one_session">
                      1 ТРЕНИРОВКА 3375 ₽
                    </p>
                  </div>
                </div>
              </div>
              <div className="prices__one">Стоимость одной тренировки <span>5000 ₽</span></div>
            </div>
          </div>
        </section>
        <Deposit />
        <section className="stretching_res">
          <div className="stretching_res__inner">
            <h3 className="stretching_res__title">До После</h3>
            <div className="stretching_res__text">
              Если же Вы хотите поработать над эстетикой тела, изящностью
              движений, гибкостью, а также улучшить состояние суставов и
              сухожилий, быстро сесть на шпагат без боли и получить +100500 к
              сексуальности, то Вам определенно подойдут наши тренировки на BMS
              оборудовании.
            </div>
          </div>
          <Carousel
            className="stretching_res__slider"
            showThumbs={false}
            autoPlay
            showStatus={false}
            showIndicators={false}
            infiniteLoop
          >
            <div className="stretching_res__back img_1" />
            <div className="stretching_res__back img_2" />
          </Carousel>
        </section>

        <section className="stretching_advantage">
          <div className="container">
            <div className="stretching_advantage__inner">
              <div className="stretching_advantage__title">
                Какой результат вы получите
              </div>
              <div className="stretching_advantage__list">
                <div className="stretching_advantage__item">
                  <img
                    src={imgAdvantage1}
                    alt="img_1"
                    className="stretching_advantage__img"
                  />
                  <p>Увеличение гибкости и подвижности в суставах</p>
                </div>
                <div className="stretching_advantage__item">
                  <img
                    src={imgAdvantage2}
                    alt="img_2"
                    className="stretching_advantage__img"
                  />
                  <p>Избавление от болей любого характера</p>
                </div>
                <div className="stretching_advantage__item">
                  <img
                    src={imgAdvantage3}
                    alt="img_3"
                    className="stretching_advantage__img"
                  />
                  <p>Увеличение гибкости и подвижности в суставах</p>
                </div>
                <div className="stretching_advantage__item">
                  <img
                    src={imgAdvantage4}
                    alt="img_4"
                    className="stretching_advantage__img"
                  />
                  <p>Идеальная осанка и красивый стройный силуэт</p>
                </div>
                <div className="stretching_advantage__item">
                  <img
                    src={imgAdvantage5}
                    alt="img_5"
                    className="stretching_advantage__img"
                  />
                  <p>Избавление от стресса и бессоницы</p>
                </div>
              </div>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Stretching);
