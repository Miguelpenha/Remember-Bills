import styled from 'styled-components'
import Link from 'next/link'
import { styleText, styleContainer } from './Button/style'

const ButtonLink = styled(Link)`
    ${styleText}
    ${styleContainer}
    
    && {
        font-size: 1.4rem;
        text-decoration: none;
        justify-content: center;
    }
`

export default ButtonLink