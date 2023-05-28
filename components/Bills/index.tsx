import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import { FC } from 'react'
import { Container } from './style'
import includesInBill from './includesInBill'
import Bill from '../Bill'
import Loading from '../Loading'

interface IProps {
    search: string
    bills: IBill[] | undefined
    mutate: KeyedMutator<IBill[]>
}

const Bills: FC<IProps> = ({ bills, search, mutate }) => {
    if (bills) {
        return (
            <Container>
                {bills.map((bill, index) => {
                    if (includesInBill(bill, search)) {
                        return (
                            <Bill mutate={mutate} bill={bill} key={index}/>
                        )
                    }
                })}
            </Container>
        )
    } else {
        return <Loading size={140} weight={15}/>
    }
}

export default Bills