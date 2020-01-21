import React from "react"
import Link from "next/link"
import {LeftNavStyled, BlogLink} from './header_styled'

const LeftNav = () => (
	<LeftNavStyled>
		<Link href="/">
			<BlogLink>Home</BlogLink>
		</Link>
		<Link href="/article/type/[type]" as={`/article/type/technology`}>
			<BlogLink>Technology</BlogLink>
		</Link>
		<Link href="/article/type/[type]" as={`/article/type/music`}>
			<BlogLink>Music</BlogLink>
		</Link>
		<Link href="/article/type/[type]" as={`/article/type/coding`}>
			<BlogLink>Coding</BlogLink>
		</Link>
	</LeftNavStyled>
)

export default LeftNav