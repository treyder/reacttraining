import React from 'react'
//import PropTypes from 'prop-types'
import Artist from '../components/Artist'
import {showArtistsCds} from '../actions'
import {connect} from "react-redux";

const ArtistList = ({ artists = [], showArtistsCds}) => (
    <ul>
        {artists.map(artist =>
            <Artist
                key={artist.artistId}
                artistName={artist.artistName}
                onClick={() => showArtistsCds(artist.artistId)}
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
    showArtistsCds: id => dispatch(showArtistsCds(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
