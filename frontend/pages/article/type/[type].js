import { useRouter } from 'next/router'
import QueryType from '../../../components/utils/query_type'
import ARTICLES_BY_TYPE_QUERY from '../../../apollo/queries/article-by-type'
import {getSize} from "../../../helpers/articles"
import Article from "../../../components/article"
import Link from "next/link"

const ArticleType = () => {
	const router = useRouter()

	return (
		<QueryType query={ARTICLES_BY_TYPE_QUERY} type={router.query.type}>
			{({ data: { articles } }) => (
				articles.map((article) =>
						<Link href={`/article/[id]`} as={`/article/${article.id}`} key={article.id}>
							<Article {...article} />
						</Link>
				)
			)}
		</QueryType>
	)
}

export default ArticleType