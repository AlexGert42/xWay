import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../img/homeBeauty/logoBeauty.png"
import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import Contacts from "../../contacts/Contacts";

import imgAdvantage1 from "../../../img/homeBeauty/icon_1.svg";
import imgAdvantage2 from "../../../img/homeBeauty/icon_2.svg";
import imgAdvantage3 from "../../../img/homeBeauty/icon_3.svg";
import imgAdvantage4 from "../../../img/homeBeauty/icon_4.svg";


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
                                                    Массаж — это не только удовольствие,
                                                    но и процедура, которая дарит большую пользу организму:
                                                    от кожного покрова до систем пищеварения и кровообращения.
                                                </p>
                                                <NavLink className="home-beauty_services__more" to="/beauty/massage">ПОДРОБНЕЕ</NavLink>
                                            </div>
                                            <h3 className="home-beauty_services__subtitle">МАССАЖ ТЕЛА<span /></h3>
                                        </div>

                                    </div>
                                    <div className="home-beauty_services__card">

                                        <div className="home-beauty_services__img cosmetology">
                                            <h3 className="home-beauty_services__subtitle"><span />КОСМЕТОЛОГИЯ И МАССАЖ ЛИЦА</h3>
                                            <div className="home-beauty_services__discription">
                                                <p className="home-beauty_services__text">
                                                    Естественная красота лица наш приоритет, мы используем эффективные и экологичные методики для сохранения вашей молодости.
                                                    Наша задача — максимальный эффект за короткое время: омолаживающий массаж, интенсивные уходы безопасные аппараты.

                                            </p>
                                                <NavLink className="home-beauty_services__more"  to="/beauty/cosmetology">ПОДРОБНЕЕ</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="home-beauty_services__card">

                                        <div className="home-beauty_services__img depilation">
                                            <div className="home-beauty_services__discription">
                                                <p className="home-beauty_services__text">
                                                    Мы поможем Вам сделать ваше тело не только более красивым, но и гладким. Идеально гладкие ножки и ухоженная зона бикини — мечта любого.
                                        </p>
                                                <NavLink className="home-beauty_services__more" to="/beauty/dipilation/#depilation-start">ПОДРОБНЕЕ</NavLink>

                                            </div>
                                            <h3 className="home-beauty_services__subtitle"><span />ДЕПИЛЯЦИЯ</h3>
                                        </div>

                                    </div>
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
                                <Carousel className="home-beauty_quate__list" showThumbs={false} autoPlay showStatus={false} showArrows={false} infiniteLoop interval={5000}>
                                    <div className="home-beauty_quate__content">
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">
                                                EMS-тренировки - это любовь!! Всего 30 мин,
                                                а ощущение, словно 3 часа отзанимался!!!
                                                Спасибо вам, что вы есть!!!! :)
                                        </div>
                                            <p className="home-beauty_quate__name">- Светлана</p>
                                            <div className="home-beauty_quate__circle"></div>
                                        </div>
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">
                                                ЭМС для меня эффективнее спортзала, контроль тренера и программа с учетом моих целей. Рекомендую для развития силы, выносливости, и набора мышечной массы!...
                                        </div>
                                            <p className="home-beauty_quate__name">Павел</p>
                                            <div className="home-beauty_quate__circle"></div>
                                        </div>
                                    </div>
                                    <div className="home-beauty_quate__content">
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">
                                                Методичный и техничный тренер.
                                                Объяснит и научит Вас всем лучшим техникам работы с EMS-тренажёром так, что понравится и Вам, и Вашему телу.
                                        </div>
                                            <p className="home-beauty_quate__name">Дмитрий</p>
                                            <div className="home-beauty_quate__circle"></div>
                                        </div>
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore aut voluptas mollitia maiores, tempore repudiandae, vel ea, voluptatibus quia cupiditate expedita quisquam obcaecati? Ipsum quaerat illum vel numquam vero.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus vero illum saepe maiores earum voluptatum unde quasi necessitatibus nulla voluptatem dolores et amet vitae beatae in, eligendi officia maxime pariatur.</div>
                                            <p className="home-beauty_quate__name">kiril</p>
                                            <div className="home-beauty_quate__circle"></div>
                                        </div>
                                    </div>
                                    <div className="home-beauty_quate__content">
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus numquam amet ducimus inventore aliquam, esse repellendus laborum dolorem pariatur perferendis laboriosam necessitatibus quidem quisquam omnis neque reprehenderit, ut molestiae magnam!</div>
                                            <p className="home-beauty_quate__name">alex</p>
                                            <div className="home-beauty_quate__circle"></div>
                                        </div>
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ducimus illo quibusdam! Enim optio rem id a sequi quod, repudiandae sed, asperiores itaque voluptatum fugiat repellendus nostrum eligendi. Nisi, laboriosam!</div>
                                            <p className="home-beauty_quate__name">victor</p>
                                            <div className="home-beauty_quate__circle"></div>
                                        </div>
                                    </div>
                                    <div className="home-beauty_quate__content">
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab delectus iure laborum cum a cumque nam veniam animi porro. Impedit vero nobis consectetur ducimus, laudantium temporibus ratione eveniet rem laborum!</div>
                                            <p className="home-beauty_quate__name">sergey</p>
                                            <div className="home-beauty_quate__circle"></div>
                                        </div>
                                        <div className="home-beauty_quate__block">
                                            <div className="home-beauty_quate__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, in velit mollitia perferendis fugit repellendus quos illum, nam, necessitatibus debitis explicabo unde doloribus sint commodi repellat reprehenderit ex similique non.</div>
                                            <p className="home-beauty_quate__name">ivan</p>
                                            <div className="home-beauty_quate__circle"></div>
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
                
               
            </section>
        );
    }
}




const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(HomeBeauty)
