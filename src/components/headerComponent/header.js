import React from 'react';
import {
  Link
} from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
       <div className="logo">
        <img src="/images/logo.png" alt="logo" />
       </div>
       <nav>
       	<ul>
       		<li>
       			<Link to="/">Home</Link>
       		</li>
       		<li>
       			<Link to="/Portfolio">Portfolio</Link>
       		</li>
       		<li>
       			<Link to="/Contact">Contact</Link>
       		</li>
       	</ul>
       </nav>
    </header>
  );
}

export default Header;
