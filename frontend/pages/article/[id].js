import { useRouter } from 'next/router'
import Query from '../../components/utils/query'
import ARTICLE_QUERY from '../../apollo/queries/article'
import {getSize} from "../../helpers/articles"
import Article from "../../components/article"

const ArticleSingle = () => {
	const router = useRouter()

	return (
		<Query query={ARTICLE_QUERY} id={router.query.id}>
			{({ data: { article } }) => (
					<Article {...article} fullPage />
				)
			}
		</Query>
	)
}

export default ArticleSingle