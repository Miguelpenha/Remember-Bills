import { useState } from 'react'
import ISituation from '../types/situation'
import useBills from '../components/useBills'
import Head from 'next/head'
import { Container, Options, Filters, InputSearch } from '../styles/pages'
import ButtonSettings from '../components/ButtonSettings'
import Title from '../components/Title'
import ButtonLink from '../components/buttons/ButtonLink'
import ButtonReset from '../components/ButtonReset'
import SelectSituation from '../components/SelectSituation'
import Bills from '../components/Bills'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Home() {
    const [search, setSearch] = useState('')
    const [situation, setSituation] = useState<ISituation | undefined>(undefined)
    const { bills, mutate } = useBills()

    return <>
        <Head>
            <title>Home</title>
        </Head>
        <Container>
            <ButtonSettings/>
            <Title>Home</Title>
            <Options>
                <ButtonLink href="/register">Cadastrar conta</ButtonLink>
                <ButtonReset mutate={mutate}/>
            </Options>
            <Filters>
                <InputSearch
                    id="search"
                    type="search"
                    name="search"
                    placeholder="Buscar"
                    onChange={ev => setSearch(ev.target.value)}
                />
                <SelectSituation setSituation={setSituation}/>
            </Filters>
            <Bills search={search} bills={bills} mutate={mutate} situation={situation}/>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth