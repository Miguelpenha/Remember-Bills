import { useState } from 'react'
import useBills from '../components/useBills'
import Head from 'next/head'
import { Container, Options, Filters, InputSearch } from '../styles/pages'
import Title from '../components/Title'
import ButtonLink from '../components/buttons/ButtonLink'
import ButtonReset from '../components/ButtonReset'
import Bills from '../components/Bills'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    const [search, setSearch] = useState('')
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
            <Filters>
                <InputSearch type="search" onChange={ev => setSearch(ev.target.value)} id="search" name="search" placeholder="Buscar"/>
            </Filters>
            <Bills search={search} bills={bills} mutate={mutate}/>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth