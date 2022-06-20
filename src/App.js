import './App.css'
import Main from './pages/main/Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './pages/Form/Form'
import MainPage from './pages/trelloMain/MainPage'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Main />} exact />
				<Route path='/form' element={<Form />} exact />
				<Route path='/mainPage' element={<MainPage />} exact />
				<Route path='/exit' element={<Form />} />
			</Routes>
		</div>
	)
}

export default App
