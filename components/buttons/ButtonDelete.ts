import styled from 'styled-components'
import Button from './Button'

const ButtonDelete = styled(Button)`
    && {
        box-shadow: red 0px 2px 8px 1px;

        :hover {
            box-shadow: red 0px 2px 8px 4px;
        }

        span {
            color: red;
        }
    }
`

export default ButtonDelete