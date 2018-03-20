import React from 'react'
import { connect } from 'react-redux'
import {searchArtist, searchArtistSuccess} from '../actions'

function fetchArtists(searchText) {
    return (dispatch) => {
        console.log('running fetchArists()');
        dispatch(searchArtist(searchText));
        return fetch(`https://itunes.apple.com/search?entity=musicArtist&term=${searchText}`)
            .then(response => response.json())
            .then(data => {
                console.log('Search for artists finished', data.results);
                dispatch(searchArtistSuccess(data.results));
            });
    };
}

const Search = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(fetchArtists(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  )
};

export default connect()(Search)