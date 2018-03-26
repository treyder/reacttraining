
export const searchArtist = text => ({
  type: 'SEARCH_ARTIST_REQUEST',
  text
})

export const searchArtistSuccess = payload => ({
  type: "SEARCH_ARTIST_SUCCESS",
  payload
})

export const searchArtistCds = id => ({
    type: 'SEARCH_ARTIST_CDS',
    id
})

export const searchArtistCdsSuccess = payload => ({
    type: "SEARCH_ARTIST_CDS_SUCCESS",
    payload
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
