export const removeListing = (index) => {
    return {
        type: 'ADD_CAR',
        value: index
    }
}

export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

// export const removeCar = (index) => {
//     return {
//         type: 'REMOVE_CAR',
//         value: index
//     }
// }

// export const fetchMakes = () => {
//     return (dispatch) => {
//         fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
//             .then(res => res.json())
//             .then(response => {
//                 const action = {
//                     type: 'FETCH_MAKES',
//                     value: response.Results
//                 }
//                 dispatch(action)
//             })
//     }
// }

// export const removeMake = (makeId) => {
//     return {
//         type: 'REMOVE_MAKE',
//         value: makeId
//     }
// }

