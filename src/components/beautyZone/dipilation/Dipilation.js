import React from "react";
import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Carousel } from 'react-responsive-carousel';

import Form from '../../form/FormContainer'


class Dipilation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            openPriceHe: '',
            openPriceShe: '',

            hideTitleShe: '',
            hideTitleHe: '',

            openPriceMiniHe: '',
            openPriceMiniShe: '',
        }
    }





    openPriceShe = () => {

        if (this.state.openPriceShe === '') {
            this.setState({
                openPriceShe: 'openShe',
                openPriceHe: 'hideHe'
            })
        } else {
            this.setState({
                openPriceShe: '',
                openPriceHe: ''
            })
        }
    }

    openPriceHe = () => {
        if (this.state.openPriceHe === '') {
            this.setState({
                openPriceShe: 'hideShe',
                openPriceHe: 'openHe'
            })
        } else {
            this.setState({
                openPriceShe: '',
                openPriceHe: ''
            })
        }
    }

    render() {
        sessionStorage.setItem('ThemeForm', 'beautyDepilation');
        return (
            <section className="depilation">
                <ScrollableAnchor id={'depilation-start'}>
                    <Carousel className="depilation__fone" showThumbs={false} autoPlay showStatus={false} showArrows={false} infiniteLoop interval={5000}>
                        <div className="depilation__promo img_1">
                            <div className="container">
                                <div className="depilation__promo_inner right">
                                    <h1 className="depilation__title">ДЕПИЛЯЦИЯ</h1>
                                    <div className="depilation__discription">
                                        Мы поможем Вам сделать ваше тело не только более красивым, но и гладким.  Идеально гладкие ножки и ухоженная зона бикини – мечта любой девушки. Кроме того, в нашей студии Вы можете удалить волоски из подмышечных впадин, с рук, живота, ягодиц, бикини и спины. Депиляция – это еще и неотъемлемая часть подготовки к пляжному сезону.  Шугаринг и восковая депиляция для мужчин и женщин.
                                    </div>
                                    <button className="depilation__king-btn" onClick={() => this.props.chengeStateModal(true)}>ЗАПИСАТЬСЯ</button>
                                </div>
                            </div>
                        </div>
                        <div className="depilation__promo img_2">
                            <div className="container">
                                <div className="depilation__promo_inner right">
                                    <h1 className="depilation__title">ДЕПИЛЯЦИЯ</h1>
                                    <div className="depilation__discription">
                                        Профессиональные услуги мужской эпиляции для мужчин любых зон.  Хотя растительность на мужском теле - это нормально, многие мужчины сталкиваются с дискомфортом из-за избыточного роста волос или их жесткости.
                                        Также существует эстетическая сторона вопроса - многим мужчинам и женщинам тело без волос кажется более привлекательным.
                                    </div>
                                    <button className="depilation__king-btn" onClick={() => this.props.chengeStateModal(true)}>ЗАПИСАТЬСЯ</button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </ScrollableAnchor>

                <section className="depilation_advantage">
                    <div className="depilation_advantage__content">
                        <div className="depilation_advantage__inner">
                            <h2 className="depilation_advantage__title">
                                Самые популярные способы удаления волос —
                                это восковая депиляция и шугаринг<span />
                            </h2>
                            <div className="depilation_advantage__text">
                                <p>
                                    Депиляция — это must have для каждой ухоженной женщины.
                                    Восковая депиляция и шугаринг дарят самый долгий период наслаждения отсутствием нежелательных волос: кожа остается гладкой 3-4 недели и если процедура проводится регулярно, то ее результативность увеличивается, волоски становятся тоньше и менее пигментированными.
                                </p>
                                <p>
                                    Доверьтесь профессионалам X-WAY — мы сделаем эпиляцию качественно,  безболезненно и недорого.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="depilation_advantage__img"></div>
                </section>

                <section className="depilation_price">
                    <div className="depilation_price__content">
                        <div className={`depilation_price__block ${this.state.openPriceShe}`} onClick={this.openPriceShe}>
                            <div className="depilation_price__img she">
                                <h3 className={`depilation_price__title ${this.state.hideTitleShe}`} accessKey={'showShe'} onClick={this.openPriceMini} >ДЛЯ НЕЕ</h3>
                            </div>
                            <div className="depilation_price__text">
                                <div className="depilation_price__inner">
                                    <p>Классическое бикини <span>Воск 1 500</span>Сахар 1 900 </p>
                                    <p>Глубокое бикини <span>Воск 2 200</span>Сахар 2 400 </p>
                                    <p>Ягодицы <span>Воск 700</span>Сахар 800 </p>
                                    <p>Бедра <span>Воск 1 200</span>Сахар 1 500 </p>
                                    <p>Голени <span>Воск 1 000</span>Сахар 1 300 </p>
                                    <p>Ноги полностью <span>Воск 1 700</span>Сахар 2 000 </p>
                                    <p>Руки до / выше локтя <span>Воск 800</span>Сахар 1 000 </p>
                                    <p>Руки полностью <span>Воск 1 000</span>Сахар 1 200 </p>
                                    <p>Подмышки <span>Воск 600</span>Сахар 700 </p>
                                    <p>Живот <span>Воск 400</span>Сахар 500 </p>
                                    <p>Спина <span>Воск 800</span>Сахар 1 000 </p>
                                    <p>1 зона лица <span>Воск 500</span>Сахар 500 </p>
                                    <p>Энзимный пилинг <span>Воск 500</span></p>
                                </div>
                            </div>
                        </div>

                        <div className={`depilation_price__block ${this.state.openPriceHe}`} onClick={this.openPriceHe}>
                            <div className="depilation_price__img he">
                                <h3 className={`depilation_price__title ${this.state.hideTitleHe}`} accessKey={'showHe'} onClick={this.openPriceMini}>ДЛЯ НЕГО</h3>
                            </div>
                            <div className="depilation_price__text">
                                <div className="depilation_price__inner">
                                    <p>1 зона лица <span></span>500</p>
                                    <p>Лицо полностью <span></span>1 300 - 2 000 </p>
                                    <p>Уши <span></span>500 </p>
                                    <p>Шея (оконтовка прически) <span></span>800 </p>
                                    <p>Руки до / выше локтя <span></span>1 500 </p>
                                    <p>Руки полностью <span></span>2 600 </p>
                                    <p>Подмышечные впадины<span></span>900 </p>
                                    <p>Грудь <span></span>1 500 </p>
                                    <p>Живот <span></span>1 400 </p>
                                    <p>Спина полностью <span></span>2 000 - 2 500 </p>
                                    <p>Поясница <span></span>1 500 </p>
                                    <p>Бикини классика <span></span>2 300 </p>
                                    <p>Бикини глубокое <span></span>4 000</p>
                                    <p>Ягодицы <span></span>1 500</p>
                                    <p>Ноги до / выше колена <span></span>2 200</p>
                                    <p>Ноги полностью <span></span>3 000 - 3 600</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lamination">
                    <div className="lamination__img"></div>
                    <div className="lamination__content">
                        <div className="lamination__inner">
                            <h2 className="lamination__title">Ламинирование бровей и ресниц<span /></h2>
                            <div className="lamination__price">
                                <div className="lamination__price_block">Ламинирование бровей<span>2 500  /  3 000</span></div>
                                <div className="lamination__price_block">Ламинирование ресниц<span>2 500</span></div>
                                <div className="lamination__price_block">Ботокс бровей<span>3 000</span></div>
                                <div className="lamination__price_block">Ботокс ресниц<span>3 000</span></div>
                            </div>
                            <h2 className="lamination__title">Оформление бровей и ресниц<span /></h2>
                            <div className="lamination__price bottom">
                                <div className="lamination__price_block">Корреция бровей<span>700</span></div>
                                <div className="lamination__price_block">Окрашивание бровей<span>700 / 850</span></div>
                                <div className="lamination__price_block">Окрашивание ресниц<span>600</span></div>
                                <div className="lamination__price_block">Архитектура (построение формы + коррекция + окрашивание)<span>1 500 / 1 700</span></div>
                                <div className="lamination__price_block">Счастье для бровей / ресниц<span>650</span></div>
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




export default connect(mapStateToProps, mapDispatchToProps)(Dipilation)
