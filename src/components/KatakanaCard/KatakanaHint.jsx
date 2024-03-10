import React, { useState, useEffect } from "react";
import '../HiraganaCard/Card.css'

const dictionary = {
	カ: 'ka', キ: 'ki',ク: 'ku',ケ: 'ke',コ: 'ko',サ: 'sa',シ: 'shi',ス: 'su',セ: 'se',ソ: 'so',タ: 'ta',チ: 'chi',ツ: 'tsu',
	テ: 'te',ト: 'to',ナ: 'na',ニ: 'ni',ヌ: 'nu',ネ: 'ne',ノ: 'no',ハ: 'ha',ヒ: 'hi',フ: 'fu',ヘ: 'he',ホ: 'ho',マ: 'ma',
	ミ: 'mi',ム: 'mu',メ: 'me',モ: 'mo',ヤ: 'ya',ユ: 'yu',ヨ: 'yo',ラ: 'ra',リ: 'ri',ル: 'ru',レ: 're',ロ: 'ro',
	ワ: 'wa',ヲ: 'wo',ン: 'n',ガ: 'ga',ギ: 'gi',グ: 'gu',ゲ: 'ge',ゴ: 'go',ザ: 'za',ジ: 'ji',ズ: 'zu',ゼ: 'ze',ゾ: 'zo',
	ダ: 'da',ヂ: 'ji',ヅ: 'zu',デ: 'de',ド: 'do',バ: 'ba',ビ: 'bi',ブ: 'bu',ベ: 'be',
	ボ: 'bo',パ: 'pa',ピ: 'pi',プ: 'pu',ペ: 'pe',ポ: 'po',
}

const KatakanaHint = (props) => {
	const { currentKey } = props;
	const [showHint, setShowHint] = useState(false)
	
	useEffect(() =>{
		setShowHint(false)
	}, [currentKey])

	const toggleHint = () => {
		setShowHint(!showHint)
	}

	return (
		<div>
			{!showHint ? (
				<button className="hint-button" onClick={toggleHint}>Hint</button>
			):(
				<p className="hint-text">{dictionary[currentKey]}</p>
			)}
		</div>
	);
};

export default KatakanaHint