import React from "react";
import GoogleMapReact from 'google-map-react';
import logo from "../../img/logoMap.svg"
import { Carousel } from 'react-responsive-carousel';

import metro from '../../img/contacts_img/metro-logo.svg'
import street from '../../img/contacts_img/placeholder.svg'
import time from '../../img/contacts_img/watch.svg'

import './Contacts.scss'

const Marker = ({ text }) => <div className="marker">{text}</div>;

class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            center: {
                lat: 55.711493,
                lng: 37.605840
            },
            zoom: 16
        }
    }


    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }} className="contacts" >
                <div className="contacts__block">
                    <div className="contacts__inner">
                        <h2 className="contacts__title">Контакты</h2>
                        <div className="contacts__content">
                            <div><img src={metro} alt="metro" /><p>Тульская</p></div>
                            <div><img src={street} alt="street" /><p>Серпуховский Вал, 21/1</p></div>
                            <div><img src={time} alt="time" /><p>Ежедневно с 9.00 до 22.00</p></div>
                        </div>
                    </div>
                </div>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBFrNiy5_HzfxvOLzbHq9i7rJhBiEZL_lA' }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    <Marker

                        lat={55.711493}
                        lng={37.605840}
                        text=""
                    />


                </GoogleMapReact>
            </div>
        );
    }
}

export default Contacts;






