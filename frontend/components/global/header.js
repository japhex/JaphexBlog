import React from "react"
import LeftNav from "./left-nav"
import RightNav from "./right-nav"
import {HeaderStyled, HeaderTitle} from './header_styled'

const Header = () => (
		<HeaderStyled>
			<LeftNav />
			<RightNav />
			<HeaderTitle>
				jamblings
			</HeaderTitle>
		</HeaderStyled>
)

export default Header