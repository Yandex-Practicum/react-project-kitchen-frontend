import ListErrors from "../ListErrors"
import React, { useEffect, useState } from "react"
import agent from "../../agent"
import { connect } from "react-redux"
import { SETTINGS_SAVED, SETTINGS_PAGE_UNLOADED, LOGOUT } from "../../constants/actionTypes"
import { Input } from "../UI/Input"
import { Button, Title } from "../UI"

import styles from "./Settings.module.scss"

const mapStateToProps = (state) => ({
	...state.settings,
	currentUser: state.common.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
	onClickLogout: () => dispatch({ type: LOGOUT }),
	onSubmitForm: (user) => dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
	onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED }),
})

const Settings = ({ onSubmitForm, inProgress, currentUser, errors, onClickLogout, onUnload }) => {
	const [values, setValues] = useState({
		image: "",
		username: "",
		bio: "",
		email: "",
		password: "",
	})

	useEffect(() => {
		return () => {
			onUnload()
		}
	})

	useEffect(() => {
		const { image = "", username = "", bio = "", email = "", password = "" } = currentUser
		setValues({
			image,
			username,
			bio,
			email,
			password,
		})
	}, [currentUser])

	const changeHandler = (e) => {
		setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value })
	}

	const submitFormHandler = (e) => {
		e.preventDefault()

		const user = { ...values }
		if (!user.password) delete user.password
		onSubmitForm(user)
	}
	return (
		<div className={styles.wrapper}>
			<Title type={2}>Ваши настройки</Title>

			<ListErrors errors={errors}></ListErrors>

			<form className={styles.form} onSubmit={submitFormHandler}>
				{/* <Input
					name="image"
					label="Изображение профиля"
					type="file"
					placeholder="Изображение (опционально)"
					value={this.state.image}
					onChange={this.updateState("image")}
				/> */}
				<Input
					name="username"
					label="Имя пользователя"
					placeholder="Введите ваше имя"
					value={values.username}
					onChange={changeHandler}
				/>
				<Input
					name="bio"
					label="Информация о вас"
					placeholder="Расскажите немного о себе"
					type="textarea"
					value={values.bio}
					onChange={changeHandler}
				/>
				<Input
					name="email"
					label="E-mail"
					type="email"
					placeholder="Введите почту"
					value={values.email}
					onChange={changeHandler}
				/>
				<Input
					name="password"
					label="Новый пароль"
					type="password"
					placeholder="Введите ваш новый пароль"
					value={values.password}
					onChange={changeHandler}
				/>
				<section className={styles.button}>
					<Button htmlType="submit" disabled={inProgress}>Сохранить</Button>
				</section>
			</form>
			<Button type="delete" onClick={onClickLogout}>
				Выйти из аккаунта
			</Button>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)