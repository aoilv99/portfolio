import { Link } from 'react-router-dom';
import aoiImg from '../assets/home-aoi.png';

function Top() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Top</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div>
        <h1>AoiOnozawa</h1>
        <h2>フロントエンドエンジニア</h2>
      </div>
      <div>
        <img src={aoiImg} alt="Aoi Onozawa" />
      </div>
    </div>
  );
}

export default Top;