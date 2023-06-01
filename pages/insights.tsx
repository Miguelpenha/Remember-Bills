import api from '../services/api'
import { IBill } from '../types'
import useInsights from '../components/useInsights'
import Head from 'next/head'
import { Container } from '../styles/pages/insights'
import Title from '../components/Title'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Insights() {
    const { data: bills } = api.get<IBill[]>('/bills')
    const { billsPaid, billsNoPaid, billsTotalValue, billsTotalValuePaid, billsTotalValueNoPaid } = useInsights(bills)

    return <>
        <Head>
            <title>Insights</title>
        </Head>
        <Container>
            <Title>Insights</Title>
            <span>Total de contas {bills?.length}</span>
            <span>Total de contas pagas {billsPaid}</span>
            <span>Total de contas não pagas {billsNoPaid}</span>
            <br/>
            <span>Valor total a pagar {billsTotalValue}</span>
            <span>Valor total pago {billsTotalValuePaid}</span>
            <span>Valor total não pago {billsTotalValueNoPaid}</span>
        </Container>
    </>
}

export default Insights

export const getServerSideProps = getServerSidePropsAuth