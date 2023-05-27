import styled from 'styled-components'

const Title = styled.h1`
    margin-top: 6vh;
    font-size: 2.2em;
    align-self: center;
    text-align: center;
    margin-bottom: 6vh;
    color: ${props => props.theme.color};

    @media screen and (max-width: 900px) {
        font-size: 1.5em;
    }
`

export default Title