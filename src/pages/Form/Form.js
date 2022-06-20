import React, { useEffect, useState } from 'react'
import styled from '../Form/Form.module.css'
import { Link, Switch } from 'react-router-dom'
import photo3 from '../asses/logo2.png'
// import { uiActions } from '../../store/reducers/uiSlice'
// import { useDispatch, useSelector } from 'react-redux'

function Form(e) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Email не может быть пустым')
	const [passwordError, setPasswordError] = useState(
		'Password не может быть пустым',
	)
	const [formValid, setFormValid] = useState(false)

	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
				break
			default:
				break
		}
	}
	const emailHandler = (e) => {
		setEmail(e.target.value)
		if (!e.target.value.includes('@')) {
			setEmailError('некоректный email')
			if (!e.target.value) {
				setEmailError('Email не может быть пустым')
			}
		} else {
			setEmailError('')
		}
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 5) {
			setPasswordError('password должень длиннее 5')
			if (!e.target.value) {
				setPasswordError('Password не может быть пустым')
			}
		} else {
			setPasswordError('')
		}
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault()
	}
	return (
		<div className={styled.wrapper}>
			<img className={styled.logo} src={photo3} />
			<form className={styled.form} onSubmit={formSubmissionHandler}>
				<h1>Вход в Trello</h1>
				{emailDirty && emailError && (
					<p style={{ color: 'red' }}>{emailError}</p>
				)}
				<input
					value={email}
					onBlur={(e) => blurHandler(e)}
					name='email'
					onChange={(e) => emailHandler(e)}
					placeholder='Введите адрес электронный почты'
					type='email'
				/>
				{passwordDirty && passwordError && (
					<p style={{ color: 'red' }}>{passwordError}</p>
				)}
				<input
					value={password}
					onBlur={(e) => blurHandler(e)}
					name='password'
					onChange={(e) => passwordHandler(e)}
					placeholder='Введите пароль'
					type='password'
				/>
				<Link to='/mainPage'>
					<button
						disabled={!formValid}
						className={styled.button}
						type='submit'
					>
						Войти
					</button>
				</Link>
			</form>
		</div>
	)
}

export default Form
