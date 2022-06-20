import React from 'react'
import styled from '../components/MainHeader.module.css'
import photo2 from '../pages/asses/logo2.png'
import { Link } from 'react-router-dom'

function MainHeader() {
	return (
		<div className={styled.main_div}>
			<div className={styled.main_left_div}>
				<img className={styled.logo} src={photo2} />
				<button>Рабочие пространства</button>
				<button>Недавные</button>
				<button>В избранном</button>
				<button>Шаблоны</button>
				<button>Создать</button>
			</div>
			<div className={styled.main_right_div}>
				<input placeholder='Поиск...' />
				<div>DR</div>
				<Link to='/exit'>
					<button>Выйти</button>
				</Link>
			</div>
		</div>
	)
}

export default MainHeader
