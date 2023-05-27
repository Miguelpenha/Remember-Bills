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