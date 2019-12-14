import React from 'react';
import { Link } from 'react-router-dom';
import bulma from 'bulma.scss';

export default function NoMatch() {
	return (
		<section className={bulma.section}>
			<div className={bulma.container}>
				<h1>404 not found</h1>

				<p>The page you were looking for does not exist. If this is a result of following a link on the site, please <a href='mailto:voxeldavid@gmail.com'>let me know</a>. Otherwise, you can start back at the  <Link to='/'>homepage</Link>. <br /> </p>
			</div>
		</section>
	);
}