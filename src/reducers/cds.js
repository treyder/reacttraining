
const cds = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_ARTIST_CDS':
            console.log('CDs search started');
            return state;
        case 'SEARCH_ARTIST_CDS_SUCCESS':
            console.log('CDs search finished: ', action.payload);
            return action.payload;
        default:
            return state
    }
}

export default cds