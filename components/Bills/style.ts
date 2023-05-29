import styled from 'styled-components'
import LoadingRaw from '../Loading'

export const Container = styled.div`
    gap: 3em;
    display: flex;
    max-width: 90%;
    flex-wrap: wrap;
    margin-top: 1em;
    align-self: center;
    margin-bottom: 5em;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`

export const Loading = styled(LoadingRaw)`
    margin-top: 2em;
`