import React from 'react';
import firebase from './firebase';

export default class Desc extends React.Component {
	constructor(props){
		super(props);
		this.state = {items: []};
	}

	componentDidMount(){
		firebase.database().ref("what-i-do").on("value", (data) => {
			let rawJSON = data.val();
			let keys = Object.keys(rawJSON);
			let slides = keys.map((k) =>
				<div key={k.toString()}>
					<h1 className="my-3 text-white text-center" style={{fontFamily: 'OstrichSans', letterSpacing: "3px"}}>{rawJSON[k].headline}</h1>
					<hr className="my-3" style={{borderWidth: '2px', width: '50%', borderColor: 'white'}}/>
					<p className="lead my-4 text-white text-center" style={{fontFamily: 'Quicksand'}}>{rawJSON[k].body}</p>
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
						<div className="col-lg-12">
							<h1 className="display-4 text-center text-white" style={{fontFamily: 'OstrichSans Black', fontSize: '4em', letterSpacing: '5px'}}>What I Do</h1>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 text-center">
							<span className="fa-stack fa-4x">
								<i className="far fa-circle fa-stack-2x" style={{color: 'white'}}></i>
								<i className="fas fa-terminal fa-stack-1x fa-inverse" style={{fontSize: '0.75em', color: 'white'}}></i>
							</span>

							{this.state.items[0]}
						</div>

						<div className="col-lg-4 text-center">
							<span class="fa-stack fa-4x">
								<i class="far fa-circle fa-stack-2x" style={{color: 'white'}}></i>
								<i class="fas fa-paint-brush fa-stack-1x fa-inverse" style={{fontSize: '0.75em', color: 'white'}}></i>
							</span>


							{this.state.items[1]}
						</div>

						<div className="col-lg-4 text-center">
							<span class="fa-stack fa-4x">
								<i class="far fa-circle fa-stack-2x" style={{color: 'white'}}></i>
								<i class="fas fa-chalkboard-teacher fa-stack-1x fa-inverse" style={{fontSize: '0.75em', color: 'white'}}></i>
							</span>

							{this.state.items[2]}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
