
const artists = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_ARTIST_REQUEST':
            console.log('Searching for artist ', action.text);
            return state;
        case 'SEARCH_ARTIST_SUCCESS':
            console.log('Search finished');
            return {...state, artists: action.payload};
        case 'SELECT_ARTIST':
            return state.map(artist =>
                (artist.id === action.id)
                    ? {...artist, selected: true}
                    : artist
            )
        default:
            return state
    }
}

export default artists
