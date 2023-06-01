import api from '../services/api'
import { IBill } from '../types'
import Head from 'next/head'
import { Container } from '../styles/pages/insights'
import Title from '../components/Title'
import InsightsList from '../components/Insights'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Insights() {
    const { data: bills } = api.get<IBill[]>('/bills')
    

    return <>
        <Head>
            <title>Insights</title>
        </Head>
        <Container>
            <Title>Insights</Title>
            <InsightsList bills={bills}/>
        </Container>
    </>
}

export default Insights

export const getServerSideProps = getServerSidePropsAuth