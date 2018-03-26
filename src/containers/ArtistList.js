import React from 'react'
//import PropTypes from 'prop-types'
import Artist from '../components/Artist'
import {searchArtistCds, searchArtistCdsSuccess} from '../actions'
import {connect} from "react-redux";

function fetchCds(artistId) {
    return (dispatch) => {
        console.log('running fetchCds()');
        dispatch(searchArtistCds(artistId));
        //
        return fetch(`https://itunes.apple.com/lookup?id=${artistId}&entity=album`)
            .then(response => response.json())
            .then(data => {
                console.log('Search for cds finished', data.results);
                dispatch(searchArtistCdsSuccess(data.results));
            });
    };
}

const ArtistList = ({ artists = [], dispatch}) => (
    <ul>
        {artists.map(artist =>
            <Artist
                key={artist.artistId}
                artistName={artist.artistName}
                onClick={() => dispatch(fetchCds(artist.artistId))}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(searchArtistCds(ownProps.id))
    //searchArtistCds: id => dispatch(searchArtistCds(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)
//export default connect()(ArtistList)
