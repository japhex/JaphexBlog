import styled from "styled-components"

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding:40px 0;
  border-bottom: 3px solid #cecece;
`

export const HeaderTitle = styled.h1`
	font-family: 'Amatic SC', cursive;
	font-weight:normal;
	font-size:56px;
`

export const LeftNavStyled = styled.div`
	position: absolute;
	top:10px;
	left:10px;
`

export const RightNavStyled = styled.div`
	position: absolute;
	top:10px;
	right:10px;
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
`