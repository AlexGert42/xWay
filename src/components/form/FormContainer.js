
import React from "react";
import { connect } from "react-redux";
import Form from './Form';

import { setChangeName, setChangePhone, setUserThunkCreator } from '../../store/form/actions'


class FormContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            colorTheme: sessionStorage.getItem('ThemeHeader'),



        }
        
    }



    render() {
        return <Form
            name={this.props.name}
            phone={this.props.phone}
            setChangeName={this.props.setChangeName}
            setChangePhone={this.props.setChangePhone}
            setUserThunkCreator={this.props.setUserThunkCreator}
        />
    }
}


const mapStateToProps = state => {
    return {
        name: state.form.name,
        phone: state.form.phone
    }

}

const mapDispatchToProps = {
    setChangeName,
    setChangePhone,
    setUserThunkCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)





