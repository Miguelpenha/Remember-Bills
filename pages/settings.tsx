import Head from 'next/head'
import { Container } from '../styles/pages/settings'
import Title from '../components/Title'
import ButtonExport from '../components/ButtonExport'
import ButtonLogout from '../components/ButtonLogout'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Settings() {
    return <>
        <Head>
            <title>Configurações</title>
        </Head>
        <Container>
            <Title>Configurações</Title>
            <ButtonExport/>
            <ButtonLogout/>
        </Container>
    </>
}

export default Settings

export const getServerSideProps = getServerSidePropsAuth