import { IBill } from '../../types'
import { KeyedMutator } from 'swr'
import { FC, useState } from 'react'
import { Container, Loading } from './style'
import includesInBill from './includesInBill'
import Bill from '../Bill'
import ModalDelete from '../Modals/ModalDelete'

interface IProps {
    search: string
    bills: IBill[] | undefined
    mutate: KeyedMutator<IBill[]>
}

const Bills: FC<IProps> = ({ bills, search, mutate }) => {
    const [modalDelete, setModalDelete] = useState(false)
    const [billDelete, setBillDelete] = useState<string>()

    function onDelete(bill: IBill) {
        setModalDelete(true)

        setBillDelete(bill._id)
    }

    if (bills) {
        return (
            <Container>
                {bills.map((bill, index) => {
                    if (includesInBill(bill, search)) {
                        return (
                            <Bill onDelete={onDelete} mutate={mutate} bill={bill} key={index}/>
                        )
                    }
                })}
                <ModalDelete mutate={mutate} billID={billDelete} open={modalDelete} setOpen={setModalDelete}/>
            </Container>
        )
    } else {
        return <Loading size={140} weight={15}/>
    }
}

export default Bills