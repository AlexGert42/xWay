import React from "react";




export default class Deposit extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            openPrice: `${this.props.style.deposit_price} ${this.props.style.close}`, 
        }
       
    }

    openPrice = () => {
        if (this.state.openPrice === `${this.props.style.deposit_price} ${this.props.style.close}`) {
            this.setState({openPrice: this.props.style.deposit_price})
        } else {
            this.setState({openPrice: `${this.props.style.deposit_price} ${this.props.style.close}`})
        }
    }

    
    render() {
        
        return (
            <div className={this.props.style.deposit}>
                <button className={this.props.style.deposit_btn} onClick={this.openPrice}>
                    <span className={this.props.style.deposit_btn__text}>
                        <span>Депозит</span>
                    </span>
                </button>
                <section className={this.state.openPrice}>
                    <div className={this.props.style.deposit_price__inner}>
                        <h1 className={this.props.style.deposit_price__title}>СИСТЕМА СКИДОК ДЕПОЗИТ </h1>
                        <h2 className={this.props.style.deposit_price__subtitl}>новая возможность посещать все процедуры со скидкой!</h2>
                        <p className={this.props.style.deposit_price__text}>Желаете получать все услуги нашей студии со скидкой?</p>
                        <p className={this.props.style.deposit_price__text}>Воспользуйтесь системой "ДЕПОЗИТ", при которой Вы оставляете предоплату и получаете любые процедуры по выгодной цене!</p>
                        <ul className={this.props.style.deposit_price__list}>
                            <li>50 000 ₽ - 10% скидка</li>
                            <li>100 000 ₽ - 20% скидка</li>
                            <li>150 000 ₽ - 30% скидка</li>
                            <li>200 000 ₽ - 40% скидка</li>
                        </ul>
                        <button className={this.props.style.deposit_price__btn} onClick={() => this.props.chengeStateModal(true)}>УЗНАТЬ ПОДРОБНЕЕ</button>
                    </div>
                </section>

            </div>
        );
    }
}



