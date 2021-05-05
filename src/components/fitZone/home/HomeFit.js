import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../../../img/logo_text_white.png"
import { chengeStateModal } from "../../../store/form/actions"
import { connect } from "react-redux"
import { Parallax } from "react-parallax"
import ScrollableAnchor from "react-scrollable-anchor"

import Contacts from "../../contacts/Contacts"
import Quate from "./quate/Quate"
import Form from "../../form/FormContainer"

import fone from "../../../img/fone-fit.jpg"

class HomeFit extends React.Component {
	render() {
		sessionStorage.setItem("ThemeForm", "fitHome")
		return (
			<section className="home-fit">
				<ScrollableAnchor id={"home-fit"}>
					<Parallax
						className="home-fit__fone"
						strength={400}
						bgImage={fone}
						bgImageStyle={{
							minHeight: "1024px",
							minWidth: "1920px",
						}}
						style={{ height: "100vh", width: "100%" }}
					>
						<div className="home-fit__promo">
							<h1 className="home-fit__title">
								ДОБРО ПОЖАЛОВАТЬ В
								<span>
									<img src={logo} alt="logo" />
								</span>
							</h1>
							<div className="home-fit__discription">
								это не просто новая концепция фитнеса, <br />
								это инновационный подход к Вашему телу. <br />
								Персональные тренировки, нацеленные на 100%
								результат <br />
							</div>
							<button
								className="home-fit__king-btn"
								onClick={() =>
									this.props.chengeStateModal(true)
								}
							>
								ПОСЕТИТЬ ПРОБНОЕ ЗАНЯТИЕ
							</button>
						</div>
					</Parallax>
				</ScrollableAnchor>

				<ScrollableAnchor id={"prace-fit"}>
					<div className="container">
						<div className="services">
							<div className="services__card card">
								<div className="card__img ems_home"></div>
								<div className="card__text">
									<h2 className="card__title">EMS</h2>
									<p className="card__dicription">
										EMS - самые эффективные тренировки
										в мире! Почему? С помощью тренажера ЭМС
										Вы можете заниматься любым фитнес
										направлением или реабилитацией
										и получать результат на 70-100% больше.
										Тренажер посылает импульс в костюм ЭМС,
										который заставляет сокращаться
										и расслабляться около 90% мышц в теле
										человека, тем самым затрачивая
										максимальное количество энергии. Поэтому
										набрать мышечную массу и похудеть можно
										в разы быстрее.
									</p>
									<NavLink
										className="card__link"
										to="/fit/ems/#ems-start"
									>
										ПОДРОБНЕЕ
									</NavLink>
								</div>
							</div>
							<div className="services__card card">
								<div className="card__text">
									<h2 className="card__title">STRETCHING</h2>
									<p className="card__dicription">
										Инновационные BMS -тренировки
										с использованием тренажера «Бизон-вибро»
										и пилатес — это то, что вам нужно, если
										вы хотите за максимально короткое время
										освоить продольный и поперечный шпагат,
										укрепить спину, улучшить подвижность
										позвоночника, шеи и повысить гибкость
										всего тела.
									</p>
									<NavLink
										className="card__link"
										to="/fit/stretching/#stretching-start"
									>
										ПОДРОБНЕЕ
									</NavLink>
								</div>
								<div className="card__img bms_home"></div>
							</div>
							<div className="services__card card">
								<div className="card__img mma_home"></div>
								<div className="card__text">
									<h2 className="card__title">
										ЕДИНОБОРСТВА
									</h2>
									<p className="card__dicription">
										Лучшие программы единоборств (бокс, муай
										тай, айкидо, грэпплинг, смешанные
										единобоства и т. д.) Тренировки для
										взростых и детей, профессиональных
										спортсменов и новичков. Мы ждем вас
										в нашей студии! Время быть сильным!
									</p>
									<NavLink
										className="card__link"
										to="/fit/fight/#fight-start"
									>
										ПОДРОБНЕЕ
									</NavLink>
								</div>
							</div>
							<div className="services__card card">
								<div className="card__text">
									<h2 className="card__title">
										ФУНКЦИОНАЛЬНЫЕ ТРЕНИРОВКИ
									</h2>
									<p className="card__dicription">
										Функциональный фитнес — это микс
										из кардионагрузки и силовых упражнений,
										он вовлекает в работу все группы мышц
										комплексно, включая самые
										труднодоступные. В функциональных
										тренировках приоритет — гармоничное
										развитие мускулатуры и слаженная работа
										всех групп мышц, повышение силы
										и выносливости.
									</p>
									<NavLink
										className="card__link"
										to="/fit/functional/#functional-start"
									>
										ПОДРОБНЕЕ
									</NavLink>
								</div>
								<div className="card__img str_home"></div>
							</div>
							<div className="services__card card">
								<div className="card__img work_home"></div>
								<div className="card__text">
									<h2 className="card__title">WORK OUT</h2>
									<p className="card__dicription">
										Тренировки на улице — это идеальный вид
										физической активности в теплое время
										года. И воздух свежий, и хорошая
										погода — все способствует отличному
										настроению и эффективной тренировке.
									</p>
									<NavLink
										className="card__link"
										to="/fit/workout/#workout-start"
									>
										ПОДРОБНЕЕ
									</NavLink>
								</div>
							</div>
							<div className="services__card card">
								
								<div className="card__text">
									<h2 className="card__title">Online Тренировки</h2>
									<p className="card__dicription">
										С развитием интернет-сервиса заниматься спортом можно в комфортных условиях, дома и в отпуске по индивидуальной программе. Online тренировки не ограничиваются фитнесом, а предполагают силовые и кардионагрузки при наличии минимального инвентаря. Наши тренеры не оставят без внимания сложные элементы, проконсультируют насчет питания и интенсивности нагрузок.
									</p>
									<NavLink
										className="card__link"
										to="/fit/online/#online-start"
									>
										ПОДРОБНЕЕ
									</NavLink>
								</div>
                				<div className="card__img online_home"></div>
							</div>
						</div>
					</div>
				</ScrollableAnchor>

				<ScrollableAnchor id={"quate-fit"}>
					<Quate />
				</ScrollableAnchor>

				<ScrollableAnchor id={"contacts-fit"}>
					<Contacts />
				</ScrollableAnchor>

				<Form />
			</section>
		)
	}
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {
	chengeStateModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFit)
