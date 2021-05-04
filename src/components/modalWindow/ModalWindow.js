import React from "react";
import logo from "../../img/logo_text.png";
import '../form/checkboxStyle.scss'

class modalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameLable: false,
      phoneLable: false,

      placeholderName: "Введите Имя",
      placeholderPhone: "Введите Номер Телефона",
      checked: false,
      errorData: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const reg = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;
    if (this.props.name.length > 0 && reg.test(String(this.props.phone)) && this.state.checked) {
      this.props.setClient({
        name: this.props.name,
        phone: this.props.phone,
      });
      this.setState({ errorData: "" });
      this.props.closeModal(false);
      this.props.showRsponse(true);
    } else {
      this.setState({ errorData: "Некоректные данные" });
    }
  };

  blureHandle = (e) => {
    switch (e.target.name) {
      case "name":
        if (this.props.name.length === 0) {
          this.setState({
            nameLable: true,
            placeholderName: "Это поле не может быть пустым",
          });
        } else {
          this.setState({
            nameLable: false,
            placeholderName: "Введите Имя",
          });
        }
        break;
      case "phone":
        if (this.props.phone.length === 0) {
          this.setState({
            phoneLable: true,
            placeholderPhone: "Это поле не может быть пустым",
          });
        } else {
          this.setState({
            nameLable: false,
            placeholderName: "Введите Номер Телефона",
          });
        }
        break;
    }
  };

  close = (e) => {
    if (e.target.accessKey === "overlay") {
      this.props.closeModal(false);
    }
  };

  name = (e) => this.props.setNameInput(e.target.value);
  phone = (e) => this.props.setPhoneInput(e.target.value);

  render() {
    return (
      <div className={this.props.style.modal}>
        <div
          className={this.props.style.modal__overlay}
          accessKey="overlay"
          onClick={this.close}
        >
          <div className={this.props.style.modal__window}>
            <h3 className={this.props.style.modal__title}>
              <img src={logo} alt="logo" />
            </h3>
            <div className={this.props.style.modal__subtitle}>
              {this.state.errorData}
            </div>
            <form
              className={this.props.style.modal__form}
              onSubmit={this.handleSubmit}
            >
              <input
                className={
                  this.props.style.modal__input && this.state.nameLable
                    ? `${this.props.style.modal__input} ${this.props.style.alert}`
                    : this.props.style.modal__input
                }
                name="name"
                type="text"
                placeholder={this.state.placeholderName}
                onBlur={this.blureHandle}
                onChange={this.name}
                value={this.props.name}
              />
              <input
                className={
                  this.props.style.modal__input && this.state.phoneLable
                    ? `${this.props.style.modal__input} ${this.props.style.alert}`
                    : this.props.style.modal__input
                }
                name="phone"
                type="text"
                placeholder={this.state.placeholderPhone}
                onBlur={this.blureHandle}
                onChange={this.phone}
                value={this.props.phone}
              />
              <input 
              
              onClick={() => !this.state.checked ? this.setState({checked: true}) : this.setState({checked: false})}
              checked={this.state.checked} type="checkbox" id="cb1"/> <label style={{color: '#fff', marginTop: '20px'}} for="cb1">Даю согласие на обработку персональных данных</label>
              <button className={this.props.style.modal__action} type="submit">
                Заказать Звонок
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default modalWindow;
