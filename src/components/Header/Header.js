import React, { useState } from "react";
import profile from './profile_img.png';
import '../Header/Header.css';
import HiraganaCard from "../HiraganaCard/HiraganaCard";
import KatakanaCard from "../KatakanaCard/KatakanaCard";

function Header() {
  const [selectedComponent, setSelectedComponent] = useState('hiragana');

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
		<div>
      <header className="header">
        <div className="header__wraper">
          <div className="header__logo">
            <p className="logo">学</p>
          </div>
          <div className="header__languages">
            <p
              href="#"
              onClick={() => handleButtonClick('hiragana')}
              className={selectedComponent === 'hiragana' ? 'active' : 'header-text'}
            >
              Hiragana
            </p>
            <p
              href="#"
              onClick={() => handleButtonClick('katakana')}
              className={selectedComponent === 'katakana' ? 'active' : 'header-text'}
            >
              Katakana
            </p>
            {/* <p href="#" className='header-text'>Kanji</p> */}
          </div>
          <div className="profile">
            <img className="profile__img" src={profile} width="20px" alt="Profile"/>
							<a href="#">Profile</a>
          </div>
        </div>
      </header>
      {selectedComponent === 'hiragana' && <HiraganaCard />}
      {selectedComponent === 'katakana' && <KatakanaCard />}
    </div>
  );
}

export default Header;

