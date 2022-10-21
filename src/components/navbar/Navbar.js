import React, { useState } from 'react';
import './styles.scss';
import logo from '../../assets/logo.png';
import memoIcon from '../../assets/icon_memo.png';
import challengeIcon from '../../assets/icon_challenge.png';
import infoIcon from '../../assets/icon_info.png';
import Dropdown from '../dropdown/Dropdown';

function Navbar(props) {
  const [num] = useState(1);
  return (
    <div className='nav'>
      <div className='nav__logo-container'>
        <img src={logo} alt='The Logo' width={144} height={64} />
      </div>
      <div className='nav__memo-container'>
        <img src={memoIcon} alt='Memo Icon' width={32} />
        <div>自分の記録</div>
      </div>
      <div className='nav__challenge-container'>
        <img src={challengeIcon} alt='Challenge Icon' width={32} />
        <div>チャレンジ</div>
      </div>
      <div className='nav__info-container'>
        <div className='nav__badge'>{num}</div>
        <img src={infoIcon} alt='Info Icon' width={32} />

        <div>お知らせ</div>
      </div>
      <div className='nav__menu-container'>
        <Dropdown />
      </div>
    </div>
  );
}

export default Navbar;
