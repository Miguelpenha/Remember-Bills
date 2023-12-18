import { FC, useState } from 'react'
import IProps from './type'
import { IBill } from '../../types'
import { Container, Loading } from './style'
import useRenderBills from './useRenderBills'
import ModalDelete from '../Modals/ModalDelete'

const Bills: FC<IProps> = ({ bills, search, situation, mutate }) => {
    const [modalDelete, setModalDelete] = useState(false)
    const [billDelete, setBillDelete] = useState<string>()
    const renderBills = useRenderBills({ bills, search, situation, onDelete, mutate })

    function onDelete(bill: IBill) {
        setModalDelete(true)

        setBillDelete(bill._id)
    }

    if (bills) {
        return (
            <Container>
                {renderBills()}
                <ModalDelete
                    mutate={mutate}
                    open={modalDelete}
                    billID={billDelete}
                    setOpen={setModalDelete}
                />
            </Container>
        )
    } else {
        return <Loading size={140} weight={15}/>
    }
}

export default Bills