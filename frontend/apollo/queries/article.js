import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
      id
      title
      content
      type
      published_at
      size
    }
  }
`;

export default ARTICLE_QUERY;