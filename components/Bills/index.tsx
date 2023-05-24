import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import { FC } from 'react'
import { Container } from './style'
import Bill from '../Bill'
import Loading from '../Loading'

interface IProps {
    bills: IBill[] | undefined
    mutate: KeyedMutator<IBill[]>
}

const Bills: FC<IProps> = ({ bills, mutate }) => {
    if (bills) {
        return (
            <Container>
                {bills.map((bill, index) => (
                    <Bill mutate={mutate} bill={bill} key={index}/>
                ))}
            </Container>
        )
    } else {
        return <Loading size={140} weight={15}/>
    }
}

export default Bills