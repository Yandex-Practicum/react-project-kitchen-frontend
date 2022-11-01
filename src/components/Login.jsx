import { Link } from "react-router-dom"
import ListErrors from "./ListErrors"
import React, { useEffect, useState } from "react"
import agent from "../agent"
import { connect } from "react-redux"
import { UPDATE_FIELD_AUTH, LOGIN, LOGIN_PAGE_UNLOADED } from "../constants/actionTypes"
import { Input } from "./UI/Input"

const mapStateToProps = (state) => ({ ...state.auth })

const mapDispatchToProps = (dispatch) => ({
	onChangeEmail: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: "email", value }),
	onChangePassword: (value) => dispatch({ type: UPDATE_FIELD_AUTH, key: "password", value }),
	onSubmit: (email, password) => dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
	onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
})


const Login = ({onSubmit, onUnload, errors, inProgress}) => {
	const [values, setValues] = useState({
		email: '',
		password: ''
	})

	const onChange = (e) => {
		setValues({...values, [e.currentTarget.name]: e.currentTarget.value})
	}

	const submitForm = (email, password) => (ev) => {
		ev.preventDefault()
		onSubmit(email, password)
	}

	useEffect(() => {
	
		return () => {
			onUnload()
			
		}
	}, [])
	return (
					<div className="col-md-6 offset-md-3 col-xs-12">
						<h1 className="text-xs-center">Sign In</h1>
						<p className="text-xs-center">
							<Link to="/register">Need an account?</Link>
						</p>

						<ListErrors errors={errors} />

						<form onSubmit={submitForm(values.email, values.password)}>
							<Input
								name={'email'}
								label="E-mail"
								type="email"
								placeholder="E-mail"
								value={values.email}
								onChange={onChange}
							/>
							<Input
								name={'password'}
								label="Пароль"
								type="password"
								placeholder="Пароль"
								value={values.password}
								onChange={onChange}
							/>

							<button
								className="btn btn-lg btn-primary pull-xs-right"
								type="submit"
								disabled={inProgress}
							>
								Sign in
							</button>
						</form>
					</div>
	)

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
