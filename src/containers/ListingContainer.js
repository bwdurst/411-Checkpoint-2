import { connect } from 'react-redux'
import ListingContainer from '../components/ListingContainer'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(ListingContainer)
