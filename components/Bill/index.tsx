import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import { FC } from 'react'
import getDate from './getDate'
import { Container, Header, PayDay, Title } from './style'
import handlePayment from './handlePayment'
import Options from './Options'
import Footer from './Footer'

interface IProps {
    bill: IBill
    mutate: KeyedMutator<IBill[]>
    onDelete: (bill: IBill) => void
}

const Bill: FC<IProps> = ({ bill, mutate, onDelete }) => {
    const date = getDate(bill)

    async function handleClick() {
        await handlePayment(bill._id, !bill.paid)
            
        await mutate()
    }
    
    return (
        <Container paid={bill.paid} onClick={handleClick}>
            <Header>
                <PayDay>{date}</PayDay>
                <Options bill={bill} mutate={mutate} onDelete={onDelete}/>
            </Header>
            <Title>{bill.name}</Title>
            <Footer bill={bill}/>
        </Container>
    )
}

export default Bill