import api from '../services/api'
import { IBill } from '../types'
import Head from 'next/head'
import { Container, Title, Bills, Bill, DateBill, TitleBill, PriceBill } from '../styles/pages'
import ButtonLink from '../components/buttons/ButtonLink'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    const { data: bills } = api.get<IBill[]>('/bills')
    const year = new Date().toLocaleDateString('pt-br', { timeZone: 'UTC', year: 'numeric' })

    return <>
        <Head>
            <title>Home</title>
        </Head>
        <Container>
            <Title>Home</Title>
            <ButtonLink href="/register">Cadastrar conta</ButtonLink>
            <Bills>
                {bills && bills.map((bill, index) => (
                    <Bill key={index}>
                        <DateBill>{bill.payday}/{month}/{year}</DateBill>
                        <TitleBill>{bill.name}</TitleBill>
                        <PriceBill>{bill.priceRaw}</PriceBill>
                    </Bill>
                ))}
            </Bills>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth