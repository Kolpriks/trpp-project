import React from 'react'
import '../Footer/Footer.css'

class Footer extends React.Component{
	render(){
		return(
		<footer>
			<div className="footer__text">
				<div className="year">2024</div>
				<span className="separator"></span>
				<div className="end-text">Website made by company of students</div>
			</div>
		</footer>
		)
	}
}

export default Footer