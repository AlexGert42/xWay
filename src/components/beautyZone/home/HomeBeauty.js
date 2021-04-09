import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../img/homeBeauty/logoBeauty.png"
import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux";
import ScrollableAnchor from 'react-scrollable-anchor';

import imgAdvantage1 from "../../../img/homeBeauty/icon_1.svg"
import imgAdvantage2 from "../../../img/homeBeauty/icon_2.svg"
import imgAdvantage3 from "../../../img/homeBeauty/icon_3.svg"
import imgAdvantage4 from "../../../img/homeBeauty/icon_4.svg"

import cardFace from "../../../img/homeBeauty/card_1.jpg"
import cardDepilation from "../../../img/homeBeauty/card_2.jpg"
import cardMassage from "../../../img/homeBeauty/card_3.jpg"


class HomeBeauty extends React.Component {
    render() {
        return (
            <section className="home-beauty" >

                <ScrollableAnchor id={"home-beauty"}>

                    <div className="home-beauty__promo">
                        <div className="home-beauty__fone">
                            <div className="home-beauty__promo-text">
                                <h1 className="home-beauty__title">
                                    ДОБРО ПОЖАЛОВАТЬ В<span><img src={logo} alt="logo" /></span>
                                </h1>
                                <div className="home-beauty__discription">Твой путь к совершенству</div>
                                <button className="home-beauty__king-btn" onClick={() => this.props.chengeStateModal(true)} >посетить студию</button>
                            </div>
                        </div>
                    </div>

                </ScrollableAnchor>


                <section className="home-beauty_advantage">
                    <div className="container">
                        <div className="home-beauty_advantage__inner">
                            <ul className="home-beauty_advantage__list">
                                <li className="home-beauty_advantage__item">
                                    <div className="home-beauty_advantage__img">
                                        <img src={imgAdvantage1} alt="icon" />
                                    </div>
                                    <h3 className="home-beauty_advantage__title">Мы профессионалы</h3>
                                    <div className="home-beauty_advantage__text">
                                        <p>
                                            Мы являемся большими экспертами
                                            по правильному уходу за своей внешностью,
                                            а именно за своей кожей.
                                            У нас работают только профессионалы
                                            с проверенной годами репутацией и чуткостью к потребностям наших клиенток.
                                    </p>
                                        <p>
                                            Вы можете нам доверять.
                                    </p>
                                    </div>
                                </li>
                                <li className="home-beauty_advantage__item">
                                    <div className="home-beauty_advantage__img">
                                        <img src={imgAdvantage2} alt="icon" />
                                    </div>
                                    <h3 className="home-beauty_advantage__title">Косметика  класса люкс</h3>
                                    <div className="home-beauty_advantage__text">
                                        <p>
                                            Мы являемся большими экспертами
                                            по правильному уходу за своей внешностью,
                                            а именно за своей кожей.
                                            У нас работают только профессионалы
                                            с проверенной годами репутацией и чуткостью к потребностям наших клиенток.
                                    </p>
                                        <p>
                                            Вы можете нам доверять.
                                    </p>
                                    </div>
                                </li>
                                <li className="home-beauty_advantage__item">
                                    <div className="home-beauty_advantage__img">
                                        <img src={imgAdvantage3} alt="icon" />
                                    </div>
                                    <h3 className="home-beauty_advantage__title">Медицинское образование</h3>
                                    <div className="home-beauty_advantage__text">
                                        <p>
                                            Мы являемся большими экспертами
                                            по правильному уходу за своей внешностью,
                                            а именно за своей кожей.
                                            У нас работают только профессионалы
                                            с проверенной годами репутацией и чуткостью к потребностям наших клиенток.
                                    </p>
                                        <p>
                                            Вы можете нам доверять.
                                    </p>
                                    </div>
                                </li>
                                <li className="home-beauty_advantage__item">
                                    <div className="home-beauty_advantage__img">
                                        <img src={imgAdvantage4} alt="icon" />
                                    </div>
                                    <h3 className="home-beauty_advantage__title">Новейшее оборудование</h3>
                                    <div className="home-beauty_advantage__text">
                                        <p>
                                            Мы являемся большими экспертами
                                            по правильному уходу за своей внешностью,
                                            а именно за своей кожей.
                                            У нас работают только профессионалы
                                            с проверенной годами репутацией и чуткостью к потребностям наших клиенток.
                                    </p>
                                        <p>
                                            Вы можете нам доверять.
                                    </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>



                <section class="home-beauty_services">
                    <div class="container">
                        <div class="home-beauty_services__inner">
                            <h2 class="home-beauty_services__title">Наши услуги</h2>
                            <div class="home-beauty_services__cards">
                                <div class="home-beauty_services__card">
                                    <img class="home-beauty_services__img" src={cardFace} alt="card" />
                                    <div class="home-beauty_services__discription">
                                        <div>
                                            <h3 class="home-beauty_services__subtitle">КОСМЕТОЛОГИЯ</h3>
                                            <p class="home-beauty_services__text">
                                                Естественная красота лица наш приоритет,  мы используем эффективные и экологичные методики для сохранения молодости лица.
                                                Наша задача - максимальный эффект за короткое время: интенсивные уходы и безопасные аппараты.
                                                Каждое лицо индивидуально, поэтому только персонализированный уход, индивидуальные формулы и сочетания ингредиентов.
                                        </p>
                                        </div>
                                        <NavLink class="home-beauty_services__more" to="/">ПОДРОБНЕЕ</NavLink>
                                    </div>
                                </div>
                                <div class="home-beauty_services__card">
                                    <img class="home-beauty_services__img" src={cardDepilation} alt="card" />
                                    <div class="home-beauty_services__discription">
                                        <div>
                                            <h3 class="home-beauty_services__subtitle">МАССАЖ</h3>
                                            <p class="home-beauty_services__text">
                                                Главным женским достоинством всегда была чистая, сияющая и упругая кожа лица, без признаков старения и морщин.
                                                Для устранения возрастных изменений попробуйте массаж лица вместе со специалистами X-WAY. Стимуляция дермы насыщает ее питательными компонентами и кислородом, мышцы укрепляются, активизируются кровообращение и обмен веществ, выводятся токсины. В результате вы обретаете четкий и привлекательный контур лица.
                                            </p>
                                        </div>
                                        <NavLink class="home-beauty_services__more" to="/">ПОДРОБНЕЕ</NavLink>
                                    </div>
                                </div>
                                <div class="home-beauty_services__card">
                                    <img class="home-beauty_services__img" src={cardMassage} alt="card" />
                                    <div class="home-beauty_services__discription">
                                        <div>
                                            <h3 class="home-beauty_services__subtitle">ДЕПИЛЯЦИЯ</h3>
                                            <p class="home-beauty_services__text">
                                                Мы поможем Вам сделать ваше тело не только более красивым, но и гладким.  Идеально гладкие ножки и ухоженная зона бикини – мечта любой девушки. Кроме того, в нашей студии Вы можете удалить волоски из подмышечных впадин, с рук, живота, ягодиц, бикини и спины. Депиляция – это еще и неотъемлемая часть подготовки к пляжному сезону.  Шугаринг и восковая депиляция для мужчин и женщин.
                                        </p>
                                        </div>
                                        <NavLink class="home-beauty_services__more" to="/">ПОДРОБНЕЕ</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="home-beauty_services">
                    <div className="container">
                        <h2 className="home-beauty_services__title">УСЛУГИ</h2>
                        <div className="home-beauty_services__inner">
                            <div className="home-beauty_services__img img_cosmetology">
                                <div className="home-beauty_services__text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, perferendis assumenda ipsa veniam omnis et ullam magni id, ducimus nesciunt neque harum eos! Placeat corrupti, harum commodi expedita cum ipsa.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, perferendis assumenda ipsa veniam omnis et ullam magni id, ducimus nesciunt neque harum eos! Placeat corrupti, harum commodi expedita cum ipsa.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, perferendis assumenda ipsa veniam omnis et ullam magni id, ducimus nesciunt neque harum eos! Placeat corrupti, harum commodi expedita cum ipsa.
                                </p>
                                </div>
                                <div className="home-beauty_services__text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, perferendis assumenda ipsa veniam omnis et ullam magni id, ducimus nesciunt neque harum eos! Placeat corrupti, harum commodi expedita cum ipsa.
                                </p>
                                </div>
                                <div className="home-beauty_services__text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, perferendis assumenda ipsa veniam omnis et ullam magni id, ducimus nesciunt neque harum eos! Placeat corrupti, harum commodi expedita cum ipsa.
                                </p>
                                </div>
                            </div>
                            <div className="home-beauty_services__discription">
                                <div className="home-beauty_services__subtitle">Косметология</div>
                                <div className="home-beauty_services__subtitle">Депиляция</div>
                                <div className="home-beauty_services__subtitle">Массаж</div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </section>
        );
    }
}




const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(HomeBeauty)
