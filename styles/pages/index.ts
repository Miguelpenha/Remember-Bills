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

export const Bills = styled.div`
    display: flex;
    margin-top: 3em;
    align-self: center;
`

export const Bill = styled.div`
    width: 25em;
    padding: 1em;
    display: flex;
    cursor: pointer;
    border-radius: 10px;
    flex-direction: column;
    transform: scale(0.95);
    transition-duration: 0.2s;
    transition-timing-function: linear;
    background-color: ${props => props.theme.secondary};
    box-shadow: ${props => props.theme.primary} 0px 5px 15px 1px;

    :hover {
        transform: scale(1);
        background-color: ${props => props.theme.backgroundColor};
        box-shadow: ${props => props.theme.primary} 0px 5px 18px 6px;
    }
`

export const DateBill = styled.span`
    font-weight: bold;
    color: ${props => props.theme.colorSecondary};
`

export const TitleBill = styled.span`
    font-size: 1.8em;
    margin-top: 0.5em;
`

export const PriceBill = styled.span`
    margin-top: 0.5em;
    font-size: 1.5em;
    font-weight: bold;
    color: ${props => props.theme.primary};
`