import {
	book1Day,
	book1Night,
	book2Day,
	book2Night,
	cafe1Day,
	cafe1Night,
	cafe1RainyDay,
	cafe1RainyNight,
	cafe2Day,
	cafe2Night,
	cafe2RainyDay,
	cafe2RainyNight,
	chill1Day,
	chill1Night,
	chill1RainyDay,
	chill1RainyNight,
	chill2Day,
	chill2Night,
	chill2RainyDay,
	chill2RainyNight,
	desk1,
	desk2,
	desk3,
	northern1,
	northern2,
	forest1,
	forest2,
	ocean1,
	ocean2,
	spring1Day,
	spring1Night,
	spring2Day,
	spring2Night,
	summer1,
	summer2,
	van1,
	van2,
	tutorial1,
	tutorial2,
	tutorial3,
	tutorial4
} from '../assets/videos'

export const BACKGROUND_LINKS_LIST = [
	{
		set: 'chill',
		scene: 'chill1',
		day: true,
		rainy: false,
		video: chill1Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20Day%20112521%20%281%29.mp4'
	},
	{
		set: 'chill',
		scene: 'chill1',
		day: false,
		rainy: false,
		video: chill1Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20STARRY%20NIGHT%20-.mp4'
	},
	{
		set: 'chill',
		scene: 'chill1',
		day: true,
		rainy: true,
		video: chill1RainyDay,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20DAY.mp4'
	},
	{
		set: 'chill',
		scene: 'chill1',
		day: false,
		rainy: true,
		video: chill1RainyNight,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/BDR%20RAINY%20NIGHT.mp4'
	},
	{
		set: 'chill',
		scene: 'chill2',
		day: true,
		rainy: false,
		video: chill2Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20Day%20112521.mp4'
	},
	{
		set: 'chill',
		scene: 'chill2',
		day: false,
		rainy: false,
		video: chill2Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20STARRY%20NIGHT.mp4'
	},
	{
		set: 'chill',
		scene: 'chill2',
		day: true,
		rainy: true,
		video: chill2RainyDay,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20RAINY%20DAY.mp4'
	},
	{
		set: 'chill',
		scene: 'chill2',
		day: false,
		rainy: true,
		video: chill2RainyNight,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/chill-vibes/LVR%20RAINY%20NIGHT.mp4'
	},
	{
		set: 'spring',
		scene: 'spring1',
		day: true,
		rainy: false,
		video: spring1Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/kyoto/Kyoto+Street+-+Day.mp4'
	},
	{
		set: 'spring',
		scene: 'spring1',
		day: false,
		rainy: false,
		video: spring1Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/kyoto/Kyoto+Street+-+Night.mp4'
	},
	{
		set: 'spring',
		scene: 'spring2',
		day: true,
		rainy: false,
		video: spring2Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/kyoto/Kyoto+Park+-+Day.mp4'
	},
	{
		set: 'spring',
		scene: 'spring2',
		day: false,
		rainy: false,
		video: spring2Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/kyoto/Kyoto+Park+-+Night.mp4'
	},
	{
		set: 'northern',
		scene: 'northern1',
		day: true,
		rainy: false,
		video: northern1,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cottage/Cottage+Int+Final.mp4'
	},
	{
		set: 'northern',
		scene: 'northern2',
		day: true,
		rainy: false,
		video: northern2,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cottage/Cottage+Ext+Final.mp4'
	},
	{
		set: 'book',
		scene: 'book1',
		day: true,
		rainy: false,
		video: book1Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Exterior+-+Day.mp4'
	},
	{
		set: 'book',
		scene: 'book1',
		day: false,
		rainy: false,
		video: book1Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Exterior+-+Night.mp4'
	},
	{
		set: 'book',
		scene: 'book2',
		day: true,
		rainy: false,
		video: book2Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Interior+-+Sunny+Day.mp4'
	},
	{
		set: 'book',
		scene: 'book2',
		day: false,
		rainy: false,
		video: book2Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Interior+-+Night.mp4'
	},
	{
		set: 'desk',
		scene: 'desk1',
		day: true,
		rainy: false,
		video: desk1,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/study/city%20scene.mp4'
	},
	{
		set: 'desk',
		scene: 'desk2',
		day: true,
		rainy: false,
		video: desk2,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/study/beach%20scene.mp4'
	},
	{
		set: 'desk',
		scene: 'desk3',
		day: true,
		rainy: false,
		video: desk3,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/study/snow%20scene%20wo%20snow.mp4'
	},
	{
		set: 'forest',
		scene: 'forest1',
		day: true,
		rainy: false,
		video: forest1,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/inside.mp4'
	},
	{
		set: 'forest',
		scene: 'forest2',
		day: true,
		rainy: false,
		video: forest2,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/forest/outside.mp4'
	},
	{
		set: 'ocean',
		scene: 'ocean1',
		day: true,
		rainy: false,
		video: ocean1,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/ocean/ocean-tales.mp4'
	},
	{
		set: 'ocean',
		scene: 'ocean2',
		day: true,
		rainy: false,
		video: ocean2,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/ocean/ocean-tales-out.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe1',
		day: true,
		rainy: false,
		video: cafe1Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe1',
		day: false,
		rainy: false,
		video: cafe1Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside-night.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe1',
		day: true,
		rainy: true,
		video: cafe1RainyDay,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside-rain.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe1',
		day: false,
		rainy: true,
		video: cafe1RainyNight,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/inside-night-rain.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe2',
		day: true,
		rainy: false,
		video: cafe2Day,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe2',
		day: false,
		rainy: false,
		video: cafe2Night,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside-night.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe2',
		day: true,
		rainy: true,
		video: cafe2RainyDay,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside-rain.mp4'
	},
	{
		set: 'cafe',
		scene: 'cafe2',
		day: false,
		rainy: true,
		video: cafe2RainyNight,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/cafe/outside-night-rain.mp4'
	},
	{
		set: 'van',
		scene: 'van1',
		day: true,
		rainy: false,
		video: van1,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/van/van.mp4'
	},
	{
		set: 'van',
		scene: 'van2',
		day: true,
		rainy: false,
		video: van2,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/van/van-out.mp4'
	},
	{
		set: 'summer',
		scene: 'summer1',
		day: true,
		rainy: false,
		video: summer1,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer.mp4'
	},
	{
		set: 'summer',
		scene: 'summer2',
		day: true,
		rainy: false,
		video: summer2,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/summer/summer-out.mp4'
	}
]

export const TUTORIAL_VIDEOS_LINKS = [
	{
		name: 'tutorial-1',
		video: tutorial1,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/hiw-playlist.mp4',
		title1: 'The Perfect Playlist',
		title2: 'With One Click',
		desc1:
			'Hit play and get into the zone instantly. No ads. No distracting lyrics.',
		desc2: '3 Stations to suit your mood: chill, jazzy or sleepy.'
	},
	{
		name: 'tutorial-2',
		video: tutorial2,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/hiw-environment.mp4',
		title1: 'Craft Your Focus Environment',
		desc1:
			'Would you rather get it done in the cafe, or escape to the beach? Lofi.co gives you both with interactive artworks.',
		desc2:
			'Basic users can access 2 artworks, while premium users have exclusive access to a growing library of 13+ illustrations.'
	},
	{
		name: 'tutorial-3',
		video: tutorial3,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/hiw-sounds.mp4',
		title1: 'Cut Out Distractions',
		title2: 'With Peaceful Sounds',
		desc1:
			"Drown out even the noisiest neighbour with soothing background sounds. Each artwork comes with adjustable sounds like rain, waves or birds. Some sounds change the scene's visuals.",
		desc2:
			'Basic users get 3 sound effects. Premium users can mix and match 12+ sounds.'
	},
	{
		name: 'tutorial-4',
		video: tutorial4,
		link: 'https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tutorial/hiw-tools.mp4',
		title1: 'The Focus Zone (Premium)',
		desc1:
			'Deadline coming up? The Focus Zone lets you stay on track by gathering the best focus tools in one place - away from your distracting smartphone.',
		desc2: `- Pomodoro timer: get more done in less time (without burning out)
- Notepad: never let a thought disappear
- Time logger: track your progress
- To-do list: always know what to do next`
	}
]