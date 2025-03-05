import styled from 'styled-components'
import Link from 'next/link'
import { IStyleContainer, styleContainer, styleText } from './Button/style'

const ButtonLink = styled(Link)<IStyleContainer>`
    ${styleContainer}

    && {
        text-decoration: none;
    }

    span {
        ${styleText}
    }
`

export default ButtonLink