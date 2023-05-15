import Head from 'next/head'
import { Container, Title } from '../styles/pages'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'
import ButtonLink from '../components/buttons/ButtonLink'

function Home() {
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