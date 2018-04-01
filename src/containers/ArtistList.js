import React from 'react'
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

const mapStateToProps = state => ({
    artists: state.artists,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)