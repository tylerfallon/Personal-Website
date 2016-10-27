var React = require('react');
var Router = require('react-router')
var Main = React.createClass({

	render: function(){
		return(
			<div className="main-container">
				<div className="container">
				<header className="header">
          <div className="inside">
            <div className="logo-area-inside">
              <a href="#/portfolio" className="logo">Tyler Fallon</a>
              <h4 className="about-me-tyler">Full Stack Web Developer</h4>
               <img src='./images/tylerfallonheadshot.png' width='50%'/>
            </div>
            <div className="triangle" />
            <nav className="main-nav">
              <a href="index.html" className="alt-logo">Tyler Fallon</a>
              <ul>
                <li><a href="#/portfolio">Portfolio</a></li>
                <li><a href="#/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>    
				{this.props.children}
        <footer className="footer">
          <div className="inside cf">
            <nav className="footer-nav cf">
              <ul>
                <li><a href="#/portfolio">Portfolio</a></li>
                <li><a href="#/contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </footer>
				</div>
			</div>
		)
	}
});

module.exports = Main;