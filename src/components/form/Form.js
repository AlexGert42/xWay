import React from "react";


class FormFit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      errorData: ''
    }
  }

  setName = (e) => this.props.setNameInput(e.target.value);
  setPhone = (e) => this.props.setPhoneInput(e.target.value);

  handleSubmit = (e) => {
    e.preventDefault();
    const reg = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;
    if (this.props.name.length > 0 && reg.test(String(this.props.phone)) && this.state.checked ) {
      this.props.setClientThunk({
        name: this.props.name,
        phone: this.props.phone,
        date: JSON.stringify(new Date()),
      });
      this.props.showRsponse(true);
      this.setState({ errorData: "" });
    } else {
      this.setState({ errorData: "Некоректные данные ввода" });
    }
  };

  render() {
    return (
      <section className={this.props.style.form}>
        <div className={this.props.style.form__content}>
          <form
            className={this.props.style.form__inner}
            onSubmit={this.handleSubmit}
          >
            <h3 className={this.props.style.from__title}>
              Стань лучшей версией себя с <span>X-WAY!</span>
            </h3>
            
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
            <input 
            className={this.props.style.form__let}
            onClick={() => !this.state.checked ? this.setState({checked: true}) : this.setState({checked: false})}
            checked={this.state.checked} type="checkbox" id="cb1"/> <label className={this.props.style.form__lable} for="cb1">Даю согласие на обработку персональных данных</label>
            <button className={this.props.style.form__btn} type="submit">ЗАПИСАТЬСЯ</button>
            <div className={this.props.style.form__error}>{this.state.errorData}</div>
          </form>
          <div className={this.props.style.form__img}/>
        </div>
      </section>
    );
  }
}

export default FormFit;
