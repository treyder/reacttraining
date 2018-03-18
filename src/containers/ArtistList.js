import React from 'react'
//import PropTypes from 'prop-types'
import Artist from '../components/Artist'
import {searchArtist, searchArtistSuccess} from '../actions'
import {connect} from "react-redux";


const ArtistList = ({ artists = [], selectArtist }) => (
    <ul>
        {artists.map(artist =>
            <Artist
                key={artist.artistId}
                {...artists}
                onClick={() => searchArtist(artist.artistId)}
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
    artists: state.artists
})

const mapDispatchToProps = dispatch => ({
    selectArtist: id => dispatch(searchArtist(id)),
    /*searchArtist: searchText => dispatch(fetchArtists(searchText))*/
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
