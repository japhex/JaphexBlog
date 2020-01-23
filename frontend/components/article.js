import Snapshot from './article-types/snapshot'
import FullArticle from "./article-types/full-article"

const Article = (article) =>  (
	<>
		{article.size === 'snapshot' ?
			<Snapshot {...article} />
			:
			<FullArticle {...article} />
		}
	{/*	some sort of horizontal rule or border */}
	</>
)

export default Article