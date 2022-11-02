import { Link } from "react-router-dom"
import ListErrors from "../ListErrors"
import React, { useState } from "react"
import agent from "../../agent"
import { connect } from "react-redux"
import { UPDATE_FIELD_AUTH, REGISTER, REGISTER_PAGE_UNLOADED } from "../../constants/actionTypes"
import { Input } from "../UI/Input"
import { Button, Text, Title } from "../UI"
import style from "./Register.module.scss"

const mapStateToProps = (state) => ({ ...state.auth })

const mapDispatchToProps = (dispatch) => ({
	onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
	onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
	onChangeUsername: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: "username", value }),
	onSubmit: (username, email, password) => {
		const payload = agent.Auth.register(username, email, password)
		dispatch({ type: REGISTER, payload })
	},
	onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED }),
})

const Register = ({ onSubmit, onUnload, errors, inProgress }) => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		username: "",
	})

	const onChange = (e) => {
		setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value })
	}

	const submitForm = (username, email, password) => (ev) => {
		ev.preventDefault()
		onSubmit(username, email, password)
	}

	return (
		<div className={style.main}>
			<div className={style.center}>
				<Title type={2}>Зарегистрироваться</Title>
				<Button type='link'><Link to='/login'>Уже есть аккаунт?</Link></Button>

				<ListErrors errors={errors} />
			</div>
			<form className={style.form} onSubmit={submitForm(values.username, values.email, values.password)}>
				<Input
					name="username"
					label="Имя пользователя"
					type="text"
					placeholder="Имя пользователя"
					value={values.username}
					onChange={onChange}
				/>
				<Input
					name="email"
					label="E-mail"
					type="email"
					placeholder="E-mail"
					value={values.email}
					onChange={onChange}
				/>
				<Input
					name="password"
					label="Пароль"
					type="password"
					placeholder="Пароль"
					value={values.password}
					onChange={onChange}
				/>
				<div className={style.right}>
					<Button disabled={inProgress}>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
