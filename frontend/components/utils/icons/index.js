import {Github} from "./github"
import {Instagram} from "./instagram"
import {LinkedIn} from './linkedin'
import {Twitch} from "./twitch"

export const icons = {
	GithubIcon: Github,
	InstagramIcon: Instagram,
	LinkedInIcon: LinkedIn,
	TwitchIcon: Twitch
}

export default (id, props) => {
	return icons[id] ? icons[id](props) : icons._default()
}