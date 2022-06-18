import React, {useState} from 'react';
// import { useEffect } from 'react';

// import { NavBar } from './components';
import { Shop, Home } from './pages';

import './App.css';
import './css/Shop.css';
import './css/Home.css';

import HomeIco2 from './images/Home2.svg';
import HomeIco from './images/Home.svg';
import Search from './images/Search.svg';
import Crib from './images/Crib.svg';
import ShopIco2 from './images/Shop2.svg';
import ShopIco from './images/Shop.svg';

// const API_URL = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=13c2c347572f41dc86b098f810d1d381';

const App = () => {
  // const ReadsSearch = async(title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();

  //   console.log(data);
  //   console.log("Columbia");
  // }

  // useEffect(() => {
  //   ReadsSearch();
  // }, []);

  const [toggleHome, setToggleHome] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);
  
  return (
    <section>
      {/* <Home /> */}
      <div className='NavBar'>
        {toggleHome
            ? <img alt="Home button" src={HomeIco} onClick={() => setToggleHome(false)} />
            : <img alt="Home button" src={HomeIco2} onClick={() => setToggleHome(true)} />
        }

        <img alt="Search button" src={Search} />
        <img alt="Crib button" src={Crib} />

        {toggleShop
            ? <img alt="Shop button" src={ShopIco2} onClick={() => setToggleShop(false)} />
            : <img alt="Shop button" src={ShopIco} onClick={() => setToggleShop(true)} />
        }
      </div>
      {toggleHome && (
        <Home />
      )}

      {toggleShop && (
        <Shop />
      )}
      {/* <NavBar /> */}
    </section>
  );
}

export default App;