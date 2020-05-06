import { connect } from 'react-redux'
import ListingContainer from '../components/ListingContainer'
import { handleListingDelete } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleListingDelete: (index) => dispatch(handleListingDelete(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListingContainer)
