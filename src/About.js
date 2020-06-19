import React from 'react'

export default function About() {
	return (
		<div id="about">
			<div className= "container" id="page1">
				<header id="header" class="d-flex align-items-center">
    				<div class="container d-flex align-items-center">
             			<h1 class="text-light"><a href="index.html"><span><em>firecoder</em></span></a></h1>
       				</div>
					<div id="blue-line"></div>
					<div id="line-bottom"></div>
     			 	<nav class="nav-menu d-md-block d-lg-block text-center">
       				 	<ul>
          					<li class="active"><a href="#header">About Me</a></li>
          					<li><a href="#portfolio">Portfolio</a></li>
          					<li><a href="#contact">Contact</a></li>
         				 	<li class="get-started"><a href="#about">Get Started</a><i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i></li>
        				</ul>
      				</nav>
			  	</header>
			  <section id = "about-section">
			  	<div className= "container row" id="about-me">
					<div className="fluid col-xs-6 col-md-6 col-sm-6 text-left font-weight-bold" id="about-text">
						<h4>Hello, I am</h4>
						<h1>Lawal Daniel</h1>
						<h4>A software developer</h4>
						<h6>I build websites, develop mobile and web applications.</h6>
						<h5>Find me on</h5>
						<a href="https://twitter.com"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
						<a href="https://github.com"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
						<a href="https://facebook.com"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
						<a href="https://linkedin.com"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a> 
						<br/>
						<div className="about-buttons">
							<a href="contact" className="btn btn-primary hire">Hire Me</a>
							<a href="#portfolio" className="btn btn-primary portfolio">Portfolio</a>
						</div>			
					</div>
					<div className= "fluid col-md-6 col-sm-6 pic1">
					</div>
				</div>
			  </section>
		</div>
		<div className=" text-right">
			<ul>
				<li><a href="#header" className="active">01</a></li>
				<li><a href="#portfolio">02</a></li>
				<li><a href="#contact">03</a></li>
			</ul>
		</div>
	</div>
	)
}
