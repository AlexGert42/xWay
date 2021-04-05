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

            </section>
        );
    }
}




const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(HomeBeauty)
