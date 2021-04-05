import React from "react";
import Form from "../../form/FormContainer"

import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux";

import ScrollableAnchor from 'react-scrollable-anchor';
import ParallaxMousemove from 'react-parallax-mousemove'



class Workout extends React.Component {


    render() {
        sessionStorage.setItem('ThemeForm', 'fitWorkout');
        return (
            <ParallaxMousemove containerStyle={{
                background: "url('../../../img/workout/fone.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%',
            }} 
            fullHeight={true}
            >
                
                <section className="workout">
                    <ScrollableAnchor id={"workout-start"}>

                        <section className="workout__fone">
                            <div className="container">
                                <ParallaxMousemove.Layer layerStyle={{
                                     width: '40%',
                                     top: '0',
                                     left: '0',
                                     zIndex: '0',
                                     position: 'relative'
                                }} className="workout__promo" config={{
                                    xFactor: 20.5,
                                    yFactor: 20.5,
                                    springSettings: {
                                        stiffness: 10,
                                        damping: 10,
                                    }
                                }}>
                                    <div className="workout__promo_inner">
                                        <h1 className="workout__title">WORK OUT</h1>
                                        <p className="workout__discription">
                                            Наскучил тренажерный зал? Фитнес не дает желаемых результатов? Тренеры студии X-WAY разработывают индивидуальные программы для взрослых и детей, мужчин и женщин.
                                            Смешивают стили борьбы, создавая новые
                                            универсальные практики.
                                    </p>
                                        <button className="workout__king_btn" onClick={() => this.props.chengeStateModal(true)}>ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ</button>
                                    </div>
                                </ParallaxMousemove.Layer>
                            </div>
                        </section>

                    </ScrollableAnchor>





                    <Form />
                </section>
                
            </ParallaxMousemove>
        );
    }
}


const mapStateToProps = state => { }

const mapDispatchToProps = {
    chengeStateModal,
}




export default connect(mapStateToProps, mapDispatchToProps)(Workout)
