import { useRouter } from 'next/router'
import QueryType from '../../../components/utils/query_type'
import ARTICLES_BY_TYPE_QUERY from '../../../apollo/queries/article-by-type'
import {getSize} from "../../../helpers/articles"
import Article from "../../../components/article"

const ArticleType = () => {
	const router = useRouter()

	return (
		<QueryType query={ARTICLES_BY_TYPE_QUERY} type={router.query.type}>
			{({ data: { articles } }) => (
				articles.map((article) =>
						<Article {...article} />
				)
			)}
		</QueryType>
	)
}

export default ArticleType