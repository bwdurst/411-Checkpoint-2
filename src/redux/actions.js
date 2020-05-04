export const addListing = (state, listing) => {
    return {
        type: 'ADD_LISTING',
        value: [state, listing]
    }
}