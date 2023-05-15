import styled from 'styled-components'

interface ILoading {
    size?: number
    speed?: number
    weight?: number
}

const Loading = styled.span<ILoading>`
    margin: auto;
    border-radius: 50%;
    width: ${props => props.size || 37.5}px;
    height: ${props => props.size || 37.5}px;
    animation: spin ${props => props.speed || 1}s linear infinite;
    border: ${props => props.weight || 5}px solid ${props => props.theme.backgroundColorSecondary};
    border-top: ${props => props.weight || 5}px solid ${props => props.theme.primary};
    
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

export default Loading