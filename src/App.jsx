import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './component/Homepage'
import Addarticle from './component/Addarticle'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Aboutcenter from './component/Aboutcenter'
import Fullarticle from './component/Fullarticle'
import Fullengarticle from './component/Fullengarticle'
import Bookpage from './component/BookPage';
import BookDetailsPage from './component/BookDetailsPage'
import Books from './component/BookList';
import ArticleFullpage from './component/Articlefullpage'

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/article" element={<Addarticle/>} />
          <Route path="/about" element={<Aboutcenter/>} />
          <Route path="/detailarticle" element={<Fullarticle/>} />
          <Route path="/engarticle" element={<Fullengarticle/>} />
          <Route path="/books" element={<Bookpage/>} />
          <Route path="/bookdetail" element={<BookDetailsPage/>} />
          <Route path="/bookslist" element={<Books/>} />
          <Route path="/articlefullpage" element={<ArticleFullpage/>} />

          {/* Add more routes here as needed */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
