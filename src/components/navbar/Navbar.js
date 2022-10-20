import React from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import memoIcon from '../../assets/icon_memo.png';
import challengeIcon from '../../assets/icon_challenge.png';
import infoIcon from '../../assets/icon_info.png';
import menuIcon from '../../assets/icon_menu.png';

function Navbar(props) {
  return (
    <div className='nav'>
      <div className='nav__logo-container'>
        <img src={logo} alt='The Logo' width={144} height={64} />
      </div>
      <div className='nav__memo-container'>
        <img src={memoIcon} alt='Memo Icon' width={32} />
        <h4>自分の記録</h4>
      </div>
      <div className='nav__challenge-container'>
        <img src={challengeIcon} alt='Challenge Icon' width={32} />
        <h4>チャレンジ</h4>
      </div>
      <div className='nav__info-container'>
        <img src={infoIcon} alt='Info Icon' width={32} />
        <h4>お知らせ</h4>
      </div>
      <div className='nav__menu-container'>
        <img src={menuIcon} />
      </div>
    </div>
  );
}

export default Navbar;
