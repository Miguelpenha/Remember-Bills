import styled, { css } from 'styled-components'
import ButtonRaw from '../../buttons/Button'
import ButtonDeleteRaw from '../../buttons/ButtonDelete'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.span`
    font-size: 1.8em;
    margin-top: 0.4em;
    align-self: center;
    text-align: center;
    color: ${props => props.theme.color};
`

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    margin-top: auto;
    align-self: center;
    margin-bottom: 1em;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
        gap: 1em;
        margin-top: 2em;
        flex-direction: column;
    }
`

const styleButton = css`
    width: 15em;
`

export const Button = styled(ButtonRaw)`
    ${styleButton}
`

export const ButtonDelete = styled(ButtonDeleteRaw)`
    ${styleButton}
`