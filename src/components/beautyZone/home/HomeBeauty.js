import React from "react";



class HomeBeauty extends React.Component {
    render() {
        sessionStorage.setItem('ThemeHeader', 'BeautyZone');
        return (
            <section className="home-beauty">
                <section className="home-beauty__promo">
                    <div className="home-beauty__fone">
                        
                        <div className="home-beauty__promo-text">
                            <h1 className="home-beauty__title">
                                ДОБРО ПОЖАЛОВАТЬ В<span>X-WAY</span>
                            </h1>
                            <div className="home-beauty__discription">Твой путь к совершенству</div>
                            <button className="home-beauty__king-btn" >посетить студию</button>
                        </div>
                    </div>

                </section>
            </section>
        );
    }
}

export default HomeBeauty;
