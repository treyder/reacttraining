import React from 'react'
//import PropTypes from 'prop-types'
import Artist from '../components/Artist'
import {connect} from "react-redux";


const ArtistList = ({ artists = []}) => (
    <ul>
        {artists.map(artist =>
            <Artist
                key={artist.artistId}
                artistId={artist.artistId}
                artistName={artist.artistName}
            />
        )}
    </ul>
)

/*ArtistList.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        selected: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    selectArtist: PropTypes.func.isRequired
}*/

const mapStateToProps = state => ({
    artists: state.artists,
})

const mapDispatchToProps = dispatch => ({
    //fetchCds: id => dispatch(searchArtistCds(id))
    //onClick: id => dispatch(searchArtistCds(ownProps.id))
    //searchArtistCds: id => dispatch(searchArtistCds(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
//export default connect()(ArtistList)
