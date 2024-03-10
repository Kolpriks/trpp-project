import React from 'react'
import '../HiraganaCard/Card.css'
import KatakanaHint from './KatakanaHint'

class KatakanaCard extends React.Component {
	state = {
		currentSymbol: '',
		userInput: '',
	};

	dictionary = {
		カ: 'ka', キ: 'ki',ク: 'ku',ケ: 'ke',コ: 'ko',サ: 'sa',シ: 'shi',ス: 'su',セ: 'se',ソ: 'so',タ: 'ta',チ: 'chi',ツ: 'tsu',
		テ: 'te',ト: 'to',ナ: 'na',ニ: 'ni',ヌ: 'nu',ネ: 'ne',ノ: 'no',ハ: 'ha',ヒ: 'hi',フ: 'fu',ヘ: 'he',ホ: 'ho',マ: 'ma',
		ミ: 'mi',ム: 'mu',メ: 'me',モ: 'mo',ヤ: 'ya',ユ: 'yu',ヨ: 'yo',ラ: 'ra',リ: 'ri',ル: 'ru',レ: 're',ロ: 'ro',
		ワ: 'wa',ヲ: 'wo',ン: 'n',ガ: 'ga',ギ: 'gi',グ: 'gu',ゲ: 'ge',ゴ: 'go',ザ: 'za',ジ: 'ji',ズ: 'zu',ゼ: 'ze',ゾ: 'zo',
		ダ: 'da',ヂ: 'ji',ヅ: 'zu',デ: 'de',ド: 'do',バ: 'ba',ビ: 'bi',ブ: 'bu',ベ: 'be',
		ボ: 'bo',パ: 'pa',ピ: 'pi',プ: 'pu',ペ: 'pe',ポ: 'po',
	};

	componentDidMount() {
		this.generateNewSymbol();
	}

	generateNewSymbol() {
		const symbols = Object.keys(this.dictionary);
		const randomIndex = Math.floor(Math.random() * symbols.length);
		const newSymbol = symbols[randomIndex];
		this.setState({ currentSymbol: newSymbol, userInput: '' });
	}

	handleSubmit = () => {
    const { userInput, currentSymbol } = this.state;
    const symbolKey = this.dictionary[currentSymbol];

    const body = document.querySelector('body');

    if (userInput.toLowerCase() === symbolKey) {
        body.classList.add('success-animation');
        setTimeout(() => {
            body.classList.remove('success-animation');
        }, 1000);
    } else {
        body.classList.add('failure-animation');
        setTimeout(() => {
            body.classList.remove('failure-animation');
        }, 1000);
    }


		this.generateNewSymbol(); // Генерируем новый символ после каждого Submit
	};

	handleInputChange = (event) => {
		this.setState({ userInput: event.target.value });
	}

	handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			this.handleSubmit();
		}
	}

	render() {
		const { currentSymbol, userInput } = this.state;

		return(
		<main className="main-page">
			<div className="question-card">

				<div className="question-card__symbol">
					<a className="question-card__symbol__text" >{currentSymbol}</a>
				</div>

				<div className="question-card__pronaunce">
					<p className="pronaunce">How to pronounce this symbol?</p>
				</div>

				<div className="question-card__input">
					<input 
					type="text" 
					className="text-here" 
					placeholder="Type here..."
					onChange={this.handleInputChange}
					value={userInput}
					onKeyUp={this.handleKeyPress}
					maxLength="10"/>
					
				</div>

				<div className="buttons">
					
					<button className="button" onClick={this.handleSubmit}>Skip</button>
					<button className="button" onClick={this.handleSubmit}>Sumbit</button>
				</div>
				<KatakanaHint currentKey={currentSymbol}/>
			</div>
		</main>
		)
	}
}

export default KatakanaCard