var React = require('react');
var Router = require('react-router')
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

var Contact = React.createClass({
render: function(){

		return(
<div className="main-container"> 
	<section className="main-content cf">  
  	<div className='aboutMe'>
    	<div className='titleAbout'>About Me</div>
    		<div className='descriptionAbout'>For as long as I can remember, I have always loved to build. I found my passion for computers and development at the age of 12 and started building websites and forums using HTML and CSS. Over the next few years my knowledge of web development grew larger, and I quickly picked up other useful skills such as graphic design, music production and video production.
A year after graduating from the University of Maryland, I enrolled in Rutgers Coding Bootcamp and continued learning all I could about computer science. To me, one of the biggest allures of this field is the unique ability to work with others to bring complex ideas to life. As a developer, I look forward to a career of rewarding experiences, tough challenges, and lifelong learning.</div>
  		</div>  
       <h1 className="portfolio-title">C<span>ontact</span></h1>
    </section>
<div className='theGrid'>
 	<Grid>
  <Row>
  <Col xs={3} md={2}>
    <Thumbnail class='conIcon' href="https://github.com/tylerfallon" alt="100x100" width='100px' height='100px' src="./images/icons/github.png" />
  </Col>
  <Col xs={3} md={2}>
    <Thumbnail class='conIcon' href="mailto:tylermfallon@gmail.com" alt="100x100" width='100px' height='100px' src="./images/icons/gmail.png" />
  </Col>
  <Col xs={3} md={2}>
    <Thumbnail class='conIcon' href="https://www.linkedin.com/in/tylerfallon" alt="100x100" width='100px' height='100px' src="./images/icons/linkedin.png" />
  </Col>
  </Row>
	</Grid>
</div>
<br/><br/><br/>
</div>
    );
  }
}); 


module.exports = Contact;
