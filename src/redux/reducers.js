import { combineReducers } from 'redux'

const businesses = (state = null) => state

const addListing = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LISTING':
      console.log(state, action)
      return state
    default:
      return state
  }
}

export default combineReducers({ businesses, addListing })