import React from "react";
import { connect } from "react-redux";
import ModalWindow from "./ModalWindow";
import {
  chengeStateModal,
  setNameInput,
  setPhoneInput,
  showRsponse, setClientThunk,
} from "../../store/form/actions";

import ModalSuccess from "./ModalSuccess";
import ModalSuccessFit from "./ModalSuccessFit.module.scss";
import ModalSuccessBeauty from "./ModalSuccessBeauty.module.scss";

import ModalWindowFit from "./ModalWindowFit.module.scss";
import ModalWindowBeauty from "./ModalWindowBeauty.module.scss";

class ModalWindowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTheme: sessionStorage.getItem("Theme"),
      style: {},
      styleSuccess: {},
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.colorTheme === "fitZone") {
      return {
        style: ModalWindowFit,
        styleSuccess: ModalSuccessFit,
      };
    } else if (state.colorTheme === "BeautyZone") {
      return {
        style: ModalWindowBeauty,
        styleSuccess: ModalSuccessBeauty,
      };
    }
  }

  render() {
    if (!this.props.showModal && !this.props.success) {
      return null;
    } else if (this.props.showModal) {
      return (
        <ModalWindow
          style={this.state.style}
          closeModal={this.props.chengeStateModal}
          name={this.props.name}
          phone={this.props.phone}
          setNameInput={this.props.setNameInput}
          setPhoneInput={this.props.setPhoneInput}
          setClientThunk={this.props.setClientThunk}
          showRsponse={this.props.showRsponse}
        />
      );
    } else if (this.props.success) {
      return (
        <ModalSuccess
          style={this.state.styleSuccess}
          showRsponse={this.props.showRsponse}
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.form.showModal,
    name: state.form.name,
    phone: state.form.phone,
    success: state.form.success,
  };
};

const mapDispatchToProps = {
  chengeStateModal,
  setNameInput,
  setPhoneInput,
  setClientThunk,
  showRsponse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWindowContainer);
