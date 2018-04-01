import React from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {searchArtistCds, searchArtistCdsSuccess} from "../actions";

function fetchCds(artistId) {
    console.log(artistId)
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

const Artist = ({dispatch, selected, artistName, artistId }) => (
  <li
    onClick={e => {
        e.preventDefault()
        dispatch(fetchCds(artistId))
    }}
    style={{
        textDecoration: selected ? 'line-through' : 'none'
    }}
  >
    {artistName}
  </li>
)

Artist.propTypes = {
  //onClick: PropTypes.func.isRequired,
  artistName: PropTypes.string.isRequired
  //artistId: PropTypes.numer
}



export default connect()(Artist);
