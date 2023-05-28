import { IBill } from '../../../types'
import { FC } from 'react'
import { Container, ContainerPrice, Price, Owner } from './style'
import Situation from './Situation'

interface IProps {
    bill: IBill
}

const Footer: FC<IProps> = ({ bill }) => {
    return (
        <Container>
            <ContainerPrice>
                <Situation bill={bill}/>
                <Price>{bill.priceRaw}</Price>
            </ContainerPrice>
            <Owner>{bill.owner}</Owner>
        </Container>
    )
}

export default Footer