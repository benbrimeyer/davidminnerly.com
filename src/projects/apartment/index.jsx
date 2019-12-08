import React from 'react';
import { ProjectType } from 'types';
import thumbnail from './images/living-room.jpg';
import bedroom from './images/bedroom.jpg';
import outside from './images/outside.jpg';
import video from './rhinebeck.mp4';

export default {
	title: 'Rhinebeck',
	subtitle: 'An intimate, high-end apartment based in Rhinebeck, NY',
	slug: 'apartment',
	releaseDate: new Date(2016, 0),
	type: ProjectType.Game,
	thumbnail: thumbnail,
	video: video,
	url: 'https://www.roblox.com/games/343113123/Rhinebeck',
	description: (
		<div>
			<p>My projects prior to Rhinebeck have only consisted of light 3D modeling, so I wanted to challenge myself and make the apartment something special, and to do this I spent a little over 4 months creating 50+ models to furnish the living space I created. Some of the models are large and easy to spot, others you might not notice at all. Even if some models are not looked at closely enough to examine the details, or if they never get seen at all, they still contribute to the overall &ldquo;lived in&rdquo; feeling I wanted to convey.</p>

			<img src={bedroom} alt=""/>

			<p>I love games where detail is packed into every nook and cranny. Where there's so much to see that you can't possibly see everything in a single playthrough. Books filled with extensive lore, an assortment of unique items and props as far as the eye can see, and numerous storylines that you may never uncover. I love that feeling of <em>knowing</em> that I'm surrounded by all these intricate details, even if I never notice them. While the apartment is not at that level of detail, the desire to create something packed with intricacy and sentimental value was a driving force as I created this living space.</p>

			<img src={outside} alt=""/>
		</div>
	)
};
