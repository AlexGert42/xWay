import React from "react";
import { NavLink } from "react-router-dom";
import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Parallax } from "react-parallax";
import fone from "../../../img/massage/fone.jpg"

import imgAdvantage1 from "../../../img/massage/icon_1.png"
import imgAdvantage2 from "../../../img/massage/icon_2.png"
import imgAdvantage3 from "../../../img/massage/icon_3.png"
import imgAdvantage4 from "../../../img/massage/icon_4.png"


class Message extends React.Component {
    render() {
        return (
            <section className="massage">
                <ScrollableAnchor id={'massage-start'}>
                    <Parallax
                        className="massage_start"
                        strength={400}
                        bgImage={fone}
                        bgImageStyle={{ height: '100vh', width: '100%', minWidth: '1920px' }}
                        style={{ height: '100vh', width: '100%' }}
                    >
                        <div className="massage_start__promo">
                            <h1 className="massage_start__title">МАССАЖ ТЕЛА</h1>
                            <div className="massage_start__discription">
                                Массаж в студии X-WAY — удивительная божественная система приемов воздействия на тело и душу человека.
                                Массаж лучше всего помогает справиться с остеохондрозом, сердечной недостаточностью, ожирением, а также ревматизмом и многими другими заболеваниями.
                                    <p>
                                    Невозможно недооценить пользу общего массажа тела, ведь он помогает справиться со стрессом, депрессией и плохим настроением. Кроме этого эта процедура способствует улучшению сна и помогает избавиться от целлюлита, улучшая кровообращение и стабилизируя обменный процесс.
                                    </p>
                            </div>
                            <button className="massage_start__king-btn" onClick={() => this.props.chengeStateModal(true)}>ЗАПИСАТЬСЯ</button>
                        </div>
                    </Parallax>
                </ScrollableAnchor>

                <section className="massage_advantage">
                    <div className="container">
                        <div className="massage_advantage__inner">
                            <div className="massage_advantage__title">Польза массажа тела</div>
                            <div className="massage_advantage__list">
                                <div className="massage_advantage__item">
                                    <img src={imgAdvantage1} alt="img_1" className="massage_advantage__img" />
                                    <p>
                                        Улучшения общего состояния
                                        организма, повышение имунитета
                                        и избавление от стресса
                                    </p>
                                </div>
                                <div className="massage_advantage__item">
                                    <img src={imgAdvantage2} alt="img_2" className="massage_advantage__img" />
                                    <p>
                                        Повышение тонуса тела и улучшение состояния кожи
                                    </p>
                                </div>
                                <div className="massage_advantage__item">
                                    <img src={imgAdvantage3} alt="img_3" className="massage_advantage__img" />
                                    <p>
                                        Устранения болевых ощущений
                                        и расслабление мышц
                                </p>
                                </div>
                                <div className="massage_advantage__item">
                                    <img src={imgAdvantage4} alt="img_4" className="massage_advantage__img" />
                                    <p>
                                        Восстановления после операций
                                        и заболеваний, лечение конкретных патологий
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="massage_price">
                    <div class="massage_price__inner">
                        <h3 class="massage_price__title">Стоимость услуг</h3>
                        <div class="massage_price__content">
                            <p>Разовая процедура<span>3500</span></p>
                            <p>4 процедуры<span>12600 </span></p>
                            <p>8 процедур <span>23800</span></p>
                            <p>12 процедур<span>31500</span></p>
                            <p>Спина 30 минут<span>2000</span></p>
                            <p>Ноги 30 минут<span>2000</span></p>
                            <p>Шейно-воротниковая зона<span>1500</span></p>
                        </div>
                    </div>
                    <div class="massage_price__img"></div>
                </section>
            </section>
        );
    }
}




const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(Message)
