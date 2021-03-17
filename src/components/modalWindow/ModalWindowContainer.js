
import React from "react";
import { connect } from "react-redux";
import ModalWindow from "./ModalWindow"
import { chengeStateModal, setNameInput, setPhoneInput, setClient } from "../../store/madal/actions"

import ModalWindowFit from "./ModalWindowFit.module.scss"
import ModalWindowBeauty from "./ModalWindowBeauty.module.scss"






class ModalWindowContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colorTheme: sessionStorage.getItem('Theme'),
            style: {},

        }

    }

    static getDerivedStateFromProps(props, state) {
        if (state.colorTheme === 'fitZone') {
            return ({
                style: ModalWindowFit,
            })
        } else if (state.colorTheme === 'BeautyZone') {
            return ({
                style: ModalWindowBeauty,
            })
        }

    }

    render() {
        if (!this.props.showModal) {
            return null
        } else {
            return <ModalWindow
                style={this.state.style}
                closeModal={this.props.chengeStateModal}

                name={this.props.name}
                phone={this.props.phone}
                setNameInput={this.props.setNameInput}
                setPhoneInput={this.props.setPhoneInput}
                setClient={this.props.setClient}
            />
        }

    }

}




const mapStateToProps = state => {
    return {
        showModal: state.modal.showModal,
        name: state.modal.name,
        phone: state.modal.phone,
    }

}

const mapDispatchToProps = {
    chengeStateModal,
    setNameInput,
    setPhoneInput,
    setClient,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowContainer)