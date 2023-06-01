import styled, { css } from 'styled-components'

interface IContainer {
    paid: boolean
}

export const Container = styled.a<IContainer>`
    width: 25em;
    padding: 1em;
    display: flex;
    cursor: pointer;
    align-self: center;
    border-radius: 10px;
    flex-direction: column;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
    filter: brightness(${props => props.paid ? 0.4 : 1});
    box-shadow: ${props => props.theme.primary} 0px 2px 8px 1px;

    ${props => !props.paid && css`
        :hover {
            transform: scale(1);
            background-color: ${props => props.theme.backgroundColor};
            box-shadow: ${props => props.theme.primary} 0px 2px 8px 4px;
        }
    `}
`

export const Header = styled.div`
    display: flex;
`

export const PayDay = styled.span`
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.colorSecondary};
`

export const Title = styled.span`
    font-size: 1.8em;
    margin-top: 0.5em;

    @media screen and (max-width: 900px) {
        font-size: 1.3em;
    }
`