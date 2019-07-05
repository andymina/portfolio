import React from 'react';
import firebase from './firebase';

export default class Projects extends React.Component {
	constructor(props){
		super(props);
		this.state = {items: []};
	}

	componentDidMount(){
		firebase.database().ref("projects").on("value", (data) => {
			let rawJSON = data.val();
			let keys = Object.keys(rawJSON);
			let slides = keys.map((k) =>
				<div className="row h-100 my-3" key={k.toString()}>
					<div className="col-lg-5 my-auto">
						<img className="d-block mx-auto" alt="" src={rawJSON[k].imgURL}/>
					</div>

					<div className="col-lg-7 my-auto">
						<p className="lead skill-text my-0 text-white" style={{fontFamily: 'OstrichSans Black', letterSpacing: "3px"}}>{rawJSON[k].title}</p>
						<p className="lead hero-text text-white" style={{fontFamily: "Quicksand"}}>Check it out <a href={rawJSON[k].link}>here</a>.</p>
						<br/>
						<p className="lead my-auto desc-text text-white" style={{fontFamily: "Quicksand"}}>{rawJSON[k].body}</p>
					</div>
				</div>
			);

			this.setState({items: slides});
		});
	}


	render(){
		return (
			<section style={{backgroundColor: '#212529'}}>
				<div className="container py-3">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h1 className="display-4 my-3" style={{color: '#FFF', fontFamily: 'OstrichSans Black', fontSize: '4em', letterSpacing: '5px'}}>Projects</h1>
						</div>
					</div>

					{this.state.items}
				</div>
			</section>
		);
	}
}
