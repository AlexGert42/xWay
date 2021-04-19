import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from "react-scrollable-anchor";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img_1 from "../../img/about/1.jpg";
import img_2 from "../../img/about/2.jpg";
import img_3 from "../../img/about/3.jpg";
import img_4 from "../../img/about/4.jpg";
import img_5 from "../../img/about/5.jpg";
import img_6 from "../../img/about/6.jpg";
import img_7 from "../../img/about/7.jpg";
import img_8 from "../../img/about/8.jpg";
import img_9 from "../../img/about/9.jpg";
import img_10 from "../../img/about/10.jpg";
import img_11 from "../../img/about/11.jpg";

class Base extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <ScrollableAnchor id={"base"}>
          <div className="fone">
            <div className="fone__left">
              <div className="logo__left"></div>
              <NavLink className="fit-zone" exact to="/fit/#home-fit">
                Fit Zone
              </NavLink>
            </div>
            <div className="fone__right">
              <div className="logo__right"></div>
              <NavLink className="beauty-zone" exact to="/beauty/#home-beauty">
                Beauty Zone
              </NavLink>
            </div>
          </div>
        </ScrollableAnchor>

        <div className="about" id={"about"}>
          <div className="about__inner_one">
            <div className="about__text">
              <h2 className="about__title">О нас</h2>
              <div className="about__discription">
                <p>
                  X-WAY - это не очередной фитнес проект, это целое сообщество
                  людей, для которых движение - это смысл жизни. Ежедневное
                  стремление к совершенству в различных сферах - это то, что нас
                  объединяет. Быть частью X-WAY - стать лучшей версией себя.
                </p>
              </div>
            </div>
            <Carousel
              className="about__slider"
              autoPlay
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              <div className="about__img">
                <img src={img_1} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_2} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_3} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_4} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_5} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_6} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_7} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_8} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_9} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_10} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_11} alt="img" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
