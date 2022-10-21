import React, { useState, useEffect } from 'react';
import menuIcon from '../../assets/icon_menu.png';
import closeIcon from '../../assets/icon_close.png';
import './styles.scss';

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const menuTitles = [
    '自分の記録',
    '体重グラフ',
    '目標',
    '選択中のコース',
    'コラム一覧',
    '設定',
  ];

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleMenu = () => {
    setOpen(false);
  };

  const handleMenuEnabled = () => {
    //TODO: need the route to link to the right page
    setOpen(false);
  };
  return (
    <div className='dropdown'>
      {/* get the menu name */}
      <img src={menuIcon} width={32} alt='' onClick={handleOpen} />
      {open ? (
        <div className='menu-list'>
          <div className='menu-list__close'>
            <img
              src={closeIcon}
              width={32}
              alt='Close Icon'
              onClick={handleMenu}
            />
          </div>
          {/* //TODO: need the conditional for menu titles that links connected with them  */}
          {menuTitles.map((menuItem, index) => (
            <div key={index} className='menu-list__item'>
              {menuItem}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
