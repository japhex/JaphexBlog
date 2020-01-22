import React from "react"
import LeftNav from "./left-nav"
import RightNav from "./right-nav"
import {HeaderStyled, HeaderTitle} from './header_styled'
import {useWindowScroll} from 'react-use';
import Link from "next/link"

const Header = () => {
	const {y} = useWindowScroll();
	const scrollLimit = y >= 100;

	return (
			<HeaderStyled lockHeader={scrollLimit}>
				<LeftNav lockHeader={scrollLimit} />
				<RightNav lockHeader={scrollLimit} />
				<HeaderTitle lockHeader={scrollLimit}>
					<Link href="/">
						{scrollLimit ? 'j' : 'jamblings'}
					</Link>
				</HeaderTitle>
			</HeaderStyled>
	)
}

export default Header