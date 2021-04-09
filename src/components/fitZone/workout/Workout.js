import React from "react";
import Form from "../../form/FormContainer"

import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux";

import ScrollableAnchor from 'react-scrollable-anchor';



import imgAdvantage1 from "../../../img/workout/icon_1.png"
import imgAdvantage2 from "../../../img/workout/icon_2.png"
import imgAdvantage3 from "../../../img/workout/icon_3.png"
import imgAdvantage4 from "../../../img/workout/icon_4.png"
import imgAdvantage5 from "../../../img/workout/icon_5.png"



class Workout extends React.Component {


    render() {
        sessionStorage.setItem('ThemeForm', 'fitWorkout');
        return (


            <section className="workout">
                <ScrollableAnchor id={"workout-start"}>
                    <section className="workout__fone">
                        <div className="workout__promo">
                            <div className="workout__promo_inner">
                                <h1 className="workout__title">WORK OUT</h1>
                                <p className="workout__discription">
                                    Тренировки на улице — это идеальный вид физической активности в теплое время года. Сочетание эффективно составленной тренировочной программы и возможностей, которые дает открытое помещение (обилие кислорода, солнечные лучи и витамин D, разнообразные локации) позволят Вам максимально быстро получить желаемый результат.
                                    </p>
                                <button className="workout__king_btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                            </div>
                            <div className="workout__promo"></div>
                        </div>
                    </section>
                </ScrollableAnchor>

                <section className="workout_advantage">
                    <div className="container">
                        <div className="workout_advantage__inner">
                            <div className="workout_advantage__title">Преимущества заанятий Воркаутом</div>
                            <div className="workout_advantage__list">
                                <div className="workout_advantage__item">
                                    <img src={imgAdvantage1} alt="img_1" className="workout_advantage__img" />
                                    <p className="workout_advantage__subtitle">
                                        O2
                                    </p>
                                    <p>
                                        Выполняя упражнения
                                        на свежем воздухе, клетки организма активно насыщаются кислородом, улучшается общее самочувствие, внешний вид и обмен веществ.
                                    </p>
                                </div>
                                <div className="workout_advantage__item">
                                    <img src={imgAdvantage2} alt="img_2" className="workout_advantage__img" />
                                    <p className="workout_advantage__subtitle">
                                        РАЗНООБРАЗИЕ
                                    </p>
                                    <p>
                                        Разнообразный выбор упражнений. Воркаут тренирует все группы мышц рук, ног, пресса.
                                        При чередовании упражнений можно обрести красивый рельеф
                                        и выносливое тело.
                                    </p>
                                </div>
                                <div className="workout_advantage__item">
                                    <img src={imgAdvantage3} alt="img_3" className="workout_advantage__img" />
                                    <p className="workout_advantage__subtitle">
                                        УНИВЕРСАЛЬНОСТЬ
                                    </p>
                                    <p>
                                        Заниматься могут девушки и парни, дети, люди пожилого возраста
                                        или с ограниченными возможностями.
                                        Не нужно быть в отличной физической форме, иметь особые навыки и умения.
                                    </p>
                                </div>
                                <div className="workout_advantage__item">
                                    <img src={imgAdvantage4} alt="img_4" className="workout_advantage__img" />
                                    <p className="workout_advantage__subtitle">
                                        БЕЗОПАСНОСТЬ
                                    </p>
                                    <p>
                                        Травматичность сведена
                                        к минимуму, потому что все упражнения делаются без дополнительных отягощений, под контролем профессиональных тренеров.
                                    </p>
                                </div>
                                <div className="workout_advantage__item">
                                    <img src={imgAdvantage5} alt="img_5" className="workout_advantage__img" />
                                    <p className="workout_advantage__subtitle">
                                        БЫСТРЫЙ РЕЗУЛЬТАТ
                                    </p>
                                    <p>
                                        Систематичность
                                        и правильное питание помогут быстро достичь видимых результатов, красивого и здорового тела.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="workout_prices">
                    <div className="container">
                        <div className="workout_prices__inner">
                            <div className="workout_prices__title">Наши абонементы и цены</div>
                            <div className="workout_prices__cards">
                                <div className="workout_card">
                                    <div className="workout_card__img workout_card__img_1"></div>
                                    <div className="workout_card__discription">
                                        <p className="workout_card__num">4 ТРЕНИРОВКИ</p>
                                        <p className="workout_card__cost">16200 ₽</p>
                                        <p className="workout_card__one_session">1 ТРЕНИРОВКА 4500 ₽</p>
                                    </div>
                                </div>
                                <div className="workout_card">
                                    <div className="workout_card__img workout_card__img_2"></div>
                                    <div className="workout_card__discription">
                                        <p className="workout_card__num">8 ТРЕНИРОВОК</p>
                                        <p className="workout_card__cost">30600 ₽</p>
                                        <p className="workout_card__one_session">1 ТРЕНИРОВКА 3825 ₽</p>
                                    </div>
                                </div>
                                <div className="workout_card">
                                    <div className="workout_card__img workout_card__img_3"></div>
                                    <div className="workout_card__discription">
                                        <p className="workout_card__num">12 ТРЕНИРОВОК</p>
                                        <p className="workout_card__cost">40500 ₽</p>
                                        <p className="workout_card__one_session">1 ТРЕНИРОВКА 3375 ₽</p>
                                    </div>
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


const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(Workout)
