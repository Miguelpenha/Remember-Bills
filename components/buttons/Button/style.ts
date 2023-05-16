import styled, { css } from 'styled-components'

interface IStyleContainer {
    loading?: string
    disabled?: boolean
}

export const styleContainer = css<IStyleContainer>`
    margin: 1.5%;
    width: 18rem;
    display: flex;
    padding: 1.2rem;
    cursor: pointer;
    text-align: center;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    text-decoration: none;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.secondary};
    box-shadow: ${props => props.theme.primary} 0px 3px 12px 1px;

    ${props => props.loading == 'true' && css`
        cursor: default;
    `}

    ${props => !props.disabled && css`
        :hover {
            transform: scale(1);
            background-color: ${props => props.theme.backgroundColor};
            box-shadow: ${props => props.theme.primary} 0px 5px 14px 6px;
        }
    `}

    svg {
        margin-left: 1%;
        fill: ${props => props.theme.primary};
    }
`

export const Container = styled.button`
    ${styleContainer}
`

export const styleText = css`
    margin: auto;
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.primary};
`

export const Text = styled.span`
    ${styleText}
`