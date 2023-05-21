import { useForm } from 'react-hook-form'
import { IBill } from '../types'
import { useRouter } from 'next/router'
import { useEffect, FormEvent } from 'react'
import api from '../services/api/base'
import { toast } from 'react-toastify'
import Head from 'next/head'
import { Container, Title, Form, Field, Label, Required, ButtonSubmit } from '../styles/pages/register'
import Input from '../components/Input'
import CurrencyInput from '../components/CurrencyInput'
import InputMask from '../components/InputMask'
import getServerSidePropsAuth from '../utils/getServerSidePropsAuth'

function Create() {
    const { watch, register, setValue } = useForm<IBill>()
    const bill = watch()
    const router = useRouter()

    useEffect(() => {
        register('payday')
    }, [])

    async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        await api.post('/bills/create', bill)

        toast('Conta cadastrada com sucesso!', {
            type: 'success'
        })
        
        router.push('/')
    }

    return <>
        <Head>
            <title>Cadastrar conta</title>
        </Head>
        <Container>
            <Title>Cadastrar conta</Title>
            <Form onSubmit={handleSubmit}>
                <Field>
                    <Label htmlFor="name">Nome <Required>*</Required></Label>
                    <Input
                        required
                        id="name"
                        {...register('name')}
                        placeholder="Nome da conta..."
                    />
                </Field>
                <Field>
                    <Label htmlFor="priceRaw">Preço <Required>*</Required></Label>
                    <CurrencyInput
                        required
                        id="priceRaw"
                        {...register('priceRaw')}
                        placeholder="Preço da conta..."
                        intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
                    />
                </Field>
                <Field>
                    <Label htmlFor="payday">Dia do pagamento <Required>*</Required></Label>
                    <InputMask name="payday" mask="99" onChange={ev => setValue('payday', Number(ev.target.value))}>
                        <Input
                            required
                            id="payday"
                            placeholder="Dia do pagamento da conta"
                        />
                    </InputMask>
                </Field>
                <Field>
                    <Label htmlFor="owner">Dono <Required>*</Required></Label>
                    <Input
                        required
                        id="owner"
                        {...register('owner')}
                        placeholder="Dono da conta..."
                    />
                </Field>
                <ButtonSubmit type="submit" title="Cadastrar"/>
            </Form>
        </Container>
    </>
}

export default Create

export const getServerSideProps = getServerSidePropsAuth