import React from 'react'
import Artist from '../components/Artist'
import {connect} from "react-redux";

import styles from '../styles/main.less'

const ArtistList = ({ artists = []}) => (
    <div className={[styles.split, styles.left]}>
        <div className={styles.centered}>
            <ul>
                {artists.map(artist =>
                    <Artist
                        key={artist.artistId}
                        artistId={artist.artistId}
                        artistName={artist.artistName}
                    />
                )}
            </ul>
        </div>
    </div>
)

const mapStateToProps = state => ({
    artists: state.artists,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList)