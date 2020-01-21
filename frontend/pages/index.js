import React from 'react'
import Articles from '../components/articles'
import Query from '../components/utils/query'
import ARTICLES_QUERY from '../apollo/queries/articles'

const Home = () => (
	<>
		<Query query={ARTICLES_QUERY}>
			{({ data: { articles } }) => {
				return <Articles articles={articles} />;
			}}
		</Query>
	</>
)

export default Home