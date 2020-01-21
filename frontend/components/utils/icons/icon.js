import getIcon from './index'
import {IconStyled} from './icon_styled'

export const Icon = (props) => (
	<IconStyled {...props}>{getIcon(props.id)}</IconStyled>
)