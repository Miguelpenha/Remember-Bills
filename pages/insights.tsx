import api from '../services/api'
import { IBill } from '../types'
import Head from 'next/head'
import { Container } from '../styles/pages/insights'
import ButtonBack from '../components/ButtonBack'
import Title from '../components/Title'
import InsightsList from '../components/Insights'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Insights() {
    const { data: bills } = api.get<IBill[]>('/bills')

    if (bills) {
        return <>
            <Head>
                <title>Insights</title>
            </Head>
            <Container>
                <ButtonBack/>
                <Title>Insights</Title>
                <InsightsList bills={bills}/>
            </Container>
        </>
    } else {
        return null
    }
}

export default Insights

export const getServerSideProps = getServerSidePropsAuth