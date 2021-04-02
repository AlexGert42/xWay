import React from "react";



class FormFit extends React.Component {
    render() {
        return (
            <section className={this.props.style.form}>
                <div className={this.props.style.form__content}>

                    <form className={this.props.style.form__inner}>
                        <h3 className={this.props.style.from__title}>Стань лучшей версией себя с <span>X-WAY!</span></h3>
                        <input className={this.props.style.form__input} placeholder="Имя" type="text" />
                        <input className={this.props.style.form__input} placeholder="Номер телефона" type="text" />
                        <button className={this.props.style.form__btn}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                    </form>
                    <div className={this.props.style.form__img}></div>

                </div>
            </section>
        );
    }
}

export default FormFit;
