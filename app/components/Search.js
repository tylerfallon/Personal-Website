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
                <p>Questive is a web application that allows users to create, share, and join unique scavenger hunts that can be played in the real world.</p>   
                <p>I worked extensively on the front end, using React to create a simple, sleek design that is responsive on larger screens and mobile devices.</p>
                <p>The MERN Stack (MongoDB, ExpressJS, ReactJS, and NodeJS) and PassportJS authentication were used on the back end to ensure user information is stored in a safe and effective manner.</p>
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
                  <li>NodeJS with Express Templating</li>
                  <li> MySQL/Sequelize</li>
                  <li> Handlebars</li>
                  <li> jQuery</li>
                  <li> Materialize</li>
                  <li> Cheerio/Web Scraping</li>
                  <li> Firebase</li>
                </ul>
                <p>Impulsion lets users work with one another to break unwanted habits.</p>
                <p>Users can log the number of days they have been free of their habit of choice, and earn achievements for doing so.</p>
                <p>I developed a chat room using jQuery and Firebase to allow users to communicate with one another, embedded in the sidebar of the home page once a user logs in.</p>
                <p>User "streaks" and achievements are stored a MySQL database, managed through Sequelize.</p>
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
                  <li> Firebase</li>
                </ul>
                <p>ProConnect allows music producers to easily find other music producers to collaborate with in their area.</p> 
                <p>The app uses the Soundcloud API to fetch each user's soundcloud page and embed their recent productions on our page.</p>
                <p>Users can search through the user database and find users in their city using a Firebase-powered search field.</p>
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