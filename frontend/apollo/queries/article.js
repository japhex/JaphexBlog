import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($id: ID!) {
    article(id: $id) {
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
`;

export default ARTICLE_QUERY;