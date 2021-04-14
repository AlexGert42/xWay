import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import logo from "../../img/logoMap.svg"
import { Carousel } from 'react-responsive-carousel';

import './Contacts.scss'

import metro from '../../img/contacts_img/metro-logo.svg'
import street from '../../img/contacts_img/placeholder.svg'
import time from '../../img/contacts_img/watch.svg'



class Contacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }







    render() {
        return (
            <section className="contacts">
                <YMaps>
                    <Map
                        defaultState={{ center: [55.711493, 37.605840], zoom: 16 }}
                        className="contacts__map"
                    >
                        <Placemark
                            geometry={[55.710859, 37.610341]}
                            options={{
                               
                                iconLayout: 'default#image' ,
                                iconImageSize: [50, 50],
                                iconImageHref: logo,
                            }}
                        />
                        <div className="contacts__block">
                            <div className="contacts__inner">
                                <h2 className="contacts__title">Контакты</h2>
                                <div className="contacts__content">
                                    <div><img src={metro} alt="metro"/><p>Тульская</p></div>
                                    <div><img src={street} alt="street"/><p>Серпуховский Вал, 21/1</p></div>
                                    <div><img src={time} alt="time"/><p>Ежедневно с 9.00 до 22.00</p></div>
                                </div>
                                <Carousel className="contacts__img_list" showThumbs={false} autoPlay showStatus={false} showArrows={false} infiniteLoop interval={2000}>
                                    <div className="contacts__img one"></div>
                                    <div className="contacts__img two"></div>
                                    <div className="contacts__img three"></div>
                                </Carousel>
                            </div>
                        </div>
                    </Map>
                </YMaps>
            </section>
        );
    }
}

export default Contacts;





