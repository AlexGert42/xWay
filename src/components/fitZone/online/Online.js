import React from "react";
import Deposit from "../../deposit/DepositContainer"

import { chengeStateModal } from "../../../store/form/actions";
import { connect } from "react-redux";
import ScrollableAnchor from "react-scrollable-anchor";
import { Parallax } from "react-parallax";
import Form from "../../form/FormContainer";
import fone from "../../../img/online/online.jpg";

class HomeBeauty extends React.Component {
    render() {
        sessionStorage.setItem("ThemeForm", "fitOnline");
        return (
            <section className="online_fit">
                <ScrollableAnchor id={"online-start"}>
                    <Parallax
                        className="online_start"
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
                        <div className="online_fit__promo">
                            <div className="online_fit__fone">
                                <div className="online_fit__promo-text">
                                    <h1 className="online_fit__title">
                                        ONLINE ТРЕНИРОВКИ
                                    </h1>
                                    <div className="online_fit__discription">
                                        Тренеровки онлайн — это то преимущество,
                                        о котором раньше вообще не могли мечтать
                                        ни то, что обычные люди, а даже
                                        профессиональные спортсмены.
                                    </div>
                                    <button
                                        className="online_fit__king-btn"
                                        onClick={() =>
                                            this.props.chengeStateModal(true)
                                        }
                                    >
                                        ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </ScrollableAnchor>

                <section className="online_advantage">
                    <div className="online_advantage__inner">
                        <p className="online_advantage__subtitle">
                            Вы сможете тренироваться и консультироваться по всем
                            интересующим его вопросам удаленно со своим
                            персональным онлайн тренером. Никаких сумок и
                            никакого транспорта, все, что нужно для тренировки -
                            у Вас под рукой!
                        </p>
                        <p className="online_advantage__text">
                            Мы проводим онлайн тренировки по следующим
                            направлениям:
                        </p>
                        <ul className="online_advantage__list">
                            <li>силовые</li>
                            <li>функциональные</li>
                            <li>жиросжигающие</li>
                            <li>растяжка</li>
                            <li>пилатес</li>
                        </ul>
                    </div>
                </section>

                <section className="online_prices">
                    <div className="container">
                        <div className="online_prices__inner">
                            <h2 className="online_prices__title">
                                Наши абонементы и цены
                            </h2>
                            <div className="online_prices__cards">
                                <div className="online_card">
                                    <div className="online_card__img online_card__img_1"></div>
                                    <div className="online_card__discription">
                                        <p className="online_card__num">
                                            4 ТРЕНИРОВКИ
                                        </p>
                                        <p className="online_card__cost">
                                            9720 ₽
                                        </p>
                                        <p className="online_card__one_session">
                                            1 ТРЕНИРОВКА 2430 ₽
                                        </p>
                                    </div>
                                </div>
                                <div className="online_card">
                                    <div className="online_card__img online_card__img_2"></div>
                                    <div className="online_card__discription">
                                        <p className="online_card__num">
                                            8 ТРЕНИРОВОК
                                        </p>
                                        <p className="online_card__cost">
                                            18360 ₽
                                        </p>
                                        <p className="online_card__one_session">
                                            1 ТРЕНИРОВКА 2295 ₽
                                        </p>
                                    </div>
                                </div>
                                <div className="online_card">
                                    <div className="online_card__img online_card__img_3"></div>
                                    <div className="online_card__discription">
                                        <p className="online_card__num">
                                            12 ТРЕНИРОВОК
                                        </p>
                                        <p className="online_card__cost">
                                            24300 ₽
                                        </p>
                                        <p className="online_card__one_session">
                                            1 ТРЕНИРОВКА 2025 ₽
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="prices__one">
                                Стоимость одной тренировки <span>2700 ₽</span>
                            </div>
                            
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBeauty);
