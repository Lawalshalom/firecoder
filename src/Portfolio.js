import React from 'react'

export default function Portfolio() {
	return (
		<div className="container portfolio" id="portfolio">
			<h1>P<span>ortfoli</span>os</h1>
			<div className="text-right">
				<ul>
					<li><a href="#header">01</a></li>
					<li><a href="#portfolio" className="active">02</a></li>
					<li><a href="#contact">03</a></li>
				</ul>
			</div>
			<div className="container row" id="portCont">
				<div className="col-md-5 col-lg-5 col-sm-5" id="mount-img"></div>
				<div className="col-md-7 col-lg-7 col-sm-7" id="portfolio-text">
					<h3>Guliver</h3>
					<p>Spontaneously meet travellers and experience the city together</p>
					<p>This mobile application allows you to:</p>
					<ul>
						<li>easily find activities for your nearest location</li>
						<li>meet other travellers</li>
						<li>set up a social meeting</li>
					</ul>
					<p>Technical wrap-up</p>
					<ol>
						<li>Responsive Web and native ios and Android application</li>
						<li>Back end server written down in Ruby on Rails which handles API requests</li>
						<button className="btn btn-primary">More details</button>
					</ol>
					<h4>TECHNOLOGIES</h4>
					<div className="tech-btn">
						<button className="btn btn-primary">RUBY ON RAILS</button>
						<button className="btn btn-primary">REDIS</button>
					</div>
					<div className="tech-btn">
						<button className="btn btn-primary">ANGULAR</button>
						<button className="btn btn-primary">WORDPRESS</button>
					</div>
				</div>
			</div>
			<br/>
			<div className="clear-fix"></div>
			<hr/>
			<div className="container row" id="portContain">
				<div className="col-md-6 col-lg-6 col-sm-6" id="portfolio-text">
					<h3>Guliver</h3>
					<p>Spontaneously meet travellers and experience the city together</p>
					<p>This mobile application allows you to:</p>
					<ul>
						<li>easily find activities for your nearest location</li>
						<li>meet other travellers</li>
						<li>set up a social meeting</li>
					</ul>
					<p>Technical wrap-up</p>
					<ol>
						<li>Responsive Web and native ios and Android application</li>
						<li>Back end server written down in Ruby on Rails which handles API requests</li>
						<button className="btn btn-primary">More details</button>
					</ol>
					<h4>TECHNOLOGIES</h4>
					<div className="tech-btn">
						<button className="btn btn-primary">RUBY ON RAILS</button>
						<button className="btn btn-primary">REDIS</button>
					</div>
					<div className="tech-btn">
						<button className="btn btn-primary">ANGULAR</button>
						<button className="btn btn-primary">WORDPRESS</button>
					</div>
			</div>
			<div className="col-md-6 col-lg-6 col-sm-6" id="fruit-img"></div>
			</div>
		<div className="clear-fix"></div>
	</div>
	)
}
