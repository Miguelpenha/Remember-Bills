import styled, { css } from 'styled-components'
import Button from './Button'

const ButtonSubmit = styled(Button)`
    && {
        margin: 0%;
        width: 14rem;
        background-color: ${props => props.disabled ? props.theme.secondary : props.theme.backgroundColor};

        ${props => !props.disabled && css`
            &:hover {
                background-color: ${props => props.theme.secondary};
            }
        `}
    }
`

export default ButtonSubmit