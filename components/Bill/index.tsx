import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import { FC } from 'react'
import formatDay from '../../utils/formatDay'
import { Container, Header, PayDay, Options, Option, OptionLink, IconOption, Title, Footer, Price, Owner } from './style'
import handleClick from './handleClick'
import handleDelete from './handleDelete'

interface IProps {
    bill: IBill
    mutate: KeyedMutator<IBill[]>
}

const Bill: FC<IProps> = ({ bill, mutate }) => {
    const month = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', month: '2-digit' })
    const year = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', year: 'numeric' })
    const day = formatDay(bill.payday)
    
    return (
        <Container paid={bill.paid} onClick={async () => {
            if (!bill.paid) {
                await handleClick(bill._id)

                await mutate()
            }
        }}>
            <Header>
                    <PayDay>{day}/{month}/{year}</PayDay>
                    {!bill.paid && (
                        <Options>
                            <OptionLink href={`/edit/${bill._id}`} onClick={ev => ev.stopPropagation()}>
                                <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </IconOption>
                            </OptionLink>
                            <Option onClick={async ev => {
                                ev.stopPropagation()

                                await handleDelete(bill._id)

                                await mutate()
                            }}>
                                <IconOption xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                </IconOption>
                            </Option>
                        </Options>
                    )}
                </Header>
            <Title>{bill.name}</Title>
            <Footer>
                <Price>{bill.priceRaw}</Price>
                <Owner>{bill.owner}</Owner>
            </Footer>
        </Container>
    )
}

export default Bill