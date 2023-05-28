import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Options = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 900px) {
        gap: 1.5em;
        flex-wrap: wrap;
    }
`

export const Filters = styled.div`
    padding: 2em;
    display: flex;
    padding-top: 3em;
    flex-direction: row;
    justify-content: center;
`

export const InputSearch = styled.input`
    width: 35em;
    border: none;
    padding: 1em;
    font-size: 1em;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondary};
    box-shadow: ${props => props.theme.primary} 0px 1px 8px 1px;

    ::placeholder {
        color: ${props => props.theme.colorSecondary};
    }

    :focus {
        outline: none;
        border-radius: 8px;
        box-shadow: ${props => props.theme.primary} 0px 2px 8px 4px;
    }

    @media screen and (max-width: 900px) {
        width: 25em;
    }
`