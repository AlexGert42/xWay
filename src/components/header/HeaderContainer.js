import React from "react";
import { connect } from "react-redux";
import Header from "./Header"

import headerfitStyle from './HeaderFit.module.scss'
import headerBeautyStyle from "./HeaderBeauty.module.scss"

import {chengeStateModal} from "../../store/madal/actions"






class HeaderContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colorTheme: sessionStorage.getItem('Theme'),
      style: {},
      menuList:{},
      logo: {}
    }
    
  }

  static getDerivedStateFromProps (props, state) {
    if ( state.colorTheme === 'fitZone') {
     return ({
        style: headerfitStyle,
        menuList: props.menuFitZone,
        logo: props.logoFit
      })
    } else if ( state.colorTheme === 'BeautyZone') {
      return ({
        style: headerBeautyStyle,
        menuList: props.menuBeautyZone,
        logo: props.logoBeauty
      })
    } 
  }

  render() {
    return <Header style={this.state.style} menuList={this.state.menuList} logo={this.state.logo} openModal={this.props.chengeStateModal} />
  }
}


const mapStateToProps = state => {
  return {
    menuFitZone: state.header.menuFitZone,
    menuBeautyZone: state.header.menuBeautyZone,
    logoFit: state.header.logoFit,
    logoBeauty: state.header.logoBeauty
  }

}

const mapDispatchToProps = {
  chengeStateModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)