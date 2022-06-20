import React from 'react'
import MainHeader from '../../components/MainHeader'
import styled from '../trelloMain/MainPage.module.css'
import photo  from '../asses/back_img.jpg'
import Todo from '../../components/Todo'


function MainPage() {
	return (
		<div>
			<MainHeader />
            <img src={photo} className = {styled.back_img}  />
			<Todo/>
		</div>
	)
}

export default MainPage
