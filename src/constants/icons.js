import {
	cityIcon,
	cityRainIcon,
	fireplaceIcon,
	campfireIcon,
	forestIcon,
	forestRainIcon,
	wavesIcon,
	fanIcon,
	stormIcon,
	riverIcon,
	birdIcon,
	peopleTalkingIcon,
	windIcon,
	oceanIcon,
	snowIcon,
	keyboardIcon,
	startSessionIcon,
	tomatoIcon,
	notesIcon,
	historyIcon
} from '../assets/icons'

export const NOISE_ICONS = [
	{ label: 'City Traffic', icon: cityIcon },
	{ label: 'City Rain', icon: cityRainIcon },
	{ label: 'Keyboard', icon: keyboardIcon },
	{ label: 'Fireplace', icon: fireplaceIcon },
	{ label: 'Campfire', icon: campfireIcon },
	{ label: 'Forest Sounds', icon: forestIcon },
	{ label: 'Forest Rain', icon: forestRainIcon },
	{ label: 'Waves', icon: wavesIcon },
	{ label: 'Fan', icon: fanIcon },
	{ label: 'Summer Storm', icon: stormIcon },
	{ label: 'River', icon: riverIcon },
	{ label: 'Bird Chirping', icon: birdIcon },
	{ label: 'People Talking', icon: peopleTalkingIcon },
	{ label: 'Wind', icon: windIcon },
	{ label: 'Ocean Sound', icon: oceanIcon },
	{ label: 'Blizzard', icon: snowIcon }
]

export const FOCUS_ICONS = [
	{ label: 'Start Session', icon: startSessionIcon, modalType: 'session' },
	{ label: 'Timer and Tasks', icon: tomatoIcon, modalType: 'tasks' },
	{ label: 'Notes', icon: notesIcon, modalType: 'notes' },
	{ label: 'History', icon: historyIcon, modalType: 'history' }
]
