import { KeyedMutator, mutate } from 'swr'
import { IBill } from '../../../types'
import { Dispatch, SetStateAction, FC } from 'react'
import handleDelete from './handleDelete'
import Modal from '../../Modal'
import { Container, Title, Buttons, Button, ButtonDelete } from './style'

interface IProps {
    open: boolean
    billID: string | undefined
    mutate: KeyedMutator<IBill[]>
    setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalDelete: FC<IProps> = ({ setOpen, open, billID }) => {
    async function onDelete() {
        if (billID) {
            await handleDelete(billID)

            setOpen(false)

            await mutate('/bills')
        }
    }

    return (
        <Modal width="32vw" height="21em" open={open} setOpen={setOpen}>
            <Container>
                <Title>Deletar essa conta?</Title>
                <Buttons>
                    <Button title="Cancelar" onClick={() => setOpen(false)}/>
                    <ButtonDelete title="Excluir" onClick={onDelete}/>
                </Buttons>
            </Container>
        </Modal>
    )
}

export default ModalDelete