const cds = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_ARTIST_CDS':
            console.log('Searching for CDs for artist ', action.artistId);
            return state;
        case 'SEARCH_ARTIST_CDS_SUCCESS':
            console.log('Search finished: ', action.payload);
            return action.payload;
        default:
            return state
    }
}

export default cds
