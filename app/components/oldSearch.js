var React = require('react');
var Router = require('react-router');

var oldSearch = React.createClass({
	render: function(){

		return(

			<div className="main-container"> 
        <header className="header">
          <div className="inside">
            <div className="logo-area-inside">
              <a href="index.html" className="logo">Tyler Fallon</a>
              <h4 className="about-me-tyler">Full Stack Web Developer</h4>
            </div>
            <div className="triangle" />
            <nav className="main-nav">
              <a href="index.html" className="alt-logo">Tyler Fallon</a>
              <ul>
                <li className="selected"><a href="#/search">Portfolio</a></li>
                <li><a href="#/saved">Contact</a></li>
                <li><a href="https://github.com/tylerfallon">Github</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <section className="main-content cf">  


          <h1 className="portfolio-title">Po<span>rtfolio</span></h1>
          <div className="inside-portfolio">
            <ul className="portfolio-items">
              {/* demuxed */}


                   <li id="love-hate" className="portfolio-item multiple cf">
              
                <div className="text">
                  <h3>Questive</h3>
                  <ul className="skills">
                    <li>Backend Web Development</li>            
                  </ul>
                  <p>Description here</p>  
                  <center><a href="https://link.com/" className="action">Visit site</a></center>
                </div>
               
              </li>{/* portfolio-item */}


     <li id="love-hate" className="portfolio-item multiple cf">
              
                <div className="text">
                  <h3>Impulsion.io</h3>
                  <ul className="skills">
                    <li>Backend Web Development</li>            
                  </ul>
                  <p>Description here</p>  
                  <center><a href="https://link.com/" className="action">Visit site</a></center>
                </div>
                       <div class="additional-portfolio-image">

         <img src="assets/images/portfolio/timber-about.jpg" alt="Timber about page" />  
          <img src="assets/images/portfolio/timber-how-it-works.gif" alt="Timber how it works animation" /> 
          
                    <img src="assets/images/portfolio/timber-404.jpg" alt="Timber 404 page" /> 
              {/* IG */}
              
            
      
              <li id="mixture" className="portfolio-item multiple cf">
                
                <div className="text">
                <h3>Proconnect</h3> 
                  <ul className="skills">
                    <li>Web design</li>
                    <li>Frontend Web Development</li>
                  </ul>
                  <p>
                   <img src='./images/proconnect.png' height='200px' width='400px' />
                   <div id='description'>Writing here. 
                   More writing here. </div>
                  </p>
                  <center><a href="http://mixture.io/" className="action">View site</a></center>
                </div>
              <div class="additional-portfolio-image">

        <img src='./images/proconnect.png' height='200px' width='400px' />
                </div>
              </li>{/* portfolio-item */}


          </div>{/* inside-portfolio */}
        </li>{/* portfolio-items */}
        </ul>
      </div>
        </section>


        <footer className="footer">
          <div className="inside cf">
            <nav className="footer-nav cf">
              <ul>
                <li className="selected"><a href="index.html">Portfolio</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="mailto:tylermfallonh@gmail.com">Contact</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
});
	
module.exports = oldSearch;