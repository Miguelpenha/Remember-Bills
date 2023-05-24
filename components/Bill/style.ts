import styled, { css } from 'styled-components'

interface IContainer {
    paid: boolean
}

export const Container = styled.a<IContainer>`
    width: 30em;
    padding: 1em;
    display: flex;
    cursor: no-drop;
    align-self: center;
    border-radius: 10px;
    flex-direction: column;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
    filter: brightness(${props => props.paid ? 0.3 : 1});
    box-shadow: ${props => props.theme.primary} 0px 5px 15px 1px;

    ${props => !props.paid && css`
        cursor: pointer;

        :hover {
            transform: scale(1);
            background-color: ${props => props.theme.backgroundColor};
            box-shadow: ${props => props.theme.primary} 0px 5px 18px 6px;
        }
    `}

    @media screen and (max-width: 900px) {
        width: 85%;
    }
`

export const Header = styled.div`
    display: flex;
`

export const PayDay = styled.span`
    font-weight: bold;
    align-self: center;
    color: ${props => props.theme.colorSecondary};
`

export const Options = styled.div`
    display: flex;
    margin-top: auto;
    margin-left: auto;
`

export const Option = styled.button`
    border: none;
    display: flex;
    padding: 0.3em;
    cursor: pointer;
    border-radius: 50%;
    transition-duration: 0.1s;
    background-color: transparent;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.secondary};
    }
`

export const IconOption = styled.svg`
    width: 1.8em;
    fill: ${props => props.theme.primary};
`

export const Title = styled.span`
    font-size: 1.8em;
    margin-top: 0.5em;
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1em;
`

export const Price = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    color: ${props => props.theme.primary};
`

export const Owner = styled.span`
    font-size: 1.5em;
    margin-left: auto;
    color: ${props => props.theme.colorSecondary};
`