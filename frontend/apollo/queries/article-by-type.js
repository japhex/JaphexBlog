import gql from "graphql-tag"

const ARTICLES_BY_TYPE_QUERY = gql`
  query ArticlesByType($type: String!) {
    articles(where: { type: $type }) {
      id
      title
      subTitle
      content
      type
      published_at
	    size
      rating
    }
  }
`

export default ARTICLES_BY_TYPE_QUERY