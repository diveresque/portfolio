import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Portfolio' component={Portfolio} />
          <Route exact path='/Contact' component={Contact} />

        <Footer />
    </div>
    </Router>
  );
}

export default App;
