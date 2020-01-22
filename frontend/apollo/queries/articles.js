import gql from "graphql-tag"

const ARTICLES_QUERY = gql`
    query Articles {
        articles {
            id
            title
            type
	        	size
	        	published_at
	        	content
        }
    }
`

export default ARTICLES_QUERY