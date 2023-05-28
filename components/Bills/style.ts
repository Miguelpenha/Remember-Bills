import styled from 'styled-components'

export const Container = styled.div`
    gap: 3em;
    display: flex;
    max-width: 90%;
    flex-wrap: wrap;
    margin-top: 1em;
    align-self: center;
    margin-bottom: 5em;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`