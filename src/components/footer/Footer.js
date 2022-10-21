import React from 'react';
import './styles.scss';

const Footer = () => {
  const footerTitles = [
    '会員登録',
    '運営会社',
    '利用規約',
    '個人情報の取扱について',
    '特定商取引法に基づく表記',
    'お問い合わせ',
  ];
  return (
    <div className='footer'>
      {footerTitles.map((footerItem, index) => (
        <div key={index} className='footer__item'>
          {footerItem}
        </div>
      ))}
    </div>
  );
};

export default Footer;
