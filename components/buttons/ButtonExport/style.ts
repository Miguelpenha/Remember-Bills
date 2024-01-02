import styled from 'styled-components'
import ButtonRaw from '../Button'

export const Button = styled(ButtonRaw)`
    margin-top: 5em;
    box-shadow: #00ac47 0px 2px 8px 1px;

    :hover {
        box-shadow: #00ac47 0px 2px 8px 4px;
    }

    svg {
        fill: #00ac47;
    }

    span {
        color: #00ac47;
    }
`