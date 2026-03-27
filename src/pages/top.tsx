import { Link } from 'react-router-dom';
import aoiImg from '../assets/home-aoi.png';
import famlinkLogo from '../assets/famlink-logo.png';
import flockaLogo from '../assets/flocka-logo.png';
import meidlyLogo from '../assets/meidly-logo.png';

function Top() {
  return (
    <div>
      <div className='top'>
        <nav className='top-nav'>
          <ul>
            <li><Link to="/">Top</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <div className='top-content'>
          <h1>AoiOnozawa</h1>
          <h2>フロントエンドエンジニア</h2>
        </div>
        <div className='top-image'>
          <img src={aoiImg} alt="Aoi Onozawa" />
        </div>
      </div>
      <div className='top2'>
        <div>
          <img src={famlinkLogo} alt="Famlink Logo" />
        </div>
        <div>
          <img src={flockaLogo} alt="Flocka Logo" />
        </div>
        <div>
          <img src={meidlyLogo} alt="Meidly Logo" />
        </div>
      </div>

    </div>
  );
}

export default Top;