import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { ProjectType } from 'types';
import getAge from 'getAge';
import Copyright from './Copyright';
import ProjectTile from './ProjectTile';
import Keyword from './Keyword';
import HorizontalList from './HorizontalList';
import projects from '../projects';
import bulma from '../bulma.scss';
import boy from 'boy.jpg';
import flag from 'transflag.png';

class Company {
	constructor(name, url) {
		this.name = name;
		this.url = url;
	}
}

const novaly = new Company('Novaly Studios', 'https://twitter.com/novalystudios');
const roblox = new Company('Roblox Corporation', 'https://corp.roblox.com/');

const experiences = [
	{
		job: 'Level Designer',
		company: novaly,
		description: 'Working on our upcoming social racing game.',
		wasInHouse: false,
		startDate: new Date(2017, 5),
	},

	{
		job: 'Software Engineering Intern',
		company: roblox,
		description: 'Worked to remove bloat and set best-practices in-house with my knowledge of the Roblox platform.',
		wasInHouse: true,
		startDate: new Date(2019, 5),
		endDate: new Date(2019, 7),
	},

	{
		job: 'Programmer',
		company: novaly,
		description: <span>Created the Robbery feature for <a href='https://www.roblox.com/games/2563455047/Bandit-Simulator'>Bandit Simulator</a> and squashed bugs.</span>,
		wasInHouse: false,
		startDate: new Date(2019, 5),
		endDate: new Date(2019, 7),
	},

	{
		job: 'Level Design contractor',
		company: roblox,
		description: 'Worked for Roblox to create the Aquaman game for a Warner Brother\'s sponsorship.',
		wasInHouse: false,
		startDate: new Date(2018, 6),
		endDate: new Date(2019, 10),
	},

	{
		job: 'Accelerator Intern',
		company: roblox,
		description: '3 month sprint to create a game working in house at Roblox HQ.',
		wasInHouse: true,
		startDate: new Date(2018, 5),
		endDate: new Date(2018, 7),
	},
];

function formatDate(date) {
	return moment(date).format('MMM YYYY');
}

function getExperiences() {
	return experiences.map(exp => {
		const startDate = formatDate(exp.startDate);
		const endDate = exp.endDate ? formatDate(exp.endDate) : 'Present';
		const connector = exp.wasInHouse ? 'at' : 'for';

		return (
			<div className={bulma.columns}>
				<p className={bulma.column}>{startDate}&ndash;{endDate}</p>

				<div className={classNames(bulma.column, bulma['is-two-thirds'])}>
					<p>{exp.job} {connector} <a href={exp.company.url}>{exp.company.name}</a>.</p>

					<p className={bulma.subtitle}>{exp.description}</p>
				</div>
			</div>
		);
	});
}

export default class App extends React.Component {
	getFreelanceProjects() {
		const freelance = projects.filter(project => project.type === ProjectType.Game);

		return freelance.map(project =>
			<ProjectTile key={project.slug} project={project} />);
	}

	getCodeProjects() {
		const code = projects.filter(project => project.type === ProjectType.Code);

		// Need a new component to return. Should be just be a list of my code projects
		return code.map(project =>
			<ProjectTile key={project.slug} project={project} />);
	}

	render() {
		return (
			<div className={bulma.container}>
				<section className={classNames(bulma.section, bulma.columns)}>
					<div className={bulma.column}>
						<h1>About</h1>

						<p>I'm <Keyword>David Minnerly</Keyword>&mdash;a {getAge()} year old freelance programmer and 3D modeler that loves creating new experiences through artistic mediums. 💖</p>

						<HorizontalList>
							<a href="https://twitter.com/vocksel_" title="Follow on Twitter for updates">Twitter</a>
							<a href="https://github.com/vocksel" title="Check out my code on GitHub">GitHub</a>
							<a href="https://www.linkedin.com/in/david-minnerly-916809149/" title="Connect with me on LinkedIn">LinkedIn</a>
							<a href="mailto:voxeldavid@gmail.com" title="Shoot me an email">Email</a>
						</HorizontalList>
					</div>

					<div className={classNames(bulma.column, bulma['is-narrow'])}>
						<img className={bulma.image} src={boy} alt="" />
					</div>
				</section>

				<section className={bulma.section}>
					<h1>Experience</h1>

					{getExperiences()}
				</section>

				<section className={bulma.section}>
					<h1>Projects</h1>

					<div className={bulma.columns}>
						{this.getFreelanceProjects()}

						{this.getCodeProjects()}
					</div>
				</section>

				<footer className={bulma.section}>
					<HorizontalList isCentered>
						<Copyright />

						<a href="https://github.com/vocksel/davidminnerly.com">Source</a>

						<img src={flag} title={'I know the world is scary, but you\'re doing great <3'} alt='Trans Flag'/>
					</HorizontalList>
				</footer>
			</div>
		);
	}
}
