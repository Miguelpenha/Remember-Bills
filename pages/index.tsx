import api from '../services/api'
import { IBill } from '../types'
import Head from 'next/head'
import { Container, Title, Bills } from '../styles/pages'
import ButtonLink from '../components/buttons/ButtonLink'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'
import Bill from '../components/Bill'

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
                {bills && bills.map((bill, index) => (
                    <Bill mutate={mutate as any} bill={bill} key={index}/>
                ))}
            </Bills>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth