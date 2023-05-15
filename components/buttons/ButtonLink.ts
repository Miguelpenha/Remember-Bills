import styled from 'styled-components'
import Link from 'next/link'

const ButtonLink = styled(Link)`
    margin: 1.5%;
    width: 18rem;
    display: flex;
    padding: 1.2rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.4rem;
    align-self: center;
    border-radius: 10px;
    text-decoration: none;
    transform: scale(0.95);
    justify-content: center;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
    box-shadow: ${props => props.theme.primary} 0px 3px 12px 1px;

    :hover {
        transform: scale(1);
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: ${props => props.theme.primary} 0px 5px 14px 6px;
    }
`

export default ButtonLink