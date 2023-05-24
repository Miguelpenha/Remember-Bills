import { useRouter } from 'next/router'
import api from '../../services/api'
import { IBill } from '../../types'
import Head from 'next/head'
import { Container, Title, Form, Field, Label, Required, ButtonSubmit } from '../../styles/pages/edit'
import Input from '../../components/Input'
import InputMask from '../../components/InputMask'
import CurrencyInput from '../../components/CurrencyInput'
import getServerSidePropsAuth from '../../utils/getServerSidePropsAuth'
import Loading from '../../components/Loading'
import { useForm } from 'react-hook-form'
import { FormEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import base from '../../services/api/base'

interface IQuery {
    id: string
}

function Edit() {
    const { id } = useRouter().query as unknown as IQuery
    const { data } = api.get<IBill>(`/bills/get/${id}`)
    const { watch, register, setValue } = useForm<IBill>()
    const bill = watch()
    const router = useRouter()

    useEffect(() => {
        register('payday')
    }, [])

    async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()

        await base.post('/bills/edit', bill)

        toast('Conta editada com sucesso!', {
            type: 'success'
        })
        
        router.push('/')
    }

    if (data) {
        return <>
            <Head>
                <title>{`Editando ${data?.name || ''}`}</title>
            </Head>
            <Container>
                <Title>Editar {data?.name}</Title>
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
    } else {
        return (
            <Container loading={true}>
                <Loading size={140} weight={15}/>
            </Container>
        )
    }
}

export default Edit

export const getServerSideProps = getServerSidePropsAuth