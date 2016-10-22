var React = require('react');
var Router = require('react-router');

var Search = React.createClass({
	render: function(){

		return(

			<div className="main-container"> 
        <header className="header">
          <div className="inside">
            <div className="logo-area-inside">
              <a href="index.html" className="logo">Tyler Fallon</a>
              <h4 className="about-me-tyler">Full Stack Web Developer</h4>
               <img src='./images/tylerfallonheadshot.png' width='50%'/>
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
  <div className='aboutMe'>
    <div className='titleAbout'>About Me</div>
    <div className='descriptionAbout'>Hello, my name is Tyler Fallon. For my entire life, I have had the mentality of a "builder". At an early age, I became acquainted with HTML and CSS, along with Adobe Creative Suites, which allowed me to create and manage a relatively large-scale forum. I have a passion for surfing and electronic music, which I have been producing as a hobby for the past 6 years.</div>
  </div>  
       <h1 className="portfolio-title">P<span>ortfolio</span></h1>
        <div className="inside-portfolio">
          <ul className="portfolio-items">
            <li id="questive" className="portfolio-item multiple cf">
              <div className="text">
                <h3>Questive</h3>
                <ul className="skills">
                  <li>ReactJS</li>
                  <li> PassportJS Authentication</li>
                  <li> jQuery</li>
                  <li> MongoDB</li>
                  <li> ExpressJS</li>
                  <li> NodeJS</li>
                </ul>
                <p>Test Description</p>   
                <p>Stuff I did</p>
                <a href="https://questiveapp.herokuapp.com/" className="action">Visit site</a>
              </div>
              <div className="additional-portfolio-image">
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <img src='./images/questive1.png' height='200px' width='400px' />
        <img src='./images/questive2.png' height='200px' width='400px' />
              </div></li>

            <li id="impulsion" className="portfolio-item multiple cf">
              <div className="text">
                <h3>Impulsion</h3>
                <ul className="skills">
                  <li>NodeJS</li>
                  <li> MySQL/Sequelize</li>
                  <li> Handlebars</li>
                  <li> jQuery</li>
                </ul>
                <p>Description here</p>
                <p>More here.</p>
                <a href="http://impulsion.herokuapp.com/" className="action">Visit site</a>
              </div>
              <div className="additional-portfolio-image">
                 <br/><br/><br/><br/><br/><br/><br/>
  <img src='./images/impulsion.png' height='200px' width='400px' />
    <img src='./images/impulsion2.png' height='200px' width='400px' />
              </div></li>
            

            <li id="proconnect" className="portfolio-item multiple cf">
              <div className="text">
                <h3>ProConnect</h3>
                <ul className="skills">
                  <li>jQuery/Ajax</li>
                  <li> Bootstrap</li>
                  <li> Google Maps API</li>
                  <li> Soundcloud API</li>
                </ul>
                <p>More here</p> 
                <p>Description</p>
                    
                <a href="http://proconnect1.herokuapp.com/" className="action">Visit site</a>
              </div>
              <div className="additional-portfolio-image">
              <br/><br/><br/><br/><br/><br/><br/>
  <img src='./images/proconnect1.png' height='200px' width='400px' />
    <img src='./images/proconnect2.png' height='200px' width='400px' />
              </div>
            </li>


            {/*<li className="portfolio-item multiple cf">
              <div className="text">
                <h3>New Item</h3>
                <ul className="skills">
                  <li>Web design</li>
                  <li>HTML &amp; CSS</li>
                </ul>
                <p>
                  Things I did
                </p><p>
                 More things I did
                </p>
              </div>
              <div className="additional-portfolio-image">
                 <br/><br/><br/><br/><br/><br/><br/>
  <img src='./images/proconnect.png' height='200px' width='400px' />
    <img src='./images/proconnect.png' height='200px' width='400px' />
              </div>
            </li> */}



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
	
module.exports = Search;