import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
    display: flex;
    margin-top: auto;
    margin-left: auto;
`

const styleOption = css`
    display: flex;
    padding: 0.3em;
    align-self: center;
    border-radius: 50%;
    transition-duration: 0.1s;
    transition-timing-function: linear;

    &:hover {
        background-color: ${props => props.theme.secondary};
    }
`

export const Option = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;

    ${styleOption}
`

export const OptionLink = styled(Link)`
    ${styleOption}
`

interface IIconOption {
    delete?: boolean
}

export const IconOption = styled.svg<IIconOption>`
    width: 2.2em;
    fill: ${props => props.delete ? 'red' : props.theme.primary};
`