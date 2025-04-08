import { IBill } from '@/types'
import { FC } from 'react'
import useTotal from './useTotal'
import useAnimation from './useAnimation'
import { Container, Part } from './style'

interface IProps {
    bills: IBill[] | undefined
}

const Total: FC<IProps> = ({ bills }) => {
    const { percentPaid, totalValuePaid, totalValueNoPaid } = useTotal(bills)

    useAnimation(percentPaid)

    return (
        <Container id="total">
            <Part className="paid">{totalValuePaid}</Part>
            <Part className="total">{totalValueNoPaid}</Part>
        </Container>
    )
}

export default Total