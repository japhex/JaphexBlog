export const getSize = ({size}) => {
	switch (size) {
		case 'large':
			return 'size-large'
		case 'small':
			return 'size-small'
		case 'snapshot':
			return 'size-snapshot'
		case 'quote':
			return 'size-quote'
		default:
			return 'size-large'
	}
}