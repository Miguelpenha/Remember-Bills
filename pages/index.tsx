import useBills from '../components/useBills'
import Head from 'next/head'
import { Container, Title, Options } from '../styles/pages'
import ButtonLink from '../components/buttons/ButtonLink'
import ButtonReset from '../components/ButtonReset'
import Bills from '../components/Bills'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    const { bills, mutate } = useBills()

    return <>
        <Head>
            <title>Home</title>
        </Head>
        <Container>
            <Title>Home</Title>
            <Options>
                <ButtonLink href="/register">Cadastrar conta</ButtonLink>
                <ButtonReset mutate={mutate}/>
            </Options>
            <Bills bills={bills} mutate={mutate}/>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth