import styled from 'styled-components'
import ButtonRaw from '../Button'

export const Button = styled(ButtonRaw)`
    box-shadow: red 0px 2px 8px 1px;

    &:hover {
        box-shadow: red 0px 2px 8px 4px;
    }

    svg {
        fill: red;
    }

    span {
        color: red;
    }
`