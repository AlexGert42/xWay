import React from "react";
import { NavLink } from "react-router-dom";

import { chengeStateModal } from "../../../store/madal/actions"
import { connect } from "react-redux";




class Ems extends React.Component {
    render() {
        return (
            <section className="ems">
                <section className="ems__fone">
                    <div className="container">
                        <div className="ems__promo">
                            <div className="ems__promo_inner">
                                <h1 className="ems__title">EMS</h1>
                                <div className="ems__discription">Фитнес будущего, красивое тело в  кратчайшие сроки, <span>индивидуальный подход  к каждому клиенту</span></div>
                                <button className="ems__king_btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}


const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(Ems)
