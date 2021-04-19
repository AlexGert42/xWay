import React from "react";
import { chengeStateModal } from "../../../store/form/actions";
import { connect } from "react-redux";
import ScrollableAnchor from "react-scrollable-anchor";
import fone from "../../../img/cosmetology/fone.jpg";
import { Parallax } from "react-parallax";
import Form from "../../form/FormContainer";

class Cosmetology extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closeBlock_1: "close",
      closeBlock_2: "close",
      closeBlock_3: "close",
      closeBlock_4: "close",
      closeBlock_5: "close",
      closeBlock_6: "close",
      closeBlock_7: "close",
      closeBlock_8: "close",
      closeBlock_9: "close",
    };
  }
  openDiscription = (e) => {
    switch (e.target.accessKey) {
      case "block_1":
        if (this.state.closeBlock_1 === "close") {
          this.setState({ closeBlock_1: "" });
        } else {
          this.setState({ closeBlock_1: "close" });
        }
        break;
      case "block_2":
        if (this.state.closeBlock_2 === "close") {
          this.setState({ closeBlock_2: "" });
        } else {
          this.setState({ closeBlock_2: "close" });
        }
      case "block_3":
        if (this.state.closeBlock_3 === "close") {
          this.setState({ closeBlock_3: "" });
        } else {
          this.setState({ closeBlock_3: "close" });
        }
      case "block_4":
        if (this.state.closeBlock_4 === "close") {
          this.setState({ closeBlock_4: "" });
        } else {
          this.setState({ closeBlock_4: "close" });
        }
      case "block_5":
        if (this.state.closeBlock_5 === "close") {
          this.setState({ closeBlock_5: "" });
        } else {
          this.setState({ closeBlock_5: "close" });
        }
      case "block_6":
        if (this.state.closeBlock_6 === "close") {
          this.setState({ closeBlock_6: "" });
        } else {
          this.setState({ closeBlock_6: "close" });
        }
      case "block_7":
        if (this.state.closeBlock_7 === "close") {
          this.setState({ closeBlock_7: "" });
        } else {
          this.setState({ closeBlock_7: "close" });
        }
      case "block_8":
        if (this.state.closeBlock_8 === "close") {
          this.setState({ closeBlock_8: "" });
        } else {
          this.setState({ closeBlock_8: "close" });
        }
      case "block_9":
        if (this.state.closeBlock_9 === "close") {
          this.setState({ closeBlock_9: "" });
        } else {
          this.setState({ closeBlock_9: "close" });
        }
    }
  };

  render() {
    sessionStorage.setItem("ThemeForm", "beautyCosmetology");
    return (
      <section className="cosmetology">
        <ScrollableAnchor id={"cosmetology-start"}>
          <Parallax
            className="cosmetology_start"
            strength={500}
            bgImage={fone}
            bgImageStyle={{
              height: "1024px",
              maxHeight: "2160px",
              width: "1920px",
              maxWidth: "3840px",
            }}
            style={{ height: "100vh", width: "100%" }}
          >
            <div className="container">
              <div className="cosmetology_start__promo">
                <h1 className="cosmetology_start__title">
                  КОСМЕТОЛОГИЯ И МАССАЖ ЛИЦА
                </h1>
                <div className="cosmetology_start__discription">
                  Главным женским достоинством всегда была чистая, сияющая
                  и упругая кожа лица, без признаков старения и морщин. Для
                  устранения возрастных изменений попробуйтекос косметические
                  процедуры и массаж лица вместе со специалистами X-WAY.
                  <p>
                    Каждое лицо индивидуально, поэтому только
                    персонализированный уход, индивидуальные формулы,
                    и сочетания ингредиентов.
                  </p>
                </div>
                <div className="cosmetology_start__line">
                  <a
                    href={"/beauty/cosmetology/#cosmetology"}
                    className="cosmetology_start__link"
                  >
                    Косметология
                  </a>
                  <a
                    href={"/beauty/cosmetology/#massage"}
                    className="cosmetology_start__link"
                  >
                    Массаж Лица
                  </a>
                </div>
                <button
                  className="cosmetology_start__king-btn"
                  onClick={() => this.props.chengeStateModal(true)}
                >
                  ЗАПИСАТЬСЯ
                </button>
              </div>
            </div>
          </Parallax>
        </ScrollableAnchor>

        <ScrollableAnchor id={"massage"}>
          <section className="cosmetology_price_massage">
            <div className="cosmetology_price__inner">
              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_1 ${this.state.closeBlock_1}`}
                />
                <div className="cosmetology_price__content">
                  <div className="cosmetology_price__img img_1" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">BMS FACE</h2>
                    <h3 className="cosmetology_price__subtitle">
                      30 минут / 1 час
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Биомеханическая стимуляция — это уникальная технология
                        аппаратной тренировки мышц, которая позволяет избавиться
                        от различных косметологических проблем методом
                        безоперационного вмешательства...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_1}`}
                          accessKey="block_1"
                          onClick={this.openDiscription}
                        />
                      </p>

                      <p className={this.state.closeBlock_1}>
                        БМС помогает вернуть молодость за счет одновременного
                        воздействия на мышцы, кожу и подкожную клетчатку.
                      </p>
                      <p className={this.state.closeBlock_1}>
                        Как результат происходит быстрое восстановление
                        мышечного каркаса, наряду с которым усиливается лимфоток
                        и кровоток. За счет интенсивного питания кожи, ее цвет
                        становится здоровым. Помимо этого происходит
                        восстановление волос на голове. Укрепляется луковица,
                        а сам волос становится прочнее и эластичней, тем самым
                        предотвращая его выпадение и сечение.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`cosmetology_price__discription ${this.state.closeBlock_1}`}
                >
                  <div className="cosmetology_price__cost">
                    <p>1 процедура</p>
                    <p>
                      2 000 / <br /> 4 000
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>4 процедуры</p>
                    <p>
                      7 200 (1 800) / <br /> 14 400 (3 600)
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>8 процедур</p>
                    <p>
                      13 600 (1 700) / <br /> 27 200 (3 400)
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>12 процедур</p>
                    <p>
                      18 000 (1 500) / <br /> 36 000 (3 000)
                    </p>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_2 ${this.state.closeBlock_2}`}
                />
                <div className="cosmetology_price__content revers">
                  <div className="cosmetology_price__img img_2" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">TEST</h2>
                    <h3 className="cosmetology_price__subtitle">
                      30 - 50 минут
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Процедура, в ходе которой Вы знакомитесь со всеми видами
                        массажа и тренировкой мышц лица. У Вас есть отличная
                        возможность выбрать то, что подходит именно Вам...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_2}`}
                          accessKey="block_2"
                          onClick={this.openDiscription}
                        />
                      </p>

                      <p
                        className={`cosmetology_price__text_subtitle ${this.state.closeBlock_2}`}
                      >
                        В абонементе TEST Вы можете попробовать на выбор:
                      </p>
                      <ul className={this.state.closeBlock_2}>
                        <li>BMS face</li>
                        <li>Гуаша массаж</li>
                        <li>Баночный массаж</li>
                        <li>Миофасциальный массаж</li>
                        <li>Медовый массаж</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`cosmetology_price__discription ${this.state.closeBlock_2}`}
                >
                  <div className="cosmetology_price__cost">
                    <p>1 процедура</p>
                    <p>1 800</p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>2 процедуры</p>
                    <p>
                      3 300
                      <br />1 650 / 1 сеанс
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>3 процедуры</p>
                    <p>
                      4 500
                      <br />1 500 / 1 сеанс
                    </p>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_3 ${this.state.closeBlock_3}`}
                />
                <div className="cosmetology_price__content">
                  <div className="cosmetology_price__img img_3" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">COMBO</h2>
                    <h3 className="cosmetology_price__subtitle">60 минут </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Абонемент «Combo» — это тренировка + массаж мышц лица
                        и шеи/ Комплекс процедур, Вы выбираете с нашим
                        специалистом для того, чтобы получить максимальный
                        результ...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_3}`}
                          accessKey="block_3"
                          onClick={this.openDiscription}
                        />
                      </p>

                      <p
                        className={`cosmetology_price__text_subtitle ${this.state.closeBlock_3}`}
                      >
                        В абонементе TEST Вы можете попробовать на выбор:
                      </p>
                      <ul className={this.state.closeBlock_3}>
                        <li>BMS face</li>
                        <li>Гуаша массаж</li>
                        <li>Баночный массаж</li>
                        <li>Миофасциальный массаж</li>
                        <li>Медовый массаж</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={`cosmetology_price__discription ${this.state.closeBlock_3}`}
                >
                  <div className="cosmetology_price__cost">
                    <p>1 процедура</p>
                    <p>4 000</p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>4 процедуры</p>
                    <p>
                      14 400
                      <br />3 600 / 1 сеанс
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>8 процедур</p>
                    <p>
                      27 200
                      <br />3 400 / 1 сеанс
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>12 процедур</p>
                    <p>
                      36 000
                      <br />3 000 / 1 сеанс
                    </p>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_4 ${this.state.closeBlock_4}`}
                />
                <div className="cosmetology_price__content revers">
                  <div className="cosmetology_price__img img_4" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">МАССАЖ</h2>
                    <h3 className="cosmetology_price__subtitle">
                      30 минут <br />1 процедура / 2 000{" "}
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Уникальная методика, включающая в себя лучшие техники
                        работы с лицом, такие как: миофасциальный массаж, массаж
                        Гуаша, баночный и другие...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_4}`}
                          accessKey="block_4"
                          onClick={this.openDiscription}
                        />
                      </p>
                      <p className={this.state.closeBlock_4}>
                        Комплексный подход помогает навсегда забыть об инъекциях
                        и операционной подтяжке лица, так как естественным
                        образом возвращает красоту и здоровье лицу и дает
                        долгосрочный результат:
                      </p>
                      <ul className={this.state.closeBlock_4}>
                        <li>Здоровое сияние и матовый тон кожи</li>
                        <li>Превосходный тонус мышц и кожных покровов</li>
                        <li>Баночный массаж</li>
                        <li>Подтянутый овал лица</li>
                        <li>Незаметные поры</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_5 ${this.state.closeBlock_5}`}
                />
                <div className="cosmetology_price__content">
                  <div className="cosmetology_price__img img_5" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">RELAX</h2>
                    <h3 className="cosmetology_price__subtitle">45 минут</h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Ручной массаж лица, сочетающий различные техники, дает
                        эффект натурального лифтинга, но без химического
                        воздействия. Правильное мануальное воздействие на кожу
                        позволяет лечить и предупреждать такие косметические
                        недостатки, как угревая сыпь, расширенные поры,
                        дряблость и пятна на коже...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_5}`}
                          accessKey="block_5"
                          onClick={this.openDiscription}
                        />
                      </p>

                      <p className={this.state.closeBlock_5}>
                        Кроме того, Relax — это удивительно приятная процедура,
                        улучшающая настроение и общее эмоциональное состояние,
                        что, в свою очередь, также не замедлит сказаться
                        на внешнем виде.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`cosmetology_price__discription ${this.state.closeBlock_5}`}
                >
                  <div className="cosmetology_price__cost">
                    <p>1 процедура</p>
                    <p>4 000</p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>4 процедуры</p>
                    <p>
                      14 400
                      <br />3 600 / 1 сеанс
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>8 процедур</p>
                    <p>
                      27 200
                      <br />3 400 / 1 сеанс
                    </p>
                  </div>
                  <div className="cosmetology_price__cost">
                    <p>12 процедур</p>
                    <p>
                      36 000
                      <br />3 000 / 1 сеанс
                    </p>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_6 ${this.state.closeBlock_6}`}
                />
                <div className="cosmetology_price__content revers">
                  <div className="cosmetology_price__img img_6" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">ГУАША МАССАЖ</h2>
                    <h3 className="cosmetology_price__subtitle">
                      30 минут <br />1 процедура / 1 500
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Удивительная китайская техника массажа, используемая как
                        средство для оздоровления организма, увлажнения
                        и придания тонуса коже лица...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_6}`}
                          accessKey="block_6"
                          onClick={this.openDiscription}
                        />
                      </p>

                      <p className={this.state.closeBlock_6}>
                        Массаж проводится специальными пластинами, сделанными
                        из натуральных камней (нефрита, оникса, агата) или рогов
                        черного буйвола. Нежными поглаживающими движениями
                        массажист воздействует на рефлекторные точки и зоны,
                        отвечающие за работу тех или иных органов,
                        и энергетические меридианы, улучшая кровообращение
                        и лимфоток.
                      </p>
                      <p className={this.state.closeBlock_6}>
                        Вы увидите эффект сразу же после первого сеанса массажа.
                        После курса вы не только станете выглядеть лучше,
                        но и будете чувствовать себя спокойнее и гармоничнее,
                        уйдет стресс, улучшится настроение.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`cosmetology_price__advantages ${this.state.closeBlock_6}`}
                >
                  <div className="cosmetology_price__item">
                    <p>Подходит людям любого возраста</p>
                    <p>
                      Способствует выработке собственного коллагена и эластина,
                      за счет чего кожа становится более эластичной и упругой
                    </p>
                  </div>
                  <div className="cosmetology_price__item">
                    <p>
                      При массаже лица Гуаша прорабатывается глубоки мышцы лица,
                      что позволяет подтянуть овал лица, снять мышечные зажимы,
                      расслабить лицо
                    </p>
                    <p>
                      Способствует разглаживанию морщинок и складок на лице.
                    </p>
                  </div>
                  <div className="cosmetology_price__item">
                    <p>
                      За счет лимфодренажного эффекта уменьшаются отеки и темные
                      круги под глазами
                    </p>
                    <p>Уходят головные боли</p>
                  </div>
                  <div className="cosmetology_price__item">
                    <p>
                      Улучшается кровообращение, что позволяет лучше насыщать
                      кожу питательными веществами
                    </p>
                    <p>Уходят головные боли</p>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_7 ${this.state.closeBlock_7}`}
                />
                <div className="cosmetology_price__content">
                  <div className="cosmetology_price__img img_7" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">
                      МИО-ФАСЦИАЛЬНЫЙ МАССАЖ
                    </h2>
                    <h3 className="cosmetology_price__subtitle">
                      30 минут
                      <br />1 процедура / 1 600
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Самая результативная техника при работе с мышечным
                        и фасциальным слоем, так как именно мышцы лица выполняют
                        каркасную функцию. Восстановление здорового тонуса мышц
                        дает эффект разглаживания лица...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_7}`}
                          accessKey="block_7"
                          onClick={this.openDiscription}
                        />
                      </p>
                      <p className={this.state.closeBlock_7}>
                        Комплексный подход помогает навсегда забыть об инъекциях
                        и операционной подтяжке лица, так как естественным
                        образом возвращает красоту и здоровье лицу и дает
                        долгосрочный результат:
                      </p>
                      <p className={this.state.closeBlock_7}>
                        Фасции — это своеобразный каркас нашего организма,
                        оболочки из плотных соединительных волокон,
                        пронизывающие все тело человека. Воздействуя на них,
                        можно сделать человека визуально моложе примерно
                        на 5 лет. Именно мышцы являются точкой приложения
                        стресса. Проработав каждую мимическую мышцу
                        в отдельности, происходит снятие психоэмоциональных
                        блоков.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_8 ${this.state.closeBlock_8}`}
                />
                <div className="cosmetology_price__content revers">
                  <div className="cosmetology_price__img img_8" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">МЕДОВЫЙ МАССАЖ</h2>
                    <h3 className="cosmetology_price__subtitle">
                      30 минут
                      <br />1 процедура / 1 500
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Медовый массаж — это сочетание лечебного действия
                        пчелиного меда и массажа. Медовый массаж лица является
                        великолепным средством поддержания мышечного тонуса
                        в условиях всевозможных перегрузок и стрессов, снимает
                        усталость и придает лицу легкость и свежесть...
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_8}`}
                          accessKey="block_8"
                          onClick={this.openDiscription}
                        />
                      </p>
                      <p className={this.state.closeBlock_8}>
                        Мед оказывает противовоспалительное и вяжущее действие,
                        очищает поры, ускоряет регенеративные процессы в кожных
                        покровах и восстанавливает их природную защиту,
                        благотворно влияя на все функции кожи.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__card">
                <div
                  className={`cosmetology_price__card_img card_img_9 ${this.state.closeBlock_9}`}
                />
                <div className="cosmetology_price__content ">
                  <div className="cosmetology_price__img img_9" />
                  <div className="cosmetology_price__block">
                    <h2 className="cosmetology_price__title">
                      ВАКУУМНЫЙ МАССАЖ
                    </h2>
                    <h3 className="cosmetology_price__subtitle">
                      30 минут
                      <br />1 процедура / 1 600
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Современная омолаживающая методика, которая действует
                        как лифтинговые средства, придавая коже тонус,
                        упругость, избавляя от выраженных эстетических дефектов
                        в виде морщин, отеков, второго подбородка, неровностей.{" "}
                        <br />
                        <span
                          className={`dot ${this.state.closeBlock_9}`}
                          accessKey="block_9"
                          onClick={this.openDiscription}
                        />
                      </p>
                      <p className={this.state.closeBlock_9}>
                        Во время процедуры косметолог прикладывает к поверхности
                        специальную банку, внутри которой создается
                        отрицательное давление. Из-за давления усиливается
                        кровообращение и лимфодренаж в мягких тканях,
                        активируется выработка коллагена и эластина. Кроме
                        этого, баночная процедура помогает избавиться от отеков
                        и других застойных явлений, быстрее вывести из организма
                        вредные токсины, удалить ороговевшие клетки,
                        нормализовать функционирование сальных желез, попутно
                        решив проблемы как сухой, так и жирной кожи.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollableAnchor>
        <ScrollableAnchor id={"cosmetology"}>
          <section className="cosmetology_price_cosmetology">
            <div className="cosmetology_price__inner">
              <div className="cosmetology_price__block">
                <div className="cosmetology_price__fone fone_1" />
                <div className="cosmetology_price__card">
                  <div className="cosmetology_price__img img_1" />
                  <div className="cosmetology_price__content">
                    <h2 className="cosmetology_price__title">GOLD MASK</h2>
                    <h3 className="cosmetology_price__subtitle">
                      1 процедура / 500 ₽
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Предотвращение преждевременного старения кожи, глубокое
                        увлажнение, омолаживающие свойства, осветление тона
                        лица, защита кожи от разрушительного воздействия
                        неблагоприятных факторов внешней среды.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cosmetology_price__card revers">
                  <div className="cosmetology_price__img img_2" />
                  <div className="cosmetology_price__content">
                    <h2 className="cosmetology_price__title">BLACK MASK</h2>
                    <h3 className="cosmetology_price__subtitle">
                      1 процедура / 500 ₽
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Вытягивает загрязнения из пор, освежает цвет лица,
                        предотвращает появление комедонов и акне, снимает
                        микровоспаления, обладает матирующим действием.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__block">
                <div className="cosmetology_price__fone fone_2" />
                <div className="cosmetology_price__card">
                  <div className="cosmetology_price__img img_3" />
                  <div className="cosmetology_price__content">
                    <h2 className="cosmetology_price__title">
                      ПУЗЫРЬКОВАЯ МАСКА (ЗОНА)
                    </h2>
                    <h3 className="cosmetology_price__subtitle">
                      1 процедура / 500 ₽
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Обогащение клеток эпидермиса, отшелушивание и очищение
                        пор от сальных выделений, борьба с черными точками,
                        осветление пигментных пятен, нормализация обменных
                        процессов.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cosmetology_price__card revers">
                  <div className="cosmetology_price__img img_4" />
                  <div className="cosmetology_price__content">
                    <h2 className="cosmetology_price__title">
                      АЛЬГИНАТНАЯ МАСКА
                    </h2>
                    <h3 className="cosmetology_price__subtitle">
                      1 процедура / 1000 ₽
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Охлаждение, увлажнение кожи. Быстрое снятие покраснения
                        и раздражения, укрепление кожного барьера и усиление
                        эффекта трансдермальной доставки ингредиентов.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cosmetology_price__block">
                <div className="cosmetology_price__fone fone_3" />
                <div className="cosmetology_price__card">
                  <div className="cosmetology_price__img img_5" />
                  <div className="cosmetology_price__content">
                    <h2 className="cosmetology_price__title">
                      КОЛЛАГЕНОВАЯ МАСКА
                    </h2>
                    <h3 className="cosmetology_price__subtitle">
                      1 процедура / 500 ₽
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Повышение упругости кожи, стимуляция защитных функций
                        эпидермиса, смягчение и увлажнение кожи.{" "}
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="cosmetology_price__card revers">
                  <div className="cosmetology_price__img img_6" />
                  <div className="cosmetology_price__content">
                    <h2 className="cosmetology_price__title">СКРАБ ДЛЯ ЛИЦА</h2>
                    <h3 className="cosmetology_price__subtitle">
                      1 процедура / 300 ₽
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Эффективное очищение пор, мягкое отшелушивание
                        омертвевших частичек кожи, стимуляция клеточного
                        обновления.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cosmetology_price__card">
                  <div className="cosmetology_price__img img_7" />
                  <div className="cosmetology_price__content">
                    <h2 className="cosmetology_price__title">
                      КАРБОКСИТЕРАПИЯ
                    </h2>
                    <h3 className="cosmetology_price__subtitle">
                      1 процедура / 2200 ₽
                    </h3>
                    <div className="cosmetology_price__text">
                      <p>
                        Насыщение кожи кислородом, выравнивание тона кожи,
                        снятие воспаления и раздражения, повышение тонуса и
                        эластичности кожи, лифтинг лица.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cosmetology);
