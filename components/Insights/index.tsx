import { IBill } from '../../types'
import { FC } from 'react'
import useInsights from './useInsights'
import { Container } from './style'
import Insight from './Insight'
import Loading from '../Loading'

interface IProps {
    bills: IBill[] | undefined
}

const Insights: FC<IProps> = ({ bills }) => {
    const { billsPaid, billsNoPaid, billsTotalValue, billsTotalValuePaid, billsTotalValueNoPaid } = useInsights(bills)

    if (bills) {
        return (
            <Container>
                <Insight situation="waiting" title="Total de contas" insight={bills?.length}/>
                <Insight situation="paid" title="Total de contas pagas" insight={billsPaid}/>
                <Insight situation="unpaid" title="Total de contas não pagas" insight={billsNoPaid}/>
                <Insight situation="waiting" title="Valor total a pagar" insight={billsTotalValue}/>
                <Insight situation="paid" title="Valor total pago" insight={billsTotalValuePaid}/>
                <Insight situation="unpaid" title="Valor total não pago" insight={billsTotalValueNoPaid}/>
            </Container>
        )
    } else {
        return <Loading $size={140} $weight={15}/>
    }
}

export default Insights