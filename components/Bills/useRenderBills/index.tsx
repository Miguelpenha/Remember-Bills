import IProps from '../type'
import { IBill } from '../../../types'
import renderBill from './renderBill'

interface IPropsRenderBills extends IProps {
    onDelete: (bill: IBill) => void
}

function useRenderBills({ bills, search, situation, onDelete, mutate }: IPropsRenderBills) {
    function renderBills() {
        if (bills) {
            return (
                bills.map((bill, index) => (
                    renderBill({
                        bill,
                        index,
                        mutate,
                        search,
                        onDelete,
                        situation
                    })
                ))
            )
        } else {
            return null
        }
    }

    return renderBills
}

export default useRenderBills