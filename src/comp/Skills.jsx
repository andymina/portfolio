import React from 'react';
import firebase from './firebase';

export default class Skills extends React.Component {
	constructor(props){
		super(props);
		this.state = {items: []};
	}

	componentDidMount(){
		firebase.database().ref("skills").on("value", (data) => {
			let rawJSON = data.val();
			let keys = Object.keys(rawJSON);
			let slides = keys.map((k) =>
				<div className="row h-100 my-3" key={k.toString()}>
					<div class="col-lg-5 my-auto">
						<p class="lead skill-text my-0" style={{color: '#212529', fontFamily: "OstrichSans Black", letterSpacing: "3px;"}}>{rawJSON[k].headline}</p>
						<p class="lead hero-text" style={{color: '#212529', fontFamily: "Quicksand"}}>{rawJSON[k].tagline}</p>
					</div>

					<div class="col-lg-7 my-auto">
						<p class="lead my-auto desc-text" style={{lineHeight: "40px", fontFamily: "Quicksand"}}>{rawJSON[k].body}</p>
					</div>
				</div>
			);

			this.setState({items: slides});
		});
	}

	render(){
		return (
			<section style={{backgroundColor: '#FFF'}}>
				<div className="container py-3">
					<div class="row">
						<div class="col-lg-12 text-center">
							<h1 class="display-4 my-3" style={{color: '#212529', fontFamily: 'OstrichSans Black', fontSize: '4em', letterSpacing: '5px'}}>My skills</h1>
						</div>
					</div>

					{this.state.items}
				</div>
			</section>
		);
	}
}
