import React from "react";
import { connect } from "react-redux";
import Form from "./Form"
import { setNameInput, setPhoneInput, setClient, showRsponse } from "../../store/form/actions"

import formHomeStyle from "./FormHome.module.scss"
import formStretchingStyle from "./FormStretching.module.scss"
import formFightStyle from "./FormFight.module.scss"
import formFunctionalStyle from "./FormFunctional.module.scss"
import formWorkout from "./FormWorkout.module.scss"

import formDepilation from "./FormDepilation.module.scss"





class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorTheme: sessionStorage.getItem('ThemeForm'),
      style: {},
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.colorTheme === 'fitHome') {
      return ({
        style: formHomeStyle,
      })
    } else if (state.colorTheme === 'fitStretching') {
      return ({
        style: formStretchingStyle,
      })
    } else if (state.colorTheme === 'fitFight') {
      return ({
        style: formFightStyle,
      })
    } else if (state.colorTheme === 'fitFunctional') {
      return ({
        style: formFunctionalStyle,
      })
    } else if (state.colorTheme === 'fitWorkout') {
      return ({
        style: formWorkout,
      })
    } else if (state.colorTheme === 'beautyDepilation') {
      return ({
        style: formDepilation,
      })
    }
  }


  render() {
    return <Form
      style={this.state.style}
      name={this.props.name}
      phone={this.props.phone}
      setNameInput={this.props.setNameInput}
      setPhoneInput={this.props.setPhoneInput}
      setClient={this.props.setClient}
      showRsponse={this.props.showRsponse}
    />
  }
}


const mapStateToProps = state => {
  return {
    name: state.form.name,
    phone: state.form.phone,
    success: state.form.success,
  }

}

const mapDispatchToProps = {
  setNameInput,
  setPhoneInput,
  setClient,
  showRsponse,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)