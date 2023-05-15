import styled from 'styled-components'
import Button from '../../components/buttons/Button'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    width: 80%;
    font-size: 2.5vw;
    margin-top: 4rem;
    align-self: center;
    text-align: center;
    margin-bottom: 3rem;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 8vw;
    }
`

export const ButtonGoogle = styled(Button)`
    margin-bottom: calc(8% + 18em);
`