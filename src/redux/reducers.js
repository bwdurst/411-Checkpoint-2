import { combineReducers } from 'redux'

const businesses = (state = null) => state

// const cars = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_CAR':
//             return [...state, action.value]
//         case 'REMOVE_CAR':
//             const cars = [...state]
//             cars.splice(action.value, 1)
//             return cars
//         default:
//             return state
//     }
// }

// const makes = (state = [], action) => {
//     switch (action.type) {
//         case 'FETCH_MAKES':
//             return action.value
//         case 'REMOVE_MAKE':
//             console.log(state)
//             const makes = [...state]
//             return makes.filter(make => make.MakeId !== action.value)
//         default:
//             return state
//     }
// }

export default combineReducers({ businesses })