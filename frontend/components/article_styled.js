import styled from "styled-components"

export const ArticlePage = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  width:${({size}) => size === 'snapshot' ? '300px' : '100%'};
  height:${({size}) => size === 'snapshot' ? '300px' : 'auto'};
  background:${({size}) => size === 'snapshot' ? 'hsl(30,90%,71%)' : 'none'};
  margin:${({size}) => size === 'snapshot' ? ' 0 auto' : 'none'};
  cursor:${({fullPage}) => fullPage ? 'unset' : 'pointer'};
`

export const Header = styled.h1`
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-weight:100;
	font-size:46px;
	background:${({size}) => size === 'snapshot' ? 'none' : '#eee'};
	margin-bottom:2rem;
	
	small {
		font-size:1.2rem;
		background:${({size}) => size === 'snapshot' ? 'none' : '#fff'};
		letter-spacing: 0.3rem;
	}
`

export const SubTitle = styled.span`
	font-size:3rem;
	border-top:1px solid;
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
	
	span {
		font-size:2rem;
	}
`

export const Type = styled.div`
	margin-bottom:2rem;
	padding: 0.5rem;
  font-size: 1.2rem;
  color: #fff;
  text-transform: uppercase;
	background:${({type}) => {
		switch (type) {
			case 'technology':
				return 'hsl(194, 90%, 61%)'
			case 'coding':
				return 'hsl(128, 90%, 61%)'
			case 'music':
				return 'hsl(30,90%,61%)'
			default:
				return '#000'
		}
	}};
`