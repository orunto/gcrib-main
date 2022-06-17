import Home from '../images/Home.svg';
import Search from '../images/Search.svg';
import Crib from '../images/Crib.svg';
import Shop from '../images/Shop.svg';

const NavBar = () => {
    return(
    <div className='NavBar'>
        <img alt="Home button" src={Home} />
        <img alt="Search button" src={Search} />
        <img alt="Crib button" src={Crib} />
        <img alt="Shop button" src={Shop} />
      </div>
    )
}

export default NavBar;