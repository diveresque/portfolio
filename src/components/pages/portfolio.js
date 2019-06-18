import React from 'react';
import {
  Link
} from 'react-router-dom';

function Portfolio() {
  return (
  	// use class container fluid from Bootstrap? Research this
    <div className="portfolio">
      	<div className="intro">
      		<h1>Our Work</h1>     	
      	</div>
      	<div className="uline">
      		<img src="/images/underline.png" alt="uline"></img>
		</div> 
      	<div className="parallax bg1" >
      		<img src="/images/kitanda2.png" alt="kitanda" />
      	</div>
      	<div className="static pos">
      		<h1>Kitanda</h1>
      	</div>
      	<div className="parallax bg2" >
      		<img src="/images/1world.png" alt="1world" />
      	</div>
      	<div className="static">
      		<h1>1 World Services</h1>
      	</div>
      	<div className="outro">
      		<h1>If you like what you see,&nbsp;
      		<Link to="/Contact">contact</Link>
      		&nbsp;us!</h1>
      	</div>
    </div>
  );
}

export default Portfolio;
