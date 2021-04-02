import React from "react";

import { chengeStateModal } from "../../../store/madal/actions"
import { connect } from "react-redux";

import ScrollableAnchor from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';
import Form from '../../form/FormContainer'

import imgAdvantage1 from "../../../img/fight/icon1.png"
import imgAdvantage2 from "../../../img/fight/icon2.png"
import imgAdvantage3 from "../../../img/fight/icon3.png"
import imgAdvantage4 from "../../../img/fight/icon4.png"
import imgAdvantage5 from "../../../img/fight/icon5.png"





class Fight extends React.Component {
    render() {
        sessionStorage.setItem('ThemeForm', 'fitFight');
        return (
            <section className="fight">
                <ScrollableAnchor id={"fight-start"}>
                    <Carousel className="fight__fone" showThumbs={false} autoPlay showStatus={false} showArrows={false} infiniteLoop interval={3000}>

                        <div className="fight__promo img_1">
                            <div className="container">
                                <div className="fight__promo_inner">
                                    <h1 className="fight__title">X-FIGHT</h1>
                                    <div className="fight__discription">
                                        Наскучил тренажерный зал? Фитнес не дает желаемых результатов? Тренеры студии X-WAY разработывают индивидуальные программы для взрослых и детей, мужчин и женщин.
                                        Смешивают стили борьбы, создавая новые
                                        универсальные практики.
                                    </div>
                                    <button className="fight__king-btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                                </div>
                            </div>
                        </div>

                        <div className="fight__promo img_2">
                            <div className="container">
                                <div className="fight__promo_inner right">
                                    <h1 className="fight__title">БОКС</h1>
                                    <div className="fight__discription">
                                        Классика боевых искусств. Постановка правильной техники ударов, защиты, тактику ведения боя. Идеально подходит для тех, кто хочет избавиться
                                        от стресса и выплеснуть агрессию. Занятия проходят под руководством профессиональных тренеров.
                                    </div>
                                    <button className="fight__king-btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                                </div>
                            </div>
                        </div>

                        <div className="fight__promo img_3">
                            <div className="container">
                                <div className="fight__promo_inner">
                                    <h1 className="fight__title">МУАЙ ТАЙ</h1>
                                    <div className="fight__discription">
                                        В Муай Тай, второе название которого “бой восьми конечностей”,
                                        можно наносить удары всеми частями тела.
                                        В нашей студии вы овладеете навыками этого потрясающего рукопашного единоборства, получите все, необходимое для ваших продуктивных тренировок. Ваш возраст, уровень подготовки и физические данные
                                        не имеют значения.
                                    </div>
                                    <button className="fight__king-btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                                </div>
                            </div>
                        </div>

                        <div className="fight__promo img_4">
                            <div className="container">
                                <div className="fight__promo_inner right">
                                    <h1 className="fight__title">ГРЭППЛИНГ</h1>
                                    <div className="fight__discription">
                                        Создан на базе наиболее эффективных техник бразильского джиу-джитсу, вольной борьбы, боевого самбо и дзюдо.
                                        Включает в себя броски и бросковую технику, как в классических единоборствах. Тандем основных борцовских техник, но с максимальным акцентом на болевые приёмы, на сдачу соперника.
                                    </div>
                                    <button className="fight__king-btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                                </div>
                            </div>
                        </div>


                        <div className="fight__promo img_5">
                            <div className="container">
                                <div className="fight__promo_inner right">
                                    <h1 className="fight__title">АЙКИДО</h1>
                                    <div className="fight__discription">
                                        Боевое искусство, представляющее собой синтез древних техник самообороны и борьбы в сочетании с философией гармонии духа.
                                        Тренировки включают обучение техникам самосохранения и самообороны для взрослых и детей
                                    </div>
                                    <button className="fight__king-btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                                </div>
                            </div>
                        </div>

                        
                        <div className="fight__promo img_6">
                            <div className="container">
                                <div className="fight__promo_inner right">
                                    <h1 className="fight__title">ЕДИНОБОРСТВА ДЛЯ ДЕТЕЙ</h1>
                                    <div className="fight__discription">
                                        Ваш ребенок не даст себ-я в обиду!
                                        Благодаря тренировкам ребенок активно развивается интеллектуально и психологически. Тренировки помогут выработать: настойчивость, упорство, дисциплина, ответственность за свои поступки и бойцовские качества.
                                    </div>
                                    <button className="fight__king-btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                                </div>
                            </div>
                        </div>

                    </Carousel>
                </ScrollableAnchor>


                <section className="fight_advantage">
                    <div className="container">
                        <div className="fight_advantage__inner">
                            <div className="fight_advantage__title">Какой результат вы получите</div>
                            <div className="fight_advantage__list">
                                <div className="fight_advantage__item">
                                    <img src={imgAdvantage1} alt="img_1" className="fight_advantage__img" />
                                    <p className="fight_advantage__subtitle">
                                        ДИСЦИПЛИНА
                                    </p>
                                    <p>
                                        Частые тренировки и соревнования формируют дисциплину, ведь сопровождаются соблюдением определенных правил. Вы сможете
                                        без затруднений рано просыпаться, успевать на важные события и многое другое. А Ваши дети станут более ответственны!
                                    </p>
                                </div>
                                <div className="fight_advantage__item">
                                    <img src={imgAdvantage2} alt="img_2" className="fight_advantage__img" />
                                    <p className="fight_advantage__subtitle">
                                        ЗДОРОВОЕ ТЕЛО
                                    </p>
                                    <p>
                                        Тренировки по боевым искусствам очень интенсивные.
                                        Одни из лучших видов спорта для поддержания физической формы, развития силы и выносливости. Улучшается координация, умение ориентироваться
                                        в пространстве.
                                    </p>
                                </div>
                                <div className="fight_advantage__item">
                                    <img src={imgAdvantage3} alt="img_3" className="fight_advantage__img" />
                                    <p className="fight_advantage__subtitle">
                                        САМОЗАЩИТА
                                    </p>
                                    <p>
                                        Обладая навыками в боевых единоборствах, вам не нужно оружие, чтобы защититься, ваше тело будет лучшим оружием, которое вы всегда будете иметь при себе.
                                    </p>
                                </div>
                                <div className="fight_advantage__item">
                                    <img src={imgAdvantage4} alt="img_4" className="fight_advantage__img" />
                                    <p className="fight_advantage__subtitle">
                                        УВЕРЕННОСТЬ
                                    </p>
                                    <p>
                                        Уверенность в себе,
                                        а следом и развитие целеустремленности. Стремление к выигрышу, уверенность в своих силах. Вы научитесь контролировать ваши эмоции, быстро принимать решения в повседневной жизни и помогает решать сложные проблемы.
                                    </p>
                                </div>
                                <div className="fight_advantage__item">
                                    <img src={imgAdvantage5} alt="img_5" className="fight_advantage__img" />
                                    <p className="fight_advantage__subtitle">
                                        СНЯТИЕ СТРЕССА
                                    </p>
                                    <p>
                                        Вы становитесь более ответственным и спокойным. Боевые искусства забирают весь ваш гнев и негатив, и предохраняет вас от всевозможных стрессов повседневной жизни.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="fight_prices">
                    <div className="container">
                        <div className="fight_prices__inner">
                            <div className="fight_prices__title">Наши абонементы и цены</div>
                            <div className="fight_prices__cards">
                                <div className="fight_card">
                                    <div className="fight_card__img fight_card__img_1"></div>
                                    <div className="fight_card__discription">
                                        <p className="fight_card__num">4 ТРЕНИРОВКИ</p>
                                        <p className="fight_card__cost">16200 ₽</p>
                                        <p className="fight_card__one_session">1 ТРЕНИРОВКА 4500 ₽</p>
                                    </div>
                                </div>
                                <div className="fight_card">
                                    <div className="fight_card__img fight_card__img_2"></div>
                                    <div className="fight_card__discription">
                                        <p className="fight_card__num">8 ТРЕНИРОВОК</p>
                                        <p className="fight_card__cost">30600 ₽</p>
                                        <p className="fight_card__one_session">1 ТРЕНИРОВКА 3825 ₽</p>
                                    </div>
                                </div>
                                <div className="fight_card">
                                    <div className="fight_card__img fight_card__img_3"></div>
                                    <div className="fight_card__discription">
                                        <p className="fight_card__num">12 ТРЕНИРОВОК</p>
                                        <p className="fight_card__cost">40500 ₽</p>
                                        <p className="fight_card__one_session">1 ТРЕНИРОВКА 3375 ₽</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Form/>

            </section>
        );
    }
}


const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(Fight)
