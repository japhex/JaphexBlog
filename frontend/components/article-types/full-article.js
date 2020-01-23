import React, { forwardRef } from 'react';
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import {ArticlePage, Header, Content, Type} from '../article_styled.js'

const FullArticle = forwardRef(({title, subTitle, published_at, content, size, type, rating, fullPage, onClick, href}, ref) =>  {
	content = (!fullPage && content) ? content.substring(0,150) : content

	return (
		<a href={href} onClick={onClick} ref={ref}>
			<ArticlePage fullPage={fullPage} ref={ref}>
				<Header>
					{title}
					<small>
						<Moment format="Do MMM YYYY">{published_at}</Moment>
					</small>
				</Header>
				<Type type={type}>
					{type}
				</Type>
				<Content>
					<ReactMarkdown escapeHtml={false} source={content} />
					{rating &&
					rating
					}
				</Content>
			</ArticlePage>
		</a>
	)
})

export default FullArticle