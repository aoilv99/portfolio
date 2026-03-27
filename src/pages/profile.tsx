import { Link } from 'react-router-dom';
import profileBackgroundImg from '../assets/profile-background.png';

function About() {
  return (
    <div>
      <nav className='top-nav'>
          <ul>
            <li><Link to="/">Top</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
      <div className='profile-name'>
        <h3>小野澤 葵</h3>
        <p>-onozawa aoi-</p>
      </div>
      <div className='profile-comments'>
        <p className='profile-comments-title'>comments</p>
        <p>可愛いものが大好きな専門学生です。</p>
        <p>家族や友達、誰かの心がちょっと温まるような作品 <br /> を作るのが好きです。</p>
        <p>作品を作るときはユーザーの視点に立ってUI,UXの <br /> 設計をすることを心がけています。</p>
        <p>人との縁を大切にし、周りをうまく巻き込んで様々 <br /> なことに挑戦するのが得意です。</p>
      </div>
      <div className='profile-background'>
        <img src={profileBackgroundImg} alt="Profile Background" />
      </div>
    </div>
  );
}

export default About;