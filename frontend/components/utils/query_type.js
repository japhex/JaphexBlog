import React from 'react'
import { useQuery } from '@apollo/react-hooks'

const QueryType = ({ children, query, type }) => {
	const { data, loading, error } = useQuery(query, {
		variables: { type: type }
	})

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {JSON.stringify(error)}</p>
	return children({ data })
}

export default QueryType