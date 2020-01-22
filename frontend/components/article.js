import React, { forwardRef } from 'react';
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import {ArticlePage, Header, Content} from './article_styled.js'
import {getSize} from "../helpers/articles"

const Article = forwardRef(({title, published_at, content, size, fullPage, onClick, href}, ref) =>  {
	content = !fullPage ? content.substring(0,150) : content

	return (
		<a href={href} onClick={onClick} ref={ref}>
			<ArticlePage fullPage={fullPage} ref={ref}>
				<Header>
					{title}
					<small>
						<Moment format="Do MMM YYYY">{published_at}</Moment>
					</small>
				</Header>
				<Content>
					<ReactMarkdown escapeHtml={false} source={content} />
				</Content>
			</ArticlePage>
		</a>
	)
})

export default Article