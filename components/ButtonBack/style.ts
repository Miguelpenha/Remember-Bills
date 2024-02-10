import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled(Link)`
    width: 4em;
    margin: 2em;
    height: auto;
    padding: 0.2em;
    margin-bottom: 0;
    border-radius: 50%;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.secondary};
    }

    @media screen and (max-width: 900px) {
        margin: 5%;
        width: 2.5em;
    }
`

export const Icon = styled.svg`
    width: 100%;
    height: auto;
    fill: ${props => props.theme.primary};
`