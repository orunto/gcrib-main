import { useState } from 'react';


import HomeIco from '../images/Home.svg';
import HomeIco2 from '../images/Home2.svg';
import SearchIco from '../images/Search.svg';
import SearchIco2 from '../images/Search2.svg';
import CribIco from '../images/Crib.svg';
import CribIco2 from '../images/Crib2.svg';
import ShopIco from '../images/Shop.svg';
import ShopIco2 from '../images/Shop2.svg';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleCrib, setToggleCrib] = useState(false);
  const [toggleShop, setToggleShop] = useState(false);

  return(
  <div className='NavBar'>
      {toggleMenu
        ? <a href="/"><img alt="Home button" src={HomeIco2} onClick={() => setToggleMenu(false)} /></a>
        : <a href="/"><img alt="Home button" src={HomeIco} onClick={() => setToggleMenu(true)} /></a>
      }

      {toggleSearch
        ? <a href="/search"><img alt="Search button" src={SearchIco2} onClick={() => setToggleSearch(false)} /></a>
        : <a href="/search"><img alt="Search button" src={SearchIco} onClick={() => setToggleSearch(true)} /></a>
      }

      {toggleCrib
        ? <a href="/crib"><img alt="Crib button" src={CribIco2} onClick={() => setToggleCrib(false)} /></a>
        : <a href="/crib"><img alt="Crib button" src={CribIco} onClick={() => setToggleCrib(true)} /></a>
      }

      {toggleShop
          ? <a href="/shop"><img alt="Shop button" src={ShopIco2} onClick={() => setToggleShop(false)} /></a>
          : <a href="/shop"><img alt="Shop button" src={ShopIco} onClick={() => setToggleShop(true)} /></a>
      }
    </div>
  )
}

export default NavBar;