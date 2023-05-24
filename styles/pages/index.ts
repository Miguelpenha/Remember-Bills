import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    margin-top: 8vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;
    margin-bottom: 8vh;
    color: ${props => props.theme.primary};
`

export const Options = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 900px) {
        gap: 1.5em;
        flex-wrap: wrap;
    }
`

export const Bills = styled.div`
    gap: 3em;
    width: 100%;
    display: flex;
    margin-top: 3em;
    align-self: center;
    margin-bottom: 5em;
    flex-direction: column;
`