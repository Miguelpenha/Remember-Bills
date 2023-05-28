import { ISituation } from './type'
import styled from 'styled-components'
import getColorSituation from './getColorSituation'

interface IIcon {
    situation: ISituation
}

export const Icon = styled.svg<IIcon>`
    width: 1.8em;
    margin-right: 0.5em;
    fill: ${props => getColorSituation(props.situation)};
`