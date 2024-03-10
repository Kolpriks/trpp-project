import React, { useState, useEffect } from "react";
import './Card.css'

const dictionary = {
	'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o', 'か': 'ka', 'き': 'ki',
	'く': 'ku', 'け': 'ke', 'こ': 'ko', 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
	'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to', 'な': 'na', 'に': 'ni', 'ぬ': 'nu',
	'ね': 'ne', 'の': 'no', 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho', 'ま': 'ma',
	'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo', 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo', 'ら': 'ra',
	'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro'
};

const HiraganaHint = (props) => {
	const { currentKey } = props;
	const [showHint, setShowHint] = useState(false);

	useEffect(() => {
		setShowHint(false); // При изменении ключа скрываем текст
	}, [currentKey]);

	const toggleHint = () => {
		setShowHint(!showHint)
	}

	return (
		<div>
			{!showHint ? (
				<button className="hint-button" onClick={toggleHint}>Hint</button>
			) : (
				<p className="hint-text">{dictionary[currentKey]}</p>
			)}
		</div>
	)
}

export default HiraganaHint;
