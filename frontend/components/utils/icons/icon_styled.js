import styled from "styled-components"

export const IconStyled = styled.i`
  width:${({iconWidth}) => iconWidth ? iconWidth : '3rem'};
  height:${({iconHeight}) => iconHeight ? iconHeight : '3rem'};
  display: block;
  position: relative;
  flex-shrink: 0;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`