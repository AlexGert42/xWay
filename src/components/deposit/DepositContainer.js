import React from "react";
import { connect } from "react-redux";
import depositFit from './DepositFit.module.scss'
import Deposit from './Deposit'
import { chengeStateModal } from "../../store/form/actions";

class DepositContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTheme: sessionStorage.getItem("Theme"),
      style: {},
     
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.colorTheme === 'fitZone') {
        return {
            style: depositFit
        }

    }
    // else {
    //     return {
    //         style: depositBeauty
    //     }
    // }
}

  render() {
    return (
      <Deposit
        style={this.state.style}
        chengeStateModal={this.props.chengeStateModal}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = {
  chengeStateModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositContainer);
