import React from "react";
import { NavLink } from "react-router-dom";
import ScrollableAnchor from 'react-scrollable-anchor';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img_1 from "../../img/ems/card1.jpg";
import img_2 from "../../img/ems/card2.jpg";
import img_3 from "../../img/ems/card3.jpg";


class Base extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <ScrollableAnchor id={"base"} >

          <div className="fone" >
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
                «X-WAY» — это не просто новая концепция фитнеса, <br />
                  это инновационный подход к Вашему телу. <br />
                  Персональные тренировки, нацеленные на 100% результат <br />
                <br />
                  Благодаря EMS костюму, Вы в 3 раза быстрее сбросите <br />
                  лишние килограммы, проработаете все мышцы, придав<br />
                  рельеф Вашему телу <br />
                <br />
                  С BMS «Бизон-вибро» Вы в 5 раз быстрее сядете<br />
                  на заветный шпагат и улучшите осанку.
                  <br />
                  Окунетесь в другую атмосферу фитнеса. <br />
              </div>
            </div>
            <Carousel className="about__slider" autoPlay showThumbs={false} showStatus={false} infiniteLoop>
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
                <img src={img_2} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_2} alt="img" />
              </div>
              <div className="about__img">
                <img src={img_2} alt="img" />
              </div>
            </Carousel>
          </div>

          <div className="about__inner_two">

            <div className="about__collage">
              <div className="about__img pic_1">
                
               
              </div>
              <div className="about__img pic_2">
                
               
              </div>
              <div className="about__img pic_3">
                
               
              </div>
              <div className="about__img pic_4">
                
               
              </div>
              <div className="about__img pic_5">
                
                
              </div>
            
            </div>

            <div className="about__text">
              <h2 className="about__title">О нас</h2>
              <div className="about__discription">
                «X-WAY» — это не просто новая концепция фитнеса, <br />
                  это инновационный подход к Вашему телу. <br />
                  Персональные тренировки, нацеленные на 100% результат <br />
                <br />
                  Благодаря EMS костюму, Вы в 3 раза быстрее сбросите <br />
                  лишние килограммы, проработаете все мышцы, придав<br />
                  рельеф Вашему телу <br />
                <br />
                  С BMS «Бизон-вибро» Вы в 5 раз быстрее сядете<br />
                  на заветный шпагат и улучшите осанку.
                  <br />
                  Окунетесь в другую атмосферу фитнеса. <br />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Base;
