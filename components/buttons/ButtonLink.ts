import styled from 'styled-components'
import Link from 'next/link'
import { styleContainer, styleText } from './Button/style'

const ButtonLink = styled(Link)`
    ${styleContainer}

    && {
        text-decoration: none;
    }

    span {
        ${styleText}
    }
`

export default ButtonLink