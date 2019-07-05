import React from 'react';

const Hero = () => {
	return (
		<section className="p-3" style={{height: '100vh'}}>
			<div className="container">
				<div className="row" id="backgroundContainer"></div>

				<div className="row">
					<div className="col-lg-12 text-center">
						<h1 className="display-2 mb-0" style={{fontFamily: 'OstrichSans Black', color: '#212529'}}>Andy Mina</h1>
						<p className="lead mx-auto" style={{fontFamily: 'Quicksand', letterSpacing: '5px', color:  '#212529'}}>Programmer. Musician. Designer.</p>
					</div>
				</div>

				<div className="row mt-2">
					<div className="col-lg-3 text-center">
						<a className="mx-4 c-nav-link btn btn-dark text-center pl-3" href="assets/Andy Mina Resume.pdf" download>Resume</a>
					</div>

					<div className="col-lg-3 text-center">
						<a className="mx-4 c-nav-link btn btn-dark text-center pl-3" href="https://github.com/andymina">Github</a>
					</div>

					<div className="col-lg-3 text-center">
						<a className="mx-4 c-nav-link btn btn-dark text-center pl-3" href="https://linkedin.com/in/aspiringandymina">LinkedIn</a>
					</div>

					<div className="col-lg-3 text-center">
						<a className="mx-4 c-nav-link btn btn-dark text-center pl-3" href="#projects">Projects</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
