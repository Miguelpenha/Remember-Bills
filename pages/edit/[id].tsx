import { useRouter } from 'next/router'
import api from '../../services/api'
import { IBill } from '../../types'
import Head from 'next/head'
import { Container, Form, Field, Label, Required, ButtonSubmit } from '../../styles/pages/edit'
import ButtonBack from '../../components/ButtonBack'
import Title from '../../components/Title'
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
    const { watch, register, setValue } = useForm<IBill>({
        values: data
    })
    const bill = watch()
    const router = useRouter()

    useEffect(() => {
        register('payday')
    }, [])

    async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        
        await base.post('/bills/edit', {
            ...bill,
            id: data?._id
        })

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
                <ButtonBack/>
                <Title>Editar {data?.name}</Title>
                <Form onSubmit={handleSubmit}>
                    <Field>
                        <Label htmlFor="name">Nome <Required>*</Required></Label>
                        <Input
                            required
                            id="name"
                            {...register('name')}
                            defaultValue={data.name}
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
                            defaultValue={String(data.price).slice(0, -2)+','+String(data.price).slice(-2)}
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="payday">Dia do pagamento <Required>*</Required></Label>
                        <InputMask defaultValue={data.payday} name="payday" mask="99" onChange={(ev: any) => setValue('payday', ev.target.value)}>
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
                            defaultValue={data.owner}
                            placeholder="Dono da conta..."
                        />
                    </Field>
                    <ButtonSubmit type="submit" title="Editar">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                        </svg>
                    </ButtonSubmit>
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