import { useEffect } from 'react'
import { IBill } from '../types'
import api from '../services/api'
import Head from 'next/head'
import { Container, Title } from '../styles/pages'
import ButtonLink from '../components/buttons/ButtonLink'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    useEffect(() => {
        async function get() {
            const bills: IBill[] = await api.get('/bills')

            console.log(bills)
        }

        get().then()
    }, [])

    return <>
        <Head>
            <title>Home</title>
        </Head>
        <Container>
            <Title>Home</Title>
            <ButtonLink href="/register">Cadastrar conta</ButtonLink>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth