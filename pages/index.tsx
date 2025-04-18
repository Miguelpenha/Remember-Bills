import { useState } from 'react'
import ISituation from '../types/situation'
import useBills from '../components/useBills'
import Head from 'next/head'
import { Container, Options, Filters, InputSearch } from '../styles/pages'
import ButtonSettings from '../components/buttons/ButtonSettings'
import Title from '../components/Title'
import ButtonInsights from '../components/buttons/ButtonInsights'
import ButtonRegister from '../components/buttons/ButtonRegister'
import ButtonReset from '../components/buttons/ButtonReset'
import SelectSituation from '../components/SelectSituation'
import Bills from '../components/Bills'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'
import Total from '@/components/Total'

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
                <ButtonInsights/>
                <ButtonRegister/>
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
            <Total bills={bills}/>
            <Bills search={search} bills={bills} mutate={mutate} situation={situation}/>
        </Container>
    </>
}

export default Home

export const getServerSideProps = getServerSidePropsAuth