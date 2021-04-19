import React from "react";
import logo from "../../img/logo_text.png";

class ModalSuccess extends React.Component {
  close = (e) => {
    if (e.target.accessKey === "overlay") {
      this.props.showRsponse(false);
    }
  };
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
            <div className={this.props.style.modal__discription}>
              Ваша заявка успешно отправлена!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSuccess;
