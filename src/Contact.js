import React from 'react'

export default function Contact() {
	return (
		<div id="contact">
			<h1>C<span>ontact </span>me!</h1>
			<h3>Got  question or proposal, or just want</h3>
			<h3> to say hello? Go ahead!</h3>
			<form action="POST" id="form">
				<div id="namemail">
					<div className="name">
						<label>Your name</label><br/>
						<input type="name" required />
					</div>
					<div className="email">
						<label>Email address</label><br/>
						<input type="email" required/>
					</div>
				</div>
				<div id="textarea">
					<label>Your message</label><br/>
					<textarea></textarea><br/>
				<div className="submit">
					<button type="submit" className="btn btn-primary">Shoot 
					<i class="fa fa-arrow-right" aria-hidden="true"></i>
					</button>
				</div>
			</div>
		</form>
			<div className=" text-right">
				<ul>
					<li><a href="#header" >01</a></li>
					<li><a href="#portfolio">02</a></li>
					<li><a href="#contact" className="active">03</a></li>
				</ul>
			</div>
		<div className="clear-fix"></div>
	</div>
	)
}
