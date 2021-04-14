import React from "react";



import testimonial_1 from "../../../../img/homeFit/testimonial/testimonial_1.mp4"
import testimonial_2 from "../../../../img/homeFit/testimonial/testimonial_2.mp4"
import testimonial_3 from "../../../../img/homeFit/testimonial/testimonial_3.mp4"





class Quate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1,
      quates: [
        { id: 0, quate: "active" },
        { id: 1, quate: "" },
        { id: 2, quate: "" },
        { id: 3, quate: "" },
        { id: 4, quate: "" },
        { id: 5, quate: "" },
      ]
    }
    
    
  }

  chengeQuateBack = () => {
    this.setState({ count: this.state.count - 1 })
    if (this.state.count <= 1) {
      this.setState({ count: 5 })
    }
    let array = this.state.quates
    array.map(el => {
      if (el.id === this.state.count) {
        return el.quate = 'active'
      } else {
        return el.quate = ''
      }
    })
    this.setState({ quates: array })
  }
  chengeQuateNext = () => {
    this.setState({ count: this.state.count + 1 })
    if (this.state.count >= 5) {
      this.setState({ count: 0 })
    }
    let array = this.state.quates
    array.map(el => {
      if (el.id === this.state.count) {
        return el.quate = 'active'
      } else {
        return el.quate = ''
      }
    })
    this.setState({ quates: array })
  }


  
  render() {
    
    
    return (
      <section className="quate">
        <div className="container">
          <div className="quate__inner">
            <h3 className="quate__title">Отзывы</h3>
            <div className="quate__list">

              <div className="quate__nav">
                <div className="quate__nav_item left" onClick={this.chengeQuateBack} ></div>
                <div className="quate__nav_item right" onClick={this.chengeQuateNext} ></div>
              </div>

              <div className={`quate__block_0 ${this.state.quates[0].quate}`}>
                <div className="quate__block_inner">
                  <h4 className="quate__block_title">Самый крутая студия и тренеры!</h4>
                  <div className="quate__block_text">
                    <p>
                      Посещаю студию 3 раза в неделю, как по часам 🙌🏼
                      После каждой тренировки чувствую вагон энергии, и заряд бодрости на целый день 🔥
                      в качестве бонуса вкуснейший коктейль сделанный со всей теплотой от прекрасных сотрудниц студии
                     </p>
                  </div>
                  <p className="quate__block_name">Nikolay Kondratyev</p>
                </div>
              </div>

             

              <div className={`quate__block_1 ${this.state.quates[1].quate}`} >
                <video src={testimonial_1} controls></video>
              </div>
              <div className={`quate__block_2 ${this.state.quates[2].quate}`} >
                <video src={testimonial_2} controls></video>
              </div>

              

              <div className={`quate__block_3 ${this.state.quates[3].quate}`} >
                <div className="quate__block_inner">
                  <h4 className="quate__block_title">Лучшие тренировки, лучшие тренеры!</h4>
                  <div className="quate__block_text">
                    <p>
                      Прекрасная атмосфера и профессиональная команда тренеров XWAY расскажут и покажут вам, что такое EMS fitness и как сделать ваши тренировки более эффективными, подобрав индивидуальную программу. Я рекомендую заниматься у тренера Николая, профессионала своего дела. Николай обязательно поможет Вам почувствовать уверенность в себе, составит программу тренировок в соответствии ИМЕННО с вашими целями, подарит много положительных эмоций, окружит заботой и вниманием и результат не заставит себя ждать!
                    </p>
                  </div>
                  <p className="quate__block_name">Татьяна Беляевскова</p>
                </div>
              </div>

              <div className={`quate__block_4 ${this.state.quates[4].quate}`} >
                <div className="quate__block_inner">
                  <h4 className="quate__block_title">Самый крутая студия и тренеры!</h4>
                  <div className="quate__block_text">
                    <p>
                      Нереально крутая студия, все на высшем уровне начиная с оборудования, впервые познакомилась тут с EMS и БМС, поверьте каждый должен хоть раз испытать это, в обычный зал вы бошьше не вернетесь, и заканчивая потрясающим интерьером!!! Отличная команда все приветливые, внимательные, я прихожу к вам, как к друзьям, индивидуальный подход, всегда с радостью бегу на тренирвоки)
                      Отдельное спасибо за потрясающие коктели и батончики, приятный бонус за отлично отработанную тренировку!
                      </p>
                  </div>
                  <p className="quate__block_name">Кира Королева</p>
                </div>
              </div>

              <div className={`quate__block_5 ${this.state.quates[5].quate}`} >
                <video src={testimonial_3} controls></video>
              </div>


            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Quate;