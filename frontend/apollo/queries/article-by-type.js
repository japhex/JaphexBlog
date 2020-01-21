import gql from "graphql-tag"

const ARTICLES_BY_TYPE_QUERY = gql`
  query ArticlesByType($type: String!) {
    articles(where: { type: $type }) {
      id
      title
      content
      type
      published_at
	    size
    }
  }
`

export default ARTICLES_BY_TYPE_QUERY