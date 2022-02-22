import React from 'react';
import classes from './Footer.module.css';
const d = new Date();
let year = d.getFullYear();

function Footer() {
	return (
		<footer className={classes.footer}>
			<ul>
				<li>
					<a href='#'>Tesla &copy; {year} </a>
				</li>
				<li>
					<a href='#'>Privacy & Legal </a>
				</li>
				<li>
					<a href='#'>Contact</a>
				</li>
				<li>
					<a href='#'>Careers</a>
				</li>
				<li>
					<a href='#'>News</a>
				</li>
				<li>
					<a href='#'>Engage</a>
				</li>
				<li>
					<a href='#'>Locations</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
