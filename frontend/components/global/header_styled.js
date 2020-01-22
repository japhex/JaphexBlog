import styled from "styled-components"

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({lockHeader}) => lockHeader ? '5px 0' : '40px 0'};
  border-bottom: 3px solid #cecece;
  transition: padding 0.2s ease-in;
  position: fixed;
  left:0;
  top:0;
  width:100%;
  background:#fff;
`

export const HeaderTitle = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1 1 0px;
	font-family: 'Amatic SC', cursive;
	font-weight: normal;
	font-size: ${({lockHeader}) => lockHeader ? '2.5rem' : '4rem'};
	
	a {
		color:#000;
		text-decoration: none;
	}
`

export const LeftNavStyled = styled.div`
	display: flex;
	flex: 1 1 0px;
	padding-left:15px;
	position: ${({lockHeader}) => lockHeader ? 'static' : 'absolute'};
	transition: position 0.5s ease-in;
	top:15px;
	left:0;
`

export const RightNavStyled = styled.div`
	display:flex;
	flex: 1 1 0px;
	order: 3;
	justify-content: flex-end;
	padding-right:15px;
	position: ${({lockHeader}) => lockHeader ? 'static' : 'absolute'};
	transition: position 0.5s ease-in;
	top:10px;
	right:5px;
`

export const BlogLink = styled.a`
	cursor:pointer;
	text-transform:uppercase;
	font-size:12px;
	padding:0 5px;
`

export const SocialIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	
	i {
		margin-right:5px;
		
		&:first-child {
			margin-right:10px;
		}
	}
	
	a:last-child {
		i {
			margin-right:0;
		}
	}
`