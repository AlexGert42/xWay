import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../img/homeBeauty/logoBeauty.png"
import { chengeStateModal } from "../../../store/madal/actions"
import { connect } from "react-redux";
import { Parallax } from "react-parallax";
import ScrollableAnchor from 'react-scrollable-anchor';

import fone from "../../../img/homeBeauty/foneBeauty.png"


class HomeBeauty extends React.Component {
    render() {
        return (
            <section className="home-beauty" >
                <ScrollableAnchor id={"home-beauty"}>
                    <Parallax className="home-beauty__promo"
                        strength={400}
                        bgImage={fone}
                        bgImageStyle={{ height: '100vh', width: '100%', minWidth: '1920px' }}
                        style={{ height: '100vh', width: '100%' }}
                    >
                        <div className="home-beauty__fone">

                            <div className="home-beauty__promo-text">
                                <h1 className="home-beauty__title">
                                    ДОБРО ПОЖАЛОВАТЬ В<span><img src={logo} alt="logo" /></span>
                                </h1>
                                <div className="home-beauty__discription">Твой путь к совершенству</div>
                                <button className="home-beauty__king-btn" onClick={() => this.props.chengeStateModal(true)} >посетить студию</button>
                            </div>
                        </div>

                    </Parallax>
                </ScrollableAnchor>

            </section>
        );
    }
}




const mapStateToProps = state => { }

const mapDispatchToProps = {
  chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(HomeBeauty)
