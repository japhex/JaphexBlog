import gql from "graphql-tag"

const ARTICLES_QUERY = gql`
    query Articles {
        articles {
            id
            title
            type
	        	size
          	content
	        	published_at
        }
    }
`

export default ARTICLES_QUERY