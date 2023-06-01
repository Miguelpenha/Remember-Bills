import ISituation from '../../../types/situation'
import { FC } from 'react'
import useHandleClick from './useHandleClick'
import { Container, Texts, Title, Value } from './style'
import Icon from './Icon'

interface IProps {
    title: string
    situation: ISituation
    insight: number | string | undefined
}

const Insight: FC<IProps> = ({ situation, title, insight }) => {
    const handleClick = useHandleClick(String(insight))

    return (
        <Container onClick={handleClick}>
            <Icon situation={situation}/>
            <Texts>
                <Title>{title}</Title>
                <Value>{insight}</Value>
            </Texts>
        </Container>
    )
}

export default Insight