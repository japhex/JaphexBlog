import styled from "styled-components"

export const ArticlePage = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  width:100%;
  cursor:pointer;
`

export const Header = styled.h1`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-weight:100;
	font-size:46px;
	
	small {
		font-size:1.2rem;
	}
`

export const Content = styled.div`
	font-family: 'Courier Prime', monospace;
	max-width: 90rem;
	font-size:1.5rem;
	line-height:2.5rem;
`