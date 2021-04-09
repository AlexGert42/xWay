import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer"

import FooterFit from "./FooterFit.module.scss"
import FooterBeauty from "./FooterBeauty.module.scss"





class FooterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colorTheme: sessionStorage.getItem('Theme'),
            style: {},
            menuList:{},
            logo: {}
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.colorTheme === 'fitZone') {
            return ({
                style: FooterFit,
                menuList: props.menuFitZone,
                logo: props.logoFit
            })
        } else if (state.colorTheme === 'BeautyZone') {
            return ({
                style: FooterBeauty,
                menuList: props.menuBeautyZone,
                logo: props.logoBeauty
            })
        }

    }

    render() {
        return <Footer style={this.state.style} menuList={this.state.menuList} logo={this.state.logo} />

    }

}




const mapStateToProps = state => {
    return {
        menuFitZone: state.nav.menuFitZone,
        menuBeautyZone: state.nav.menuBeautyZone,
        logoFit: state.nav.logoFooterFit,
        logoBeauty: state.nav.logoFooterBeauty
    }

}

const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer)