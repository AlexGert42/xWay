import React from "react";
import { NavLink } from "react-router-dom";
import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux";
import ScrollableAnchor from 'react-scrollable-anchor';


class Cosmetology extends React.Component {
    render() {
        return (
            <section>
                Cosmetology
            </section>
        );
    }
}




const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(Cosmetology)
