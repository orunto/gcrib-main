import { useState } from 'react';

import Home from '../images/Home.svg';
import Search from '../images/Search.svg';
import Crib from '../images/Crib.svg';
import Shop from '../images/Shop.svg';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
  <div className='NavBar'>
    {toggleMenu
        ? <img alt="Home button" src={Home} onClick={() => setToggleMenu(false)} />
        : <img alt="Home button" src={Home} onClick={() => setToggleMenu(true)} />
      }
        <img alt="Search button" src={Search} />
        <img alt="Crib button" src={Crib} />
        <img alt="Shop button" src={Shop} />
    </div>
  )
}

export default NavBar;