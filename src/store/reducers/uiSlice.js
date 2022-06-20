// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
// 	// formIsTrueOrFalse: false,
// 	email: '',
// 	password: '',
// 	oshibkaEmail: false,
// 	oshibkaPassword: false,
// 	proverka1: false,
// 	proverka2: false,
// 	// onSubmit: false,
// }

// const uiSlice = createSlice({
// 	name: 'ui',
// 	initialState: initialState,
// 	reducers: {
// 		submit(state, action) {
// 			state.onSubmit = action.payload
// 			if (((state.email = true), (state.password = true))) {
// 				state.onSubmit = false
// 			}
// 			return state
// 		},
// 		emailInput(state, action) {
// 			state.email = action.payload
// 			if (state.email.includes('@')) {
// 				state.oshibkaEmail = true
// 				// state.proverka1 = false
// 			}
// 			return state
// 		},

// 		passwordInput(state, action) {
// 			state.password = action.payload
// 			if (state.password.length > 5) {
// 				state.oshibkaPassword = true
// 				// state.proverka2 = false
// 			}
// 			return state
// 		},
// 	},
// })

// export const uiActions = uiSlice.actions
// export default uiSlice
