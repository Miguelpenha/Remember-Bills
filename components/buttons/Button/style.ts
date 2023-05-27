import styled, { css } from 'styled-components'

interface IStyleContainer {
    loading?: string
    disabled?: boolean
}

export const styleContainer = css<IStyleContainer>`
    margin: 1.5%;
    width: 17rem;
    border: none;
    display: flex;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.secondary};
    box-shadow: ${props => props.theme.primary} 0px 2px 8px 1px;

    ${props => props.loading == 'true' && css`
        cursor: default;
    `}

    ${props => !props.disabled && css`
        :hover {
            transform: scale(1);
            background-color: ${props => props.theme.backgroundColor};
            box-shadow: ${props => props.theme.primary} 0px 2px 8px 4px;
        }
    `}

    @media screen and (max-width: 900px) {
        max-width: 80%;
        min-width: 10em;
    }

    svg {
        width: 2.1em;
        height: 2.1em;
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

    @media screen and (max-width: 900px) {
        font-size: 1.7em;
    }
`

export const Text = styled.span`
    ${styleText}
`