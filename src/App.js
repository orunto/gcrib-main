import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { NavBar } from './components';
import { Home, Shop, Error } from './pages';

import './App.css';
import './css/Shop.css';
import './css/Home.css';


const App = () => {
  
  return (
    <Router>
      <section> 
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;


// import { useEffect } from 'react';

// const API_URL = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=13c2c347572f41dc86b098f810d1d381';

// const ReadsSearch = async(title) => {
//   const response = await fetch(`${API_URL}&s=${title}`);
//   const data = await response.json();
  
//   console.log(data);
//   console.log("Columbia");
// }
  
// useEffect(() => {
//   ReadsSearch();
// }, []);