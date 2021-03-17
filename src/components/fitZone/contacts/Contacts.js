import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import logo from "../../../img/logoMap.svg"

import './Contacts.scss'




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
                            <div class="contacts__inner">
                                Метро Тульская,  Москва, <span>ул. Серпуховский Вал, 21/1</span>
                            </div>
                        </div>
                    </Map>
                </YMaps>
            </section>
        );
    }
}

export default Contacts;





