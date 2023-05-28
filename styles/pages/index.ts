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

    ::-webkit-search-cancel-button {
        opacity: 1;
        width: 25px;
        right: 10px;
        height: 25px;
        cursor: pointer;
        position: relative;
        border-radius: 10px;
        -webkit-appearance: none;

        ${props => (
            `
                background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="color: ${props.theme.primary.replace('#', '')};" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>');
            ` 
        )}
    }

    @media screen and (max-width: 900px) {
        width: 25em;
    }
`