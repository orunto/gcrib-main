import '../App.css';
import Tip from '../images/Tip.svg';

const Top = () => {
    return(
    <div className='Top'>
        <h1>Hi, Fortune</h1>
        <span>Tip for you <img alt="Tip button" src={Tip} /></span>
      </div>
    )
}

export default Top;