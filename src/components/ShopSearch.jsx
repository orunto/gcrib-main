import SearchIcon from '../images/Search.svg'

const ShopSearch = () => {
    return(
    <form className='ShopSearch'>
        <img src={SearchIcon} alt="Search Icon"/>
        <input type="text" placeholder="Item, Location Seller..." />
    </form>
    
    )
}

export default ShopSearch;