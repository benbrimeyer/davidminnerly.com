import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import bulma from '../bulma.scss';
import style from './ProjectTile.scss';

export default class ProjectTile extends React.Component {
	static propTypes = {
		project: PropTypes.shape({
			slug: PropTypes.string,
			title: PropTypes.string,
			shortDescription: PropTypes.string,
			thumbnail: PropTypes.string,
			description: PropTypes.element,
		})
	};

	getMedia(project) {
		if (project.video) {
			return (
				<video className={style.video} loop muted controls={false} autoplay='autoplay'>
					<source src={project.video} type='video/webm' />
				</video>
			);
		} else {
			return (
				<img className={style.image} src={project.thumbnail} />
			);
		}
	}

	render() {
		const { project } = this.props;

		return (
			<div className={classNames(bulma.column, bulma['is-one-third'])}>
				<Link to={`/projects/${project.slug}/`} className={style.link}>
					<div className={style.container}>
						<div className={style.border}></div>

						<div className={style.display}>
							{this.getMedia(project)}

							<div className={style.caption}>
								<h2 className={style.title}>{project.title}</h2>
							</div>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}
