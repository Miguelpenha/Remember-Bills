import { FC } from 'react'
import { Container, Icon } from './style'

interface IProps {
    href?: string
}

const ButtonBack: FC<IProps> = ({ href='/' }) => {
    return (
        <Container href={href}>
            <Icon xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
                <rect fill="none" height="24" width="24"/>
                <g>
                    <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
                </g>
            </Icon>
        </Container>
    )
}

export default ButtonBack