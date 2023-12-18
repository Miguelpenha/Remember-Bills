import IProps from '../type'
import { IBill } from '../../../types'
import includesInBill from './includesInBill'
import Bill from '../../Bill'

type IPropsRenderBillRaw = Omit<IProps, 'bills'>

interface IPropsRenderBill extends IPropsRenderBillRaw {
    bill: IBill
    index: number
    onDelete: (bill: IBill) => void
}

function renderBill({ mutate, search, situation, onDelete, bill, index }: IPropsRenderBill) {
    if (includesInBill(bill, search, situation)) {
        return (
            <Bill
                key={index}
                bill={bill}
                mutate={mutate}
                onDelete={onDelete}
            />
        )
    } else {
        return null
    }
}

export default renderBill