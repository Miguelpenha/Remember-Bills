import styled from 'styled-components'

export const Container = styled.button`
    width: 25em;
    padding: 2em;
    border: none;
    display: flex;
    cursor: pointer;
    align-self: center;
    border-radius: 10px;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
    box-shadow: ${props => props.theme.primary} 0px 2px 8px 1px;

    :hover {
        transform: scale(1);
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: ${props => props.theme.primary} 0px 2px 8px 4px;
    }
`

export const Texts = styled.span`
    display: flex;
    margin-left: auto;
    flex-direction: column;
`

export const Title = styled.span`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 1em;
    color: ${props => props.theme.colorSecondary};
`

export const Value = styled.span`
    font-size: 2em;
    color: ${props => props.theme.color};
`