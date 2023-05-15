import styled from 'styled-components'
import CurrencyInputRaw from 'react-currency-input-field'
import { styleInput } from './Input'

const CurrencyInput = styled(CurrencyInputRaw)`
    ${styleInput}
`

export default CurrencyInput