const artists = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_ARTIST_REQUEST':
            console.log('Searching for artist ', action.text);
            return state;
        case 'SEARCH_ARTIST_SUCCESS':
            console.log('Search finished: ', action.payload);
            return action.payload;
        default:
            return state
    }
}

export default artists
