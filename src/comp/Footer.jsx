import React from 'react';

const Footer = () => {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h1 className="display-4 my-3" style={{color: '#212529', fontFamily: 'OstrichSans Black', fontSize: '4em', letterSpacing: '5px'}}>Contact Me</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12 text-center">
						<p style={{fontFamily: 'Quicksand'}}><i>Email:</i> andy.mina@macaulay.cuny.edu</p>
						<p style={{fontFamily: 'Quicksand'}}><i>Cell:</i> 718 820 2348</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Footer;
