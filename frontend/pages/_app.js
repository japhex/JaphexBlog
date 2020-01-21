import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../utils/apollo'
import Header from '../components/global/header'
import {Main, Html} from './global_styled'

const App = ({ Component, pageProps, apollo }) => {
	return (
		<ApolloProvider client={apollo}>
			<Html>
				<Head>
					<title>Japhex blog</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
					<link href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Courier+Prime&display=swap" rel="stylesheet" />
				</Head>
				<Main>
					<Header />
					<Component {...pageProps} />
				</Main>
			</Html>
		</ApolloProvider>
	)
}

export default withData(App)