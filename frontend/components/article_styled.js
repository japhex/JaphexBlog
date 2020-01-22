import styled from "styled-components"

export const ArticlePage = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  width:100%;
  cursor:${({fullPage}) => fullPage ? 'unset' : 'pointer'};
`

export const Header = styled.h1`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-weight:100;
	font-size:46px;
	background: #eee;
	
	small {
		font-size:1.2rem;
		background:#fff;
	}
`

export const Content = styled.div`
	font-family: 'Courier Prime', monospace;
	font-size:1.5rem;
	line-height:2.5rem;
	
	p {
		max-width: 90rem;
		
		img {
			max-width: 90rem;
		}
		
		img[alt="cover image"] {
			max-width:none;
			margin-left: calc(50% - 50vw);
	    margin-right: calc(50% - 50vw);
	    width: 100vw;
	    height: 250px;
	    object-fit: cover;
	    object-position: center;
		}
	}
`