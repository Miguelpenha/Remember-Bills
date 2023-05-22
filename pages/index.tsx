import api from '../services/api'
import { IBill } from '../types'
import Head from 'next/head'
import { Container, Title, Bills } from '../styles/pages'
import ButtonLink from '../components/buttons/ButtonLink'
import Bill from '../components/Bill'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    const { data: bills, mutate } = api.get<IBill[]>('/bills')

    return <>
        <Head>
            <title>Home</title>
        </Head>
        <Container>
            <Title>Home</Title>
            <ButtonLink href="/register">Cadastrar conta</ButtonLink>
            <Bills>
                {bills && bills.map((bill, index) => !bill.paid && (
                    <Bill mutate={mutate as any} bill={bill} key={index}/>
                ))}
            </Bills>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth