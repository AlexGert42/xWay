import React from "react";
import logo from "../../img/logo_text.png"





class modalWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameLable: false,
            phoneLable: false,

            placeholderName: "Введите Имя",
            placeholderPhone: "Введите Номер Телефона",

        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
        if (this.props.name.length > 0 && reg.test(String(this.props.phone))) {
            this.props.setClient({
                name: this.props.name,
                phone: this.props.phone
            })
            this.props.closeModal(false)
        } 
    }

    blureHandle = e => {
        switch (e.target.name) {
            case 'name':
                if (this.props.name.length === 0) {
                    this.setState({
                        nameLable: true,
                        placeholderName: "Это поле не может быть пустым"
                    })
                } else {
                    this.setState({
                        nameLable: false,
                        placeholderName: "Введите Имя"
                    })
                }
                break
            case 'phone':
                if (this.props.phone.length === 0) {
                    this.setState({
                        phoneLable: true,
                        placeholderPhone: "Это поле не может быть пустым"
                    })
                } else {
                    this.setState({
                        nameLable: false,
                        placeholderName: "Введите Номер Телефона"
                    })
                }
                break
        }
    }



    close = e => {
        if (e.target.title === "overlay") {
            this.props.closeModal(false)
        }
    }

    name = e => this.props.setNameInput(e.target.value)
    phone = e => this.props.setPhoneInput(e.target.value)



    render() {

        return (
            <div className={this.props.style.modal}>
                <div className={this.props.style.modal__overlay} title="overlay" onClick={this.close}>
                    <div className={this.props.style.modal__window}>
                        <h3 className={this.props.style.modal__title} ><img src={logo} alt="logo" /></h3>
                        <form className={this.props.style.modal__form} onSubmit={this.handleSubmit}>
                            <input
                                className={this.props.style.modal__input && this.state.nameLable ? `${this.props.style.modal__input} ${this.props.style.alert}` : this.props.style.modal__input}
                                name="name"
                                type="text"
                                placeholder={this.state.placeholderName}
                                onBlur={this.blureHandle}
                                onChange={this.name}
                                value={this.props.name}
                            />
                            <input
                                className={this.props.style.modal__input && this.state.phoneLable ? `${this.props.style.modal__input} ${this.props.style.alert}` : this.props.style.modal__input}
                                name="phone"
                                type="text"
                                placeholder={this.state.placeholderPhone}
                                onBlur={this.blureHandle}
                                onChange={this.phone}
                                value={this.props.phone}
                            />
                            <button
                                className={this.props.style.modal__action}
                                type="submit"
                            >Заказать Звонок</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default modalWindow;
