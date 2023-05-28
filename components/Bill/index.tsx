import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import { FC } from 'react'
import formatDay from '../../utils/formatDay'
import getSituation from './Situation/getSituation'
import { Container, Header, PayDay, Options, Option, OptionLink, IconOption, Title, Footer, ContainerPrice, Price, Owner } from './style'
import handlePayment from './handlePayment'
import Situation from './Situation'

interface IProps {
    bill: IBill
    mutate: KeyedMutator<IBill[]>
    onDelete: (bill: IBill) => void
}

const Bill: FC<IProps> = ({ bill, mutate, onDelete }) => {
    const month = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', month: '2-digit' })
    const year = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', year: 'numeric' })
    const day = formatDay(bill.payday)
    
    return (
        <Container paid={bill.paid} onClick={async () => {
            await handlePayment(bill._id, !bill.paid)
            
            await mutate()
        }}>
            <Header>
                <PayDay>{day}/{month}/{year}</PayDay>
                <Options>
                    <OptionLink href={`/edit/${bill._id}`} onClick={ev => ev.stopPropagation()}>
                        <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </IconOption>
                    </OptionLink>
                    <Option onClick={async ev => {
                        ev.stopPropagation()

                        onDelete(bill)

                        await mutate()
                    }}>
                        <IconOption delete xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </IconOption>
                    </Option>
                </Options>
            </Header>
            <Title>{bill.name}</Title>
            <Footer>
                <ContainerPrice>
                    <Situation bill={bill}/>
                    <Price>{bill.priceRaw}</Price>
                </ContainerPrice>
                <Owner>{bill.owner}</Owner>
            </Footer>
        </Container>
    )
}

export default Bill