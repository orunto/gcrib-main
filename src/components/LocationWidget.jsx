import LocationIco from '../images/Location.svg'
import CancelIco from '../images/Cancel.svg'
import { useState } from 'react';

const LocationWidget = () => {
    const [toggleCancel, setToggleCancel] = useState(false);


    return(
    <div className='LocationWidget'>
        <img id="locationico" src={LocationIco} alt="Reads Icon"/>
        <img id="cancelico" src={CancelIco} alt="Reads Icon"/>
        <h2>Find Stores Near You</h2>
    </div>
    )
}

export default LocationWidget;