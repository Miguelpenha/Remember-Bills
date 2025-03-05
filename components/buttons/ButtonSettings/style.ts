import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)`
    top: 1em;
    right: 1em;
    display: flex;
    padding: 0.5em;
    border-radius: 50%;
    position: absolute;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    &:hover {
        background-color: ${props => props.theme.secondary};
        box-shadow: ${props => props.theme.primary} 0px 2px 8px 4px;
    }
`

export const Icon = styled.svg`
    width: 2.1em;
    fill: ${props => props.theme.primary};
`