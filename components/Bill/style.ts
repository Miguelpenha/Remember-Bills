import styled, { css } from 'styled-components'
import Link from 'next/link'

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

export const Options = styled.div`
    display: flex;
    margin-top: auto;
    margin-left: auto;
`

const styleOption = css`
    display: flex;
    padding: 0.3em;
    align-self: center;
    border-radius: 50%;
    transition-duration: 0.1s;
    transition-timing-function: linear;

    :hover {
        background-color: ${props => props.theme.secondary};
    }
`

export const Option = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;

    ${styleOption}
`

export const OptionLink = styled(Link)`
    ${styleOption}
`

interface IIconOption {
    delete?: boolean
}

export const IconOption = styled.svg<IIconOption>`
    width: 1.8em;
    fill: ${props => props.delete ? 'red' : props.theme.primary};
`

export const Title = styled.span`
    font-size: 1.8em;
    margin-top: 0.5em;

    @media screen and (max-width: 900px) {
        font-size: 1.3em;
    }
`

export const Footer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1em;
`

export const ContainerPrice = styled.div`
    display: flex;
    align-items: center;
`

export const Price = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
    }
`

export const Owner = styled.span`
    font-size: 1.5em;
    margin-left: auto;
    color: ${props => props.theme.colorSecondary};

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
    }
`