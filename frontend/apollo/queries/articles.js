import gql from "graphql-tag"

const ARTICLES_QUERY = gql`
    query Articles {
        articles {
            id
            title
            type
	        	size
        }
    }
`

export default ARTICLES_QUERY