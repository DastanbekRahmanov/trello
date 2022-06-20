import React, { useState } from 'react'
import styles from '../components/Todo.module.css'

function Todo() {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [show, setShow] = useState(false)

	const inputHendler = (event) => {
		setValue(event.target.value)
	}
	const submitHendler = (event) => {
		event.preventDefault()
		if (value === '') {
			return
		}

		setValue('')

		setList((el) => [
			...el,
			{
				value,
				id: Math.random().toString(),
			},
		])
	}
	return (
		<>
			{(!show && (
				<div>
					<button
						className={styles.add_card_btn}
						onClick={() => setShow(true)}
					>
						+  Добaвить карточку
					</button>
				</div>
			)) || (
				<form className={styles.form} onSubmit={submitHendler}>
					<input
						placeholder='Ввести заголовок для этой карточки'
						type='text'
						onChange={inputHendler}
						value={value}
					/>
					<div>
						<button className={styles.add_btn}>
							+ Добaвить карточку
						</button>
						<button
							className={styles.exit_btn}
							onClick={() => setShow(false)}
						>
							X
						</button>
					</div>
					{list.map((el) => (
						<p className={styles.map_p}>{el.value}</p>
					))}
				</form>
			)}
		</>
	)
}

export default Todo
