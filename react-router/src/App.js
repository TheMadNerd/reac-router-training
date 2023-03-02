
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from 'react-router-dom'

const Home = () => {
  return(
    <h1>Witaj!</h1>
   )
}

const News = () => {
  return(
    <h1>Wiadomości</h1>
   )
}

const Contact = () => {
  return(
   <h1>Kontakt</h1>
  )
 }

class App extends Component {

  
render() {
  return (
    <Router>
    <div>
      <header>
        <nav>
          <ul>
            <li><NavLink to='/'>Start</NavLink></li>
            <li><NavLink to='/news'>Aktualności</NavLink></li>
            <li><NavLink to='/contact'>Kontakt</NavLink></li>
          </ul>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </section>
    </div>
    </Router>
    
  )
}
}
  
export default App;
