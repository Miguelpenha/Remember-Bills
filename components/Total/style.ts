import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    height: 3em;
    margin: 2em;
    display: flex;
    max-width: 46em;
    overflow: hidden;
    align-self: center;
    border-radius: 10px;
    background-color: ${props => props.theme.secondary};

    @media screen and (max-width: 900px) {
        max-width: 24em;
    }
`

export const Part = styled.div`
    width: 0%;
    display: flex;
    min-width: 7em;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`