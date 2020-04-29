import { connect } from 'react-redux'
import Listings from '../components/Listings'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Listings)