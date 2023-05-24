import api from '../services/api'
import { IBill } from '../types'
import Head from 'next/head'
import { Container, Title, Options, Bills } from '../styles/pages'
import ButtonLink from '../components/buttons/ButtonLink'
import Button from '../components/buttons/Button'
import handleReset from '../components/handleReset'
import Bill from '../components/Bill'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'
import Loading from '../components/Loading'

function Home() {
    const { data: bills, mutate } = api.get<IBill[]>('/bills')

    bills?.sort((a, b) => b.price - a.price)
    bills?.sort((a, b) => a.payday - b.payday)
    bills?.sort((a, b) => Number(a.paid) - Number(b.paid))

    return <>
        <Head>
            <title>Home</title>
        </Head>
        <Container>
            <Title>Home</Title>
            <Options>
                <ButtonLink href="/register">Cadastrar conta</ButtonLink>
                <Button title="Resetar" onClick={async () => {
                    await handleReset()

                    await mutate()
                }}>
                    <svg width="3em" height="3em" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none"/>
                        </g>
                        <g>
                            <g>
                                <path d="M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z"/>
                                <path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z"/>
                            </g>
                        </g>
                    </svg>
                </Button>
            </Options>
            <Bills>
                {bills ? bills.map((bill, index) => (
                    <Bill mutate={mutate as any} bill={bill} key={index}/>
                )) : <Loading size={140} weight={15}/>}
            </Bills>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth