import React from 'react'
import Search from '../containers/Search'
import ArtistList from '../containers/ArtistList'
import CdList from '../containers/CdList'
//import Footer from './Footer'
//import VisibleTodoList from '../containers/VisibleTodoList'

/*const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)*/

const App = () => (
    <div>
        <Search />
        <ArtistList />
        <CdList />
    </div>
)


export default App
