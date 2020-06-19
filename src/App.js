import React, { Fragment } from 'react';
import "./App.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
class App extends React.Component{
	constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass() {
		const element = document.body;
		element.classList.toggle("darkTheme");
      };

    render() {
		return (
			<Fragment id="fragment">
				<div class="custom-control custom-switch">
					<input type="checkbox" 
					  className="custom-control-input" 
					  id="customSwitches"  
					  onClick={this.toggleClass}/>
  					<label className="custom-control-label" for="customSwitches">Day/Night Mode</label>
				</div>
				<About/>
				<Portfolio/>
				<Contact/>
			</Fragment>
		)
	}
}
export default App;
