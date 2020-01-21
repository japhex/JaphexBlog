import React, {useRef} from 'react'
import Link from 'next/link'
import Article from './article'
import {getSize} from "../helpers/articles"

const Articles = ({ articles }) => {
	const myRef = useRef();
	return (
		articles.map(({id, title, published_at, content, size}) => (
			<Link href={`/article/[id]`} as={`/article/${id}`} key={id}>
				<Article title={title} publishedAt={published_at} content={content} fullPage={true} size={getSize(size)} ref={myRef} />
			</Link>
			)
		))
}

export default Articles