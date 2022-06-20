import React from 'react'
import styled from '../main/Header.module.css'
import { Link, Switch } from 'react-router-dom'
import photo4 from '../asses/logo.png'

function Header() {
	return (
		<div className={styled.header}>
			<div className={styled.logo_div}>
				<img className={styled.logo_img} src={photo4} />
				<button>Features</button>
				<button>Solutions</button>
				<button>Plans</button>
				<button>Pricing</button>
				<button>Resources</button>
			</div>
			<div className={styled.login_trello}>
				<Link className={styled.log_in} to='/form'>
					Log in
				</Link>
				<div className={styled.get_trello}>Get Trello for free</div>
			</div>
		</div>
	)
}

export default Header
