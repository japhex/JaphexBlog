import React, {useRef} from 'react'
import Link from 'next/link'
import Article from './article'

const Articles = ({ articles }) => {
	const myRef = useRef();
	return (
		articles.map((article) => (
			<Link href={`/article/[id]`} as={`/article/${article.id}`} key={article.id}>
				<Article {...article} ref={myRef} />
			</Link>
			)
		))
}

export default Articles