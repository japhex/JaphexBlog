import React from "react"
import {RightNavStyled, SocialIcons} from './header_styled'
import {Icon} from "../utils/icons/icon"

const RightNav = () => (
	<RightNavStyled>
		<SocialIcons>
			<a href="https://www.twitch.tv/bloodmagej" target="_blank">
				<Icon id="TwitchIcon" iconWidth="5rem" iconHeight="5rem" />
			</a>
			<a href="https://github.com/japhex" target="_blank">
				<Icon id="GithubIcon" />
			</a>
			<a href="https://www.instagram.com/japhex/" target="_blank">
				<Icon id="InstagramIcon" />
			</a>
			<a href="http://linkedin.com/in/jamie-lawrence-51867132" target="_blank">
				<Icon id="LinkedInIcon" />
			</a>
		</SocialIcons>
	</RightNavStyled>
)

export default RightNav