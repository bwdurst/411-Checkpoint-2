import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import { addListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (listing) => dispatch(addListing(listing)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)
