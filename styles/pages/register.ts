import styled from 'styled-components'
import ButtonSubmitRaw from '../../components/buttons/ButtonSubmit'

export const Container = styled.main`
    display: flex;
    flex-direction: column;
`

export const Form = styled.form`
    width: 35em;
    padding: 2em;
    display: flex;
    padding-top: 3em;
    margin-bottom: 7%;
    align-self: center;
    border-radius: 15px;
    flex-direction: column;
    background-color: ${props => props.theme.secondary};

    @media screen and (max-width: 650px) {
        width: calc(8em + 50%);
    }
`

export const Field = styled.div`
    width: 20em;
    display: flex;
    margin-bottom: 2em;
    align-self: center;
    flex-direction: column;

    @media screen and (max-width: 650px) {
        width: 15em;
    }
`

export const Label = styled.label`
    font-size: 1.2em;
    color: ${props => props.theme.colorSecondary};
`

export const Required = styled.span`
    color: red;
    font-size: 1.2em;
`

export const ButtonSubmit = styled(ButtonSubmitRaw)`
    margin-top: 1em;
`