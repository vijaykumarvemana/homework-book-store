import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import BookList from './components/BookList'
import fantasyBooks from './data/fantasyBooks.json'
import MyNav from './components/MyNav'

function App() {
  return (
    <div >
      <>
        <MyNav title="Book-Store"/>
        <BookList books={fantasyBooks} />
  </>
    </div>
  )
}

export default App