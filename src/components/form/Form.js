import React from "react";



class FormFit extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         name: '',
    //         phone: '',
    //     }
    // }

    setName = e => this.props.setNameInput(e.target.value)
    setPhone = e => this.props.setPhoneInput(e.target.value)

    handleSubmit = e => {
        e.preventDefault()
        const reg = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/

        if (this.props.name.length > 0 && reg.test(String(this.props.phone))) {
            this.props.setClient({
                name: this.props.name,
                phone: this.props.phone,
                date: JSON.stringify(new Date)
            })
            this.props.showRsponse(true)
        } else {
            this.setState({errorData: 'Некоректные данные'})
        }
    }


    render() {
        return (
            <section className={this.props.style.form}>
                <div className={this.props.style.form__content}>

                    <form className={this.props.style.form__inner} onSubmit={this.handleSubmit}>
                        <h3 className={this.props.style.from__title}>Стань лучшей версией себя с <span>X-WAY!</span></h3>

                        <input
                            className={this.props.style.form__input}
                            placeholder="Имя"
                            type="text"
                            onChange={this.setName}
                            value={this.props.name}
                        />
                        <input
                            className={this.props.style.form__input}
                            placeholder="Номер телефона"
                            type="text"
                            onChange={this.setPhone}
                            value={this.props.phone}
                        />
                        <button className={this.props.style.form__btn}>ЗАПИСАТЬСЯ</button>
                    </form>
                    <div className={this.props.style.form__img} type="submit"></div>

                </div>
            </section>
        );
    }
}

export default FormFit;
