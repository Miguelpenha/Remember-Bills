import { useForm } from 'react-hook-form'
import { IBill } from '../types'
import Head from 'next/head'
import { Container, Title, Form, Field, Label, ButtonSubmit } from '../styles/pages'
import Input from '../components/Input'
import CurrencyInput from '../components/CurrencyInput'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Create() {
    const { watch, register } = useForm<IBill>()
    const bill = watch()

    return <>
        <Head>
            <title>Cadastrar conta</title>
        </Head>
        <Container>
            <Title>Cadastrar conta</Title>
            <Form onSubmit={() => {}}>
                <Field>
                    <Label htmlFor="name">Nome</Label>
                    <Input
                        required
                        id="name"
                        {...register('name')}
                        placeholder="Nome da conta..."
                    />
                </Field>
                <Field>
                    <Label htmlFor="priceRaw">Preço</Label>
                    <CurrencyInput
                        required
                        id="priceRaw"
                        {...register('priceRaw')}
                        placeholder="Preço da conta..."
                        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    />
                </Field>
                <Field>
                    <Label htmlFor="payday">Dia do pagamento</Label>
                    <Input
                        required
                        type="date"
                        id="payday"
                        {...register('payday', { valueAsDate: true })}
                    />
                </Field>
                <ButtonSubmit title="Cadastrar"/>
            </Form>
        </Container>
    </>
}

export default Create

export const getServerSideProps = getServerSidePropsAuth