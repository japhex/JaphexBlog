import gql from "graphql-tag"

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      subTitle
      type
      size
      content
      published_at
      rating
    }
  }
`

export default ARTICLES_QUERY