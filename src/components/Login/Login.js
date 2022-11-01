import { Link } from "react-router-dom"
import ListErrors from "../ListErrors"
import React from "react"
import agent from "../../agent"
import { connect } from "react-redux"
import { UPDATE_FIELD_AUTH, LOGIN, LOGIN_PAGE_UNLOADED } from "../../constants/actionTypes"
import { Input } from "../UI/Input"
import style from "./Login.module.scss"
import { Button, Title } from "components/UI"

const mapStateToProps = (state) => ({ ...state.auth })

const mapDispatchToProps = (dispatch) => ({
	onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
	onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
	onSubmit: (email, password) => dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
	onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
})

class Login extends React.Component {
	constructor() {
		super()
		this.changeEmail = (ev) => this.props.onChangeEmail(ev.target.value)
		this.changePassword = (ev) => this.props.onChangePassword(ev.target.value)
		this.submitForm = (email, password) => (ev) => {
			ev.preventDefault()
			this.props.onSubmit(email, password)
		}
	}

	componentWillUnmount() {
		this.props.onUnload()
	}

	render() {
		const email = this.props.email
		const password = this.props.password
		return (
			<div className={style.main}>
				<div className={style.center}>
					<Title type={2}>Войти</Title>
					<Button type='link'>Хотите создать аккаунт?</Button>

					<ListErrors errors={this.props.errors} />
				</div>
				<form className={style.form} onSubmit={this.submitForm(email, password)}>
					<Input
						label="E-mail"
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={this.changeEmail}
					/>
					<Input
						label="Пароль"
						type="password"
						placeholder="Пароль"
						value={password}
						onChange={this.changePassword}
					/>
					<div className={style.right}>
						<Button type='primary' htmlType="submit" disabled={this.props.inProgress}>
							Войти
						</Button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
