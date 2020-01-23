import React, { forwardRef } from 'react';
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import {ArticlePage, Header, SubTitle, Content, Type} from '../article_styled.js'

const Snapshot = forwardRef(({title, subTitle, published_at, content, size, type, rating, fullPage, onClick, href}, ref) =>  {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			<ArticlePage fullPage={fullPage} ref={ref} size={size}>
				<Header size={size}>
					{title}
					<SubTitle>
						{subTitle}
					</SubTitle>
					<small>
						<Moment format="Do MMM YYYY">{published_at}</Moment>
					</small>
				</Header>
				<Type type={type}>
					{type}
				</Type>
				<Content>
					<ReactMarkdown escapeHtml={false} source={content} />
					{rating && (
							<span>{rating} / 5</span>
					)}
				</Content>
			</ArticlePage>
		</a>
	)
})

export default Snapshot