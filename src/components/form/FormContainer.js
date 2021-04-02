import React from "react";
import { connect } from "react-redux";
import Form from "./Form"

import formHomeStyle from "./FormHome.module.scss"
import formStretchingStyle from "./FormStretching.module.scss"
import formFightStyle from "./FormFight.module.scss"






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
    }

  }


  render() {
    return <Form style={this.state.style} />
  }
}


const mapStateToProps = state => {
  return {

  }

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)