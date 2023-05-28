import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1em;
`

export const ContainerPrice = styled.div`
    display: flex;
    align-items: center;
`

export const Price = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
    }
`

export const Owner = styled.span`
    font-size: 1.5em;
    margin-left: auto;
    color: ${props => props.theme.colorSecondary};

    @media screen and (max-width: 900px) {
        font-size: 1.2em;
    }
`