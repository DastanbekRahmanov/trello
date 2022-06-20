import React from 'react'
import Header from './Header'
import styled from '../main/Main.module.css'
import photo5 from '../asses/main_img.png'

function Main() {
	return (
		<>
			<Header />
			<div className={styled.paragraph_img}>
				<div className={styled.h1_p}>
					<h1>Trello helps teams move work forward.</h1>
					<p>
						Collaborate, manage projects, and reach new productivity
						peaks. From high rises to the home office, the way your
						team works is unique—accomplish it all with Trello.
					</p>
				</div>
				<img className={styled.main_img} src={photo5} />
			</div>
		</>
	)
}

export default Main
