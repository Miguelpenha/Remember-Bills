import Head from 'next/head'
import { Container, Buttons } from '../styles/pages/settings'
import Title from '../components/Title'
import ButtonExport from '../components/buttons/ButtonExport'
import ButtonLogout from '../components/buttons/ButtonLogout'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Settings() {
    return <>
        <Head>
            <title>Configurações</title>
        </Head>
        <Container>
            <Title>Configurações</Title>
            <Buttons>
                <ButtonExport/>
                <ButtonLogout/>
            </Buttons>
        </Container>
    </>
}

export default Settings

export const getServerSideProps = getServerSidePropsAuth