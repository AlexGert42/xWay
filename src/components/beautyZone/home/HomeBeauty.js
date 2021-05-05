import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../img/homeBeauty/logoBeauty.png";
import { chengeStateModal } from "../../../store/form/actions";
import { connect } from "react-redux";
import ScrollableAnchor from "react-scrollable-anchor";
import { Carousel } from "react-responsive-carousel";
import { Parallax } from "react-parallax";
import Contacts from "../../contacts/Contacts";
import Form from "../../form/FormContainer";
import fone from "../../../img/homeBeauty/foneBeauty.png";

import imgAdvantage1 from "../../../img/homeBeauty/icon_1.svg";
import imgAdvantage2 from "../../../img/homeBeauty/icon_2.svg";
import imgAdvantage3 from "../../../img/homeBeauty/icon_3.svg";
import imgAdvantage4 from "../../../img/homeBeauty/icon_4.svg";

import quate_1 from "../../../img/vid/WhatsApp Video 2021-04-16 at 14.18.46.mp4";
import quate from "../../../img/homeBeauty/quate/Frame83.png"

class HomeBeauty extends React.Component {
  render() {
    sessionStorage.setItem("ThemeForm", "beautyHome");
    return (
      <section className="home-beauty">
        <ScrollableAnchor id={"home-beauty"}>
          <Parallax
            className="massage_start"
            strength={400}
            bgImage={fone}
            bgImageStyle={{
              minHeight: "1024px",
              maxHeight: "2160px",
              minWidth: "1920px",
              maxWidth: "3840px",
            }}
            style={{ height: "100vh", width: "100%" }}
          >
            <div className="home-beauty__promo">
              <div className="home-beauty__fone">
                <div className="home-beauty__promo-text">
                  <h1 className="home-beauty__title">
                    ДОБРО ПОЖАЛОВАТЬ В
                    <span>
                      <img src={logo} alt="logo" />
                    </span>
                  </h1>
                  <div className="home-beauty__discription">
                    Твой путь к совершенству
                  </div>
                  <button
                    className="home-beauty__king-btn"
                    onClick={() => this.props.chengeStateModal(true)}
                  >
                    посетить студию
                  </button>
                </div>
              </div>
            </div>
          </Parallax>
        </ScrollableAnchor>

        <section className="home-beauty_advantage">
          <div className="container">
            <div className="home-beauty_advantage__inner">
              <ul className="home-beauty_advantage__list">
                <li className="home-beauty_advantage__item">
                  <div className="home-beauty_advantage__img">
                    <img src={imgAdvantage1} alt="icon" />
                  </div>
                  <h3 className="home-beauty_advantage__title">
                    Мы профессионалы
                  </h3>
                  <div className="home-beauty_advantage__text">
                    <p>
                      Мы являемся большими экспертами по правильному уходу
                      за своей внешностью, а именно за своей кожей. У нас
                      работают только профессионалы с проверенной годами
                      репутацией и чуткостью к потребностям наших клиенток.
                    </p>
                  </div>
                </li>
                <li className="home-beauty_advantage__item">
                  <div className="home-beauty_advantage__img">
                    <img src={imgAdvantage2} alt="icon" />
                  </div>
                  <h3 className="home-beauty_advantage__title">
                    Косметика класса люкс
                  </h3>
                  <div className="home-beauty_advantage__text">
                    <p>
                      Косметологи нашей студии используют только
                      профессиональную косметику, отличающуюся особой
                      эффективностью и безопасностью. Мы также поможем вам
                      подобрать средства для домашнего ухода, подходящие именно
                      вашему типу кожи.
                    </p>
                  </div>
                </li>
                <li className="home-beauty_advantage__item">
                  <div className="home-beauty_advantage__img">
                    <img src={imgAdvantage3} alt="icon" />
                  </div>
                  <h3 className="home-beauty_advantage__title">
                    Медицинское образование
                  </h3>
                  <div className="home-beauty_advantage__text">
                    <p>
                      Сотрудники студии постоянно совершенствуют своё
                      мастерство: участвуют в конференциях и семинарах,
                      обмениваются знаниями с коллегами и получают самую свежую
                      информацию в области медицинской косметологии.
                    </p>
                  </div>
                </li>
                <li className="home-beauty_advantage__item">
                  <div className="home-beauty_advantage__img">
                    <img src={imgAdvantage4} alt="icon" />
                  </div>
                  <h3 className="home-beauty_advantage__title">
                    Новейшее оборудование
                  </h3>
                  <div className="home-beauty_advantage__text">
                    <p>
                      Мы практикуем новое направление в косметологии —
                      биомеханическую стимуляцию лиц, которая представляет собой
                      нехирургическую подтяжку и позволяет предотвратить
                      процессы старения путём поддержания лицевых мышц в тонусе.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <ScrollableAnchor id={"price-beauty"}>
          <section className="home-beauty_services">
            <div className="container">
              <div className="home-beauty_services__inner">
                <h2 className="home-beauty_services__title">Наши услуги</h2>
                <div className="home-beauty_services__cards">
                  <div className="home-beauty_services__card">
                    <div className="home-beauty_services__img massage">
                      <div className="home-beauty_services__discription">
                        <p className="home-beauty_services__text">
                          Массаж — это не только удовольствие, но и процедура,
                          которая дарит большую пользу организму: от кожного
                          покрова до систем пищеварения и кровообращения.
                        </p>
                        <NavLink
                          className="home-beauty_services__more"
                          to="/beauty/massage/#massage-start"
                        >
                          ПОДРОБНЕЕ
                        </NavLink>
                      </div>
                      <h3 className="home-beauty_services__subtitle">
                        МАССАЖ ТЕЛА
                        <span />
                      </h3>
                    </div>
                  </div>
                  <div className="home-beauty_services__card">
                    <div className="home-beauty_services__img cosmetology">
                      <h3 className="home-beauty_services__subtitle">
                        <span />
                        КОСМЕТОЛОГИЯ И МАССАЖ ЛИЦА
                      </h3>
                      <div className="home-beauty_services__discription">
                        <p className="home-beauty_services__text">
                          Естественная красота лица наш приоритет, мы используем
                          эффективные и экологичные методики для сохранения
                          вашей молодости. Наша задача — максимальный эффект
                          за короткое время: омолаживающий массаж, интенсивные
                          уходы безопасные аппараты.
                        </p>
                        <NavLink
                          className="home-beauty_services__more"
                          to="/beauty/cosmetology/#cosmetology-start"
                        >
                          ПОДРОБНЕЕ
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="home-beauty_services__card">
                    <div className="home-beauty_services__img depilation">
                      <div className="home-beauty_services__discription">
                        <p className="home-beauty_services__text">
                          Мы поможем Вам сделать ваше тело не только более
                          красивым, но и гладким. Идеально гладкие ножки
                          и ухоженная зона бикини — мечта любого.
                        </p>
                        <NavLink
                          className="home-beauty_services__more"
                          to="/beauty/dipilation/#depilation-start"
                        >
                          ПОДРОБНЕЕ
                        </NavLink>
                      </div>
                      <h3 className="home-beauty_services__subtitle">
                        <span />
                        ДЕПИЛЯЦИЯ
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="home-beauty_eyes">
              <div class="home-beauty_eyes__img" />
              <div class="home-beauty_eyes__text">
                <div class="home-beauty_eyes__inner">
                  <p class="home-beauty_eyes__disctiption">
                    Красивая форма бровей, окрашивание и ламинирование ресниц
                    сделают ваш взгляд сексуальным и манящим.
                  </p>
                  <NavLink
                    className="home-beauty_eyes__more"
                    to="/beauty/dipilation/#depilation-lamination"
                  >
                    ПОДРОБНЕЕ
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={"quate-beauty"}>
          <section className="home-beauty_quate">
            <div className="container">
              <div className="home-beauty_quate__inner">
                <h2 className="home-beauty_quate__title">Отзывы</h2>
                <Carousel
                  className="home-beauty_quate__list"
                  showThumbs={false}
                  autoPlay
                  showStatus={false}
                  showArrows={false}
                  infiniteLoop
                  interval={5000}
                >
                  <div className="home-beauty_quate__content">
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        <video
                          src={quate_1}
                          style={{ height: "300px" }}
                          controls
                        ></video>
                      </div>
                      <p className="home-beauty_quate__name">Алла Л.</p>
                      <div className="home-beauty_quate__circle">А</div>
                    </div>
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        Я делала омолаживающий массаж в студии X-way beauty.
                        Специалист очень приятная и вежливая девушка Анна,
                        Делает все очень грамотно, руки сильные, чувствуется что
                        происходит процесс. В студии прекрасная обстановка и
                        интерьер, все очень лаконично и стильно. Так же
                        запомнилась девушка администратор, оперативно отвечала
                        на все вопросы, когда я немножко заплутала, помогла
                        добраться, я предупредила, что задержусь, меня
                        успокоили, предупредили, что ничего страшного. Я очень
                        довольна их работой.{" "}
                      </div>
                      <p className="home-beauty_quate__name">Нина К.</p>
                      <div className="home-beauty_quate__circle">Н</div>
                    </div>
                  </div>
                  <div className="home-beauty_quate__content">
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        Лучшие🔥 Уютная студии, вежливый, дружелюбный персонал😌
                        Ставим цель и достигаем ее вместе с профессионалами
                        своего дела 🤍
                      </div>
                      <p className="home-beauty_quate__name">
                        - ​Аделина С.
                      </p>
                      <div className="home-beauty_quate__circle">
                        <p>A</p>
                      </div>
                    </div>
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        Недавно впервые была в студии X-Way, это 10/10! Стильный
                        интерьер, тихо и уютно, играет приятная расслабляющая
                        музыка. Делала процедуру BMS FACE, переживала, никогда
                        не пробовала такой процедуры, но Анна, позаботилась об
                        этом: подготовила кожу, комментировала все этапы и
                        интересовалась самочувствием. Все прошло отлично.
                      </div>
                      <p className="home-beauty_quate__name">Вероничка П.</p>
                      <div className="home-beauty_quate__circle">
                        <p>В</p>
                      </div>
                    </div>
                  </div>

                  <div className="home-beauty_quate__content">
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        <img src={quate} alt="quate"/>
                      </div>
                      <p className="home-beauty_quate__name">
                        @good6ye
                      </p>
                      <div className="home-beauty_quate__circle">G</div>
                    </div>
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        Прихожу сюда после рабочего дня, чтоб расслабить
                        шейно-воротниковую зону, так как много сижу в течении
                        рабочего дня, под вечер боли становятся очень сильными.
                        Но мастер Анна, помогает мне в борьбе с этой проблемой!!
                        Массаж с помощью BMS тренажёра, который тщательно
                        прорабатывает и расслабляет мышцы, мне очень помогает!!!
                        Очень вежливый и улыбчивый персонал, предлагают выпить
                        чай или кофе, тем кто сталкивается с такой же проблемой
                        как у меня, советую.
                      </div>
                      <p className="home-beauty_quate__name">Алексей К.</p>
                      <div className="home-beauty_quate__circle">А</div>
                    </div>
                  </div>
                  <div className="home-beauty_quate__content">
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        Ходила на бмс- массаж лица и маски. Очень приятное
                        место, доброжелательный и профессиональный персонал. С
                        каждой процедурой моя кожа выглядит всё лучше и лучше.{" "}
                      </div>
                      <p className="home-beauty_quate__name">
                        Мария М.
                      </p>
                      <div className="home-beauty_quate__circle">М</div>
                    </div>
                    <div className="home-beauty_quate__block">
                      <div className="home-beauty_quate__text">
                        Приятное, спокойное место. Приветливый персонал.
                        Массаж-тренировка для лица просто супер👍🏻👍🏻👍🏻 вроде
                        полежал и отдохнул, а то же время мышцы лица поработали
                        и кровообращение улучшилось, и цвет лица похорошел.
                        Однозначно рекомендую!
                      </div>
                      <p className="home-beauty_quate__name">Евгения Л.</p>
                      <div className="home-beauty_quate__circle">Е</div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </ScrollableAnchor>

        <ScrollableAnchor id={"contacts-beauty"}>
          <Contacts />
        </ScrollableAnchor>

        <Form />
      </section>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = {
  chengeStateModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBeauty);
